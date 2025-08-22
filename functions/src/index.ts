import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onCall } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";
import { defineSecret } from "firebase-functions/params";
import { REGION } from "./config.js";

// Rulepack: dualraid
import dataset from "./rulepacks/dualraid/dataset.js";
import { applyIntent, startGame } from "./rulepacks/dualraid/engine/reducer.js";
import { aiTakeTurn } from "./rulepacks/dualraid/engine/ai.js";
import type { GameState, Action } from "./rulepacks/dualraid/engine/types.js";
import { DualRaidAdapter } from "./rulepacks/dualraid/adapter.js";
import { RULEBOOK } from "./rulepacks/dualraid/rulebook.js";

// Arbiter & Opponent
import { arbitrate } from "./core/arbiter.js";
import { opponentReply } from "./bots/opponent.js";

initializeApp();
const db = getFirestore();
db.settings({ ignoreUndefinedProperties: true });
setGlobalOptions({ region: REGION });

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

function toPublic(gs: GameState) {
  const c: any = JSON.parse(JSON.stringify(gs));
  const hide = (s: any) => {
    s.handCount = s.hand?.length ?? 0;
    s.deckCount = s.deck?.length ?? 0;
    delete s.hand;
    delete s.deck;
  };
  hide(c.p1);
  hide(c.p2);
  return c;
}

function summarizeState(gs: GameState): string {
  const boss = (b:any)=>`${b.name} HP ${b.hp}/${b.maxHp}`;
  const adv = (side:any)=> side.adv.map((a:any)=>`${a.name}[HP${a.hp}/${a.maxHp},AP${a.ap}/${a.maxAp}]`).join(", ");
  return `Turn:${gs.turn}  P1 Boss:${boss(gs.p1.boss)}  P2 Boss:${boss(gs.p2.boss)}  P1 Adv:${adv(gs.p1)}  P2 Adv:${adv(gs.p2)}`;
}

export const startGameFn = onCall(async (req) => {
  const b1 = (dataset as any).cards.bosses[0]?.name;
  const b2 = (dataset as any).cards.bosses[1]?.name || b1;
  if (!b1 || !b2) throw new Error("boss_dataset_missing");

  const seed = String(Date.now());
  const gs = startGame(seed, b1, b2);

  const gid = "g_" + Math.random().toString(36).slice(2, 10);
  const uid = req.auth?.uid || null;

  const refI = db.doc(`games/${gid}/internal/state`);
  const refP = db.doc(`games/${gid}/public/state`);
  const refM = db.doc(`games/${gid}/meta/info`);
  const privRef = uid ? db.doc(`games/${gid}/private/${uid}`) : null;
  const chatCol = db.collection(`games/${gid}/chat`);

  await db.runTransaction(async (tx) => {
    tx.set(refI, gs);
    tx.set(refP, toPublic(gs));
    tx.set(refM, {
      p1_uid: uid,
      rulepack: "dualraid",
      ai_persona: "勝気だが礼儀正しい剣士。短文で話す。",
      createdAt: Date.now(),
    });
    if (privRef) {
      tx.set(privRef, { hand: gs.p1.hand, deckCount: gs.p1.deck.length });
    }
  });

  await chatCol.add({ role: "system", text: "対戦を開始したのだ！", at: Date.now() });
  await chatCol.add({ role: "opponent", text: "かかってきなさい。手加減はしないわ。", at: Date.now() });

  return { ok: true, gameId: gid };
});

export const chatRouterFn = onCall({ secrets: [OPENAI_API_KEY] }, async (req) => {
  const { gameId, text } = req.data as { gameId: string; text: string };
  if (!gameId || !text) throw new Error("bad_request");

  const uid = req.auth?.uid || "anon";
  const refI = db.doc(`games/${gameId}/internal/state`);
  const refP = db.doc(`games/${gameId}/public/state`);
  const refM = db.doc(`games/${gameId}/meta/info`);
  const chatCol = db.collection(`games/${gameId}/chat`);

  await chatCol.add({ role: "user", uid, text, at: Date.now() });

  try {
    // 盤面/手札/マニフェスト（語彙）を取得
    const [pubSnap, metaSnap] = await Promise.all([
      db.doc(`games/${gameId}/public/state`).get(),
      refM.get(),
    ]);
    if (!pubSnap.exists) throw new Error("game_not_found");
    const pub = pubSnap.data() as GameState;
    const meta = metaSnap.data() || {};
    const seat:"P1"|"P2" = "P1";
    let privHand: string[] = [];
    const p1_uid = (meta as any).p1_uid;
    if (p1_uid) {
      const privSnap = await db.doc(`games/${gameId}/private/${p1_uid}`).get();
      privHand = (privSnap.data() as any)?.hand || [];
    }
    const manifest = await DualRaidAdapter.manifestForPrompt(pub, { mySeat: seat, myHand: privHand });
    const stateSummary = summarizeState(pub);
    const rulebookExcerpt = RULEBOOK; // 短縮版でもOK

    // 司会AIに判定を依頼
    const result = await arbitrate({
      rulepack: "dualraid",
      persona: (meta as any).ai_persona || "勝気だが礼儀正しい剣士。短文。",
      stateSummary,
      manifest,
      rulebookExcerpt,
      userUtterance: text
    });

    let shouldAIMove = false;

    // 盤面操作があれば適用（TX: read→write の順序）
    if (result.kind === "game" || result.kind === "both") {
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(refI);
        if (!snap.exists) throw new Error("game_not_found");
        const metaSnap2 = await tx.get(refM);
        const p1_uid2 = metaSnap2.exists ? (metaSnap2.data() as any).p1_uid : null;

        let gs = snap.data() as GameState;
        gs.log = gs.log || [];
        gs.log.push({ t: "nlp", text, parsed: (result as any).actions || [], at: Date.now() });

        let after = gs;
        for (const a of ((result as any).actions || []) as Action[]) {
          after = applyIntent(after, "P1", a);
        }
        const active = (after as any).status ? (after as any).status === "active" : true;
        shouldAIMove = after.turn === "P2" && active;

        tx.set(refI, after);
        tx.set(refP, toPublic(after));
        if (p1_uid2) {
          tx.set(db.doc(`games/${gameId}/private/${p1_uid2}`), { hand: after.p1.hand, deckCount: after.p1.deck.length });
        }
      });

      if ((result as any).narration) {
        await chatCol.add({ role: "system", text: (result as any).narration, at: Date.now() });
      }
    }

    // 会話があれば対戦相手AIの返答を出す
    if (result.kind === "chat" || result.kind === "both") {
      const reply = (result as any).reply || await opponentReply((meta as any).ai_persona || "勝気だが礼儀正しい剣士。短文。", text);
      await chatCol.add({ role: "opponent", text: reply, at: Date.now() });
    }

    // 必要なら敵AIの自動手番（今は従来AIで代用）
    if (shouldAIMove) {
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(refI);
        if (!snap.exists) return;
        const gs = snap.data() as GameState;
        const after = aiTakeTurn(gs, "P2");
        tx.set(refI, after);
        tx.set(refP, toPublic(after));
      });
    }

    return { ok: true, routed: result.kind };
  } catch (e: any) {
    await chatCol.add({ role: "system", text: `（サーバエラー）${e?.message || e}`, at: Date.now() });
    return { ok: false, error: String(e?.message || e) };
  }
});
