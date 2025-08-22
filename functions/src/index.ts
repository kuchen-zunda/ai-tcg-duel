import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onCall } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";
import { REGION } from "./config.js";
import dataset from "./rulepacks/dualraid/dataset.js";
import { applyIntent, startGame } from "./rulepacks/dualraid/engine/reducer.js";
import { aiTakeTurn } from "./rulepacks/dualraid/engine/ai.js";
import type { GameState, Action } from "./rulepacks/dualraid/engine/types.js";
import { DualRaidAdapter } from "./rulepacks/dualraid/adapter.js";
import { routeUserText } from "./ai/router.js";
import { defineSecret } from "firebase-functions/params";

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
    const routed = await routeUserText({ gameId, seat: "P1", adapter: DualRaidAdapter }, text);

    if (routed.reply) {
      await chatCol.add({ role: "opponent", text: routed.reply, at: Date.now() });
    } else if (routed.kind === "unknown" && routed.ask) {
      await chatCol.add({ role: "system", text: routed.ask, at: Date.now() });
    }

    let shouldAIMove = false;
    if (routed.actions && (routed.kind === "game_action" || routed.kind === "both")) {
      const actions = routed.actions as Action[];

      await db.runTransaction(async (tx) => {
        // ← 先に必要な読み取りを全部やる（refI と refM）
        const snap = await tx.get(refI);
        if (!snap.exists) throw new Error("game_not_found");
        const metaSnap = await tx.get(refM);
        const p1_uid = metaSnap.exists ? (metaSnap.data() as any).p1_uid : null;

        let gs = snap.data() as GameState;
        gs.log = gs.log || [];
        gs.log.push({ t: "nlp", text, parsed: actions, explain: routed.explain || null, at: Date.now() });

        // アクション順適用
        let after = gs;
        for (const a of actions) after = applyIntent(after, "P1", a);
        const active = (after as any).status ? (after as any).status === "active" : true;
        shouldAIMove = after.turn === "P2" && active;

        // ここから書き込み（read 後）
        tx.set(refI, after);
        tx.set(refP, toPublic(after));
        if (p1_uid) {
          tx.set(db.doc(`games/${gameId}/private/${p1_uid}`), {
            hand: after.p1.hand,
            deckCount: after.p1.deck.length,
          });
        }
      });
    }

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

    return { ok: true, routed: routed.kind };
  } catch (e: any) {
    await chatCol.add({ role: "system", text: `（サーバエラー）${e?.message || e}`, at: Date.now() });
    return { ok: false, error: String(e?.message || e) };
  }
});
