import * as functions from "firebase-functions/v2";
import { getFirestore } from "firebase-admin/firestore";
import { startGame, applyIntent } from "./rulepacks/dualraid/engine/reducer.js";
import { DualRaidAdapter } from "./rulepacks/dualraid/adapter.js";
import { routeNaturalLanguage, opponentPlan } from "./core/arbiter.js";
import { onCall } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";

initializeApp();                // ← これで Admin SDK 初期化
const db = getFirestore();      // ← Firestore 取得

function pubSide(s:any){
  return {
    boss:s.boss, adv:s.adv, discard:s.discard,
    fieldAdv:s.fieldAdv, fieldBoss:s.fieldBoss,
    handCount: (s.hand?.length||0), deckCount:(s.deck?.length||0),
  };
}

export const startGameFn = onCall({ secrets:["OPENAI_API_KEY"] }, async (req) => {
  const seed = String(Date.now());
  const aiPersona = req.data?.aiPersona || "皮肉屋で短文";
  const p2BossName = req.data?.p2BossName;

  const gs = startGame(seed, undefined, p2BossName);
  const gameId = (await db.collection("games").add({
    createdAt: Date.now(), aiPersona
  })).id;

  await db.doc(`games/${gameId}/private/state`).set(gs);
  await db.doc(`games/${gameId}/public/state`).set({
    ...gs, p1:pubSide(gs.p1), p2:pubSide(gs.p2)
  });
  await db.collection(`games/${gameId}/chat`).add({ role:"system", text:"対戦を開始したのだ！", at:Date.now() });

  return { gameId };
});

/* ユーザーの自然文を審判→アクション適用→必要なら相手手番へ */
export const chatRouterFn = onCall({ secrets:["OPENAI_API_KEY"] }, async (req) => {
  const { gameId, text } = req.data||{};
  const gameRef = db.doc(`games/${gameId}`);
  const privRef = gameRef.collection("private").doc("state");
  const pubRef  = gameRef.collection("public").doc("state");
  const chatCol = gameRef.collection("chat");

  await chatCol.add({ role:"user", text, at:Date.now() });

  await db.runTransaction(async tx=>{
    const snap = await tx.get(privRef);
    let gs:any = snap.data();
    if (!gs) throw new Error("state_not_found");

    // 司会AIで解釈
    const manifest = await DualRaidAdapter.manifestForPrompt(gs, { mySeat:"P1", myHand: gs.p1.hand||[] });
    const parsed:any = await routeNaturalLanguage({ text, manifest });

    // 会話だけなら記録して終了
    if ((!parsed.actions || parsed.actions.length===0) && parsed.chat){
      tx.set(chatCol.doc(), { role:"opponent", text: parsed.chat, at: Date.now() });
      return;
    }

    // アクション適用（P1）
    for (const a of (parsed.actions||[])) {
      gs = applyIntent(gs, "P1", a);
      if (gs.status!=="active") break;
    }

    tx.set(privRef, gs);
    tx.set(pubRef, { ...gs, p1:pubSide(gs.p1), p2:pubSide(gs.p2) });
  });

  // ここから相手の自動手番（最大8ステップ安全装置）
  await autoplayP2(gameId);
  return { ok:true };
});

async function autoplayP2(gameId:string){
  const gameRef = db.doc(`games/${gameId}`);
  const privRef = gameRef.collection("private").doc("state");
  const pubRef  = gameRef.collection("public").doc("state");
  const chatCol = gameRef.collection("chat");

  for (let step=0; step<8; step++){
    const snap = await privRef.get(); let gs:any = snap.data();
    if (!gs || gs.status!=="active" || gs.turn!=="P2") break;

    const manifest = await DualRaidAdapter.manifestForPrompt(gs, { mySeat:"P2", myHand: gs.p2.hand||[] });
    const plan:any = await opponentPlan({ gs, manifest });

    if (plan.chat) { await chatCol.add({ role:"opponent", text: plan.chat, at: Date.now() }); }

    const actions = (plan.actions && plan.actions.length>0) ? plan.actions : [{ type:"end_turn" }];
    for (const a of actions){
      gs = applyIntent(gs, "P2", a);
      if (gs.status!=="active" || gs.turn!=="P2") break;
    }

    await privRef.set(gs);
    await pubRef.set({ ...gs, p1:pubSide(gs.p1), p2:pubSide(gs.p2) });
  }
}
