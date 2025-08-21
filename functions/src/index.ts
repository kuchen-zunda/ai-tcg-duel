import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onCall } from "firebase-functions/v2/https";
import { parseLineToIntent } from "./ai/nlp.js";
import { setGlobalOptions } from "firebase-functions/v2/options";
import { REGION } from "./config.js";
import dataset from "./data/min_tcg_set.js";
import { applyIntent, startGame } from "./engine/reducer.js";
import { aiTakeTurn } from "./engine/ai.js";
import type { GameState, Action } from "./engine/types.js";


initializeApp();
const db = getFirestore();
// 念のための保険（undefined を無視）
db.settings({ ignoreUndefinedProperties: true });
setGlobalOptions({ region: REGION });

function sanitizePublic(gs: GameState){
  const clone = JSON.parse(JSON.stringify(gs));
  delete (clone as any).p1.hand; delete (clone as any).p2.hand;
  delete (clone as any).p1.deck; delete (clone as any).p2.deck;
  return clone;
}
function projectForPlayer(gs: GameState, who:"P1"|"P2"){
  const side = who==="P1"? gs.p1 : gs.p2;
  return { hand: side.hand, deckCount: side.deck.length };
}

export const startGameFn = onCall(async (req) => {
  const uid = req.auth?.uid || "anon";

  const boss1 = dataset.cards.bosses[0].name;
  const boss2 = dataset.cards.bosses[1].name;
  const seed = Math.random().toString(36).slice(2);
  const gs = startGame(seed, boss1, boss2);
  const gid = gs.id;

  const refI = db.doc(`games/${gid}/internal/state`);
  const refP = db.doc(`games/${gid}/public/state`);
  const refM = db.doc(`games/${gid}/meta/info`);
  const p1Doc = db.doc(`games/${gid}/private/${uid}`);

  await db.runTransaction(async (tx)=>{
    tx.set(refI, gs);
    tx.set(refP, sanitizePublic(gs));
    tx.set(refM, { p1_uid: uid, createdAt: Date.now() });
    tx.set(p1Doc, projectForPlayer(gs, "P1"));
  });

  return { ok:true, gameId: gid, seat: "P1" };
});

export const nlpIntentFn = onCall(async (req) => {
  const { gameId, text } = req.data as { gameId:string; text:string };
  const res = await parseLineToIntent({ gameId, text });
  return res; // { ok, intent, ask, explain }
});

export const applyIntentFn = onCall(async (req) => {
  const { gameId, actor, intent } = req.data as { gameId:string, actor:"P1"|"P2", intent: Action };

  const refI = db.doc(`games/${gameId}/internal/state`);
  const refP = db.doc(`games/${gameId}/public/state`);
  const refM = db.doc(`games/${gameId}/meta/info`);

  const metaSnap = await refM.get();
  const p1_uid = metaSnap.exists ? (metaSnap.data() as any).p1_uid : null;

  let shouldAIMove = false;

  await db.runTransaction(async (tx)=>{
    const snap = await tx.get(refI);
    if (!snap.exists) throw new Error("game_not_found");
    const gs = snap.data() as GameState;

    const after = applyIntent(gs, actor, intent);
    shouldAIMove = after.turn === "P2" && after.status === "active";

    tx.set(refI, after);
    tx.set(refP, sanitizePublic(after));
    if (p1_uid) tx.set(db.doc(`games/${gameId}/private/${p1_uid}`), projectForPlayer(after, "P1"));
  });

  if (shouldAIMove) {
    await db.runTransaction(async (tx)=>{
      const snap = await tx.get(refI);
      if (!snap.exists) return;
      const gs = snap.data() as GameState;
      const after = aiTakeTurn(gs, "P2");
      tx.set(refI, after);
      tx.set(refP, sanitizePublic(after));
      if (p1_uid) tx.set(db.doc(`games/${gameId}/private/${p1_uid}`), projectForPlayer(after, "P1"));
    });
  }
  return { ok:true };
});
