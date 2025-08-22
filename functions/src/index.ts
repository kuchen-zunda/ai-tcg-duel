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
  // P1は手札を公開（ソロ想定）
  c.p1.deckCount = c.p1.deck?.length ?? 0;
  delete c.p1.deck;
  // P2は手札/山札を隠す
  c.p2.handCount = c.p2.hand?.length ?? 0;
  c.p2.deckCount = c.p2.deck?.length ?? 0;
  delete c.p2.hand;
  delete c.p2.deck;
  return c;
}

function summarizeState(gs: GameState): string {
  const boss = (b:any)=>`${b.name} HP ${b.hp}/${b.maxHp}`;
  const adv = (side:any)=> side.adv.map((a:any)=>`${a.name}[HP${a.hp}/${a.maxHp},AP${a.ap}/${a.maxAp}]`).join(", ");
  return `Turn:${gs.turn}  P1 Boss:${boss(gs.p1.boss)}  P2 Boss:${boss(gs.p2.boss)}  P1 Adv:${adv(gs.p1)}  P2 Adv:${adv(gs.p2)}`;
}

export const startGameFn = onCall(async (req) => {
  const {
    rulepack = "dualraid",
    p1BossName,
    p2BossName,
    userPersona = "元気で礼儀正しい冒険者。短文中心。",
    aiPersona = "勝気だが礼儀正しい剣士。短文で話す。",
  } = (req.data || {}) as any;

  if (rulepack !== "dualraid") throw new Error("rulepack_not_supported");

  // ボス名が未指定ならデータセットの先頭2体を使用
  const b1 = p1BossName || (dataset as any).cards.bosses[0]?.name;
  const b2 = p2BossName || (dataset as any).cards.bosses[1]?.name || b1;
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
      user_persona: userPersona,
      ai_persona: aiPersona,
      p1_boss: b1,
      p2_boss: b2,
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

  const refI = db.doc(`games/${gameId}/internal/state`);
  const refP = db.doc(`games/${gameId}/public/state`);
  const refM = db.doc(`games/${gameId}/meta/info`);
  const chatCol = db.collection(`games/${gameId}/chat`);

  await chatCol.add({ role: "user", text, at: Date.now() });

  try {
    const [pubSnap, metaSnap] = await Promise.all([
      db.doc(`games/${gameId}/public/state`).get(),
      refM.get(),
    ]);
    if (!pubSnap.exists) throw new Error("game_not_found");
    const pub = pubSnap.data() as GameState;
    const meta = metaSnap.data() || {};
    const manifest = await DualRaidAdapter.manifestForPrompt(pub, { mySeat: "P1", myHand: (pub as any).p1?.hand || [] });
    const stateSummary = summarizeState(pub);

    const result = await arbitrate({
      rulepack: "dualraid",
      persona: (meta as any).ai_persona || "勝気だが礼儀正しい剣士。短文。",
      stateSummary,
      manifest,
      rulebookExcerpt: RULEBOOK,
      userUtterance: text
    });

    let shouldAIMove = false;

    if (result.kind === "game" || result.kind === "both") {
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(refI);
        if (!snap.exists) throw new Error("game_not_found");

        let gs = snap.data() as GameState;
        gs.log = gs.log || [];
        gs.log.push({ t: "nlp", text, parsed: (result as any).actions || [], at: Date.now() });

        let after = gs;
        for (const a of ((result as any).actions || []) as Action[]) {
          after = applyIntent(after, "P1", a);
        }
        const active = (after as any).status ? (after as any).status === "active" : true;
        // 手番がP2になったらAIを動かす（フェーズは問わない）
        shouldAIMove = after.turn === "P2" && active;

        tx.set(refI, after);
        tx.set(refP, toPublic(after));
      });

      if ((result as any).narration) {
        await chatCol.add({ role: "system", text: (result as any).narration, at: Date.now() });
      }
    }

    if (result.kind === "chat" || result.kind === "both") {
      const reply = (result as any).reply || await opponentReply((meta as any).ai_persona || "勝気だが礼儀正しい剣士。短文。", text);
      await chatCol.add({ role: "opponent", text: reply, at: Date.now() });
    }

    if (shouldAIMove) {
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(refI);
        if (!snap.exists) return;
        const gs = snap.data() as GameState;
        const after = aiTakeTurn(gs, "P2"); // ← 相手AIが1手番実行
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
