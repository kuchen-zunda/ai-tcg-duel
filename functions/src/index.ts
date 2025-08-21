import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onCall } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";
import { REGION } from "./config.js";
import dataset from "./data/min_tcg_set.js";
import { applyIntent, startGame } from "./engine/reducer.js";
import { aiTakeTurn } from "./engine/ai.js";
import type { GameState, Action } from "./engine/types.js";
import { parseLineToIntent } from "./ai/nlp.js";
import { routeUserText } from "./ai/router.js";
import { DualRaidAdapter } from "./engine/dualraid/adapter.js";
import { routeUserText2 } from "./ai/router2.js";

initializeApp();
const db = getFirestore();
db.settings({ ignoreUndefinedProperties: true });
setGlobalOptions({ region: REGION });

// hand/desk を隠しつつ、枚数は公開に投影
function sanitizePublic(gs: GameState){
  const clone = JSON.parse(JSON.stringify(gs));
  const strip = (side:any)=>{
    side.handCount = side.hand?.length ?? 0;
    side.deckCount = side.deck?.length ?? 0;
    delete side.hand; delete side.deck;
  };
  strip(clone.p1); strip(clone.p2);
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
    const active = (after as any).status ? (after as any).status === "active" : true;
    shouldAIMove = after.turn === "P2" && active;

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

// 自然文 → 意図(JSON) 変換
export const nlpIntentFn = onCall(async (req) => {
  const { gameId, text } = req.data as { gameId:string; text:string };
  if (!gameId || !text) throw new Error("bad_request");
  const res = await parseLineToIntent({ gameId, text });
  return res;
});

// ★ 自然文をそのまま受け取り、NLP→検証→適用まで一気に実行
export const chatCommandFn = onCall(async (req) => {
  const { gameId, text } = req.data as { gameId: string; text: string };
  if (!gameId || !text) throw new Error("bad_request");

  const refI = db.doc(`games/${gameId}/internal/state`);
  const refP = db.doc(`games/${gameId}/public/state`);
  const refM = db.doc(`games/${gameId}/meta/info`);

  // どの座席かはサーバが決める（クライアントからの actor は信用しない）
  const metaSnap = await refM.get();
  const meta = metaSnap.exists ? (metaSnap.data() as any) : {};
  const uid = req.auth?.uid || "anon";
  const actor: "P1" | "P2" = (uid && meta.p1_uid === uid) ? "P1" : "P1"; // 今はP1専用。将来P2も実装

  // 1) NLPで自然文→意図(JSON)
  const parsed = await parseLineToIntent({ gameId, text });
  if (!parsed.ok || !parsed.intent) {
    return { ok: false, ask: parsed.ask || "うまく解釈できなかったのだ…" };
  }

  // ここで intent を Action に確定させる
  const intent: Action = parsed.intent;

  let shouldAIMove = false;

  // 2) 取引の中で状態を読み、検証→適用→公開に投影
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(refI);
    if (!snap.exists) throw new Error("game_not_found");
    const gs = snap.data() as GameState;

    // ログ：NLPの解釈を残す（観戦やデバッグ用）
    gs.log = gs.log || [];
    gs.log.push({ t: "nlp", text, parsed: parsed.intent, explain: parsed.explain || null, at: Date.now() });

    const after = applyIntent(gs, actor, intent); // ← intent を渡す
    // status があるプロジェクトなら勝敗終了を考慮
    const active = (after as any).status ? (after as any).status === "active" : true;
    shouldAIMove = after.turn === "P2" && active;

    tx.set(refI, after);
    tx.set(refP, ((): any => {
      const c = JSON.parse(JSON.stringify(after));
      // hand/deck は隠すが、枚数は残す
      const strip = (s: any) => { s.handCount = s.hand?.length ?? 0; s.deckCount = s.deck?.length ?? 0; delete s.hand; delete s.deck; };
      strip(c.p1); strip(c.p2);
      return c;
    })());
    if (meta.p1_uid) {
      const side = after.p1;
      tx.set(db.doc(`games/${gameId}/private/${meta.p1_uid}`), { hand: side.hand, deckCount: side.deck.length });
    }
  });

  // 3) 必要ならAIのターンもサーバで続けて処理
  if (shouldAIMove) {
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(refI);
      if (!snap.exists) return;
      const gs = snap.data() as GameState;
      const after = aiTakeTurn(gs, "P2");
      // ここでもログを残す（aiTakeTurn 内で push 済みなら不要）
      tx.set(refI, after);
      const c = JSON.parse(JSON.stringify(after));
      const strip = (s: any) => { s.handCount = s.hand?.length ?? 0; s.deckCount = s.deck?.length ?? 0; delete s.hand; delete s.deck; };
      strip(c.p1); strip(c.p2);
      tx.set(refP, c);
      if (meta.p1_uid) {
        const side = after.p1;
        tx.set(db.doc(`games/${gameId}/private/${meta.p1_uid}`), { hand: side.hand, deckCount: side.deck.length });
      }
    });
  }

  return { ok: true, intent: parsed.intent, explain: parsed.explain || null };
});

export const chatRouterFn = onCall(async (req) => {
  const { gameId, text } = req.data as { gameId: string; text: string };
  if (!gameId || !text) throw new Error("bad_request");

  const uid = req.auth?.uid || "anon";
  const refI = db.doc(`games/${gameId}/internal/state`);
  const refP = db.doc(`games/${gameId}/public/state`);
  const refM = db.doc(`games/${gameId}/meta/info`);
  const chatCol = db.collection(`games/${gameId}/chat`);

  // ユーザ発話を保存
  await chatCol.add({ role:"user", uid, text, at: Date.now() });

  // 今は dualraid 固定（後で meta.rulepack で切替）
  const routed = await routeUserText2({ gameId, seat:"P1", adapter: DualRaidAdapter }, text);

  // 会話返信
  if (routed.reply) await chatCol.add({ role:"opponent", text: routed.reply, at: Date.now() });
  else if (routed.kind==="unknown" && routed.ask) await chatCol.add({ role:"system", text: routed.ask, at: Date.now() });

  // 盤面適用
  let shouldAIMove = false;
  if (routed.actions && (routed.kind==="game_action" || routed.kind==="both")) {
    const actions = routed.actions as Action[];

    await db.runTransaction(async (tx)=>{
      const snap = await tx.get(refI);
      if (!snap.exists) throw new Error("game_not_found");
      const gs = snap.data() as GameState;

      gs.log = gs.log || [];
      gs.log.push({ t:"nlp", text, parsed: actions, explain: routed.explain||null, at: Date.now() });

      const after = DualRaidAdapter.validateAndApply(gs, "P1", actions);
      const active = (after as any).status ? (after as any).status === "active" : true;
      shouldAIMove = after.turn === "P2" && active;

      // 保存（公開へ投影）
      const c:any = JSON.parse(JSON.stringify(after));
      const hide = (s:any)=>{ s.handCount=s.hand?.length??0; s.deckCount=s.deck?.length??0; delete s.hand; delete s.deck; };
      hide(c.p1); hide(c.p2);

      tx.set(refI, after);
      tx.set(refP, c);

      // P1 private（手札実体）
      const metaSnap = await tx.get(refM);
      const p1_uid = metaSnap.exists ? (metaSnap.data() as any).p1_uid : null;
      if (p1_uid) tx.set(db.doc(`games/${gameId}/private/${p1_uid}`), { hand: after.p1.hand, deckCount: after.p1.deck.length });
    });
  }

  // 必要ならAIの自動手番（これは従来どおり）
  if (shouldAIMove) {
    await db.runTransaction(async (tx)=>{
      const snap = await tx.get(refI);
      if (!snap.exists) return;
      const gs = snap.data() as GameState;
      const after = aiTakeTurn(gs, "P2");
      const c:any = JSON.parse(JSON.stringify(after));
      const hide = (s:any)=>{ s.handCount=s.hand?.length??0; s.deckCount=s.deck?.length??0; delete s.hand; delete s.deck; };
      hide(c.p1); hide(c.p2);
      tx.set(refI, after);
      tx.set(refP, c);
    });
  }

  return { ok:true, routed: routed.kind };
});