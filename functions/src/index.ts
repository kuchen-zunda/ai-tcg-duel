// functions/src/index.ts
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onCall } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";
import { REGION } from "./config.js";

import { arbitrate } from "./core/arbiter.js";
import { planOpponentTurn } from "./ai/ai_llm.js";

import dataset from "./rulepacks/dualraid/dataset.js";
import { DualRaidAdapter } from "./rulepacks/dualraid/adapter.js";
import { RULEBOOK } from "./rulepacks/dualraid/rulebook.js";
import type { GameState, Action } from "./rulepacks/dualraid/engine/types.js";
import { startGame, applyIntent } from "./rulepacks/dualraid/engine/reducer.js";

initializeApp();
const db = getFirestore();
db.settings({ ignoreUndefinedProperties: true });
setGlobalOptions({ region: REGION });

function toPublic(gs:GameState){
  const c:any = JSON.parse(JSON.stringify(gs));
  c.p1.deckCount = c.p1.deck?.length ?? 0; delete c.p1.deck;
  c.p2.handCount = c.p2.hand?.length ?? 0; c.p2.deckCount = c.p2.deck?.length ?? 0;
  delete c.p2.hand; delete c.p2.deck;
  return c;
}
function summarize(gs:GameState){
  const boss=(b:any)=>`${b.name} HP ${b.hp}/${b.maxHp}`;
  const adv=(s:any)=>s.adv.map((a:any)=>`${a.name}[HP${a.hp}/${a.maxHp},AP${a.ap}/${a.maxAp}${(a.statuses||[]).includes("acted")?" acted":""}]`).join(", ");
  return `Turn:${gs.turn} | P1 Boss:${boss(gs.p1.boss)} | P2 Boss:${boss(gs.p2.boss)} | P1: ${adv(gs.p1)} | P2: ${adv(gs.p2)} | P1 Hand: ${(gs as any).p1.hand?.join(", ")||""}`;
}

export const startGameFn = onCall(async (req)=>{
  const { p1BossName, p2BossName, aiPersona="皮肉屋で冷徹。短文。" } = (req.data||{}) as any;

  const gs = startGame(String(Date.now()), p1BossName, p2BossName);
  const gid = "g_" + Math.random().toString(36).slice(2,10);

  const refI = db.doc(`games/${gid}/internal/state`);
  const refP = db.doc(`games/${gid}/public/state`);
  const refM = db.doc(`games/${gid}/meta/info`);
  const chatCol = db.collection(`games/${gid}/chat`);

  await db.runTransaction(async(tx)=>{
    tx.set(refI, gs);
    tx.set(refP, toPublic(gs));
    tx.set(refM, { rulepack:"dualraid", ai_persona: aiPersona, createdAt: Date.now() });
  });

  await chatCol.add({ role:"system", text:"対戦を開始したのだ！", at:Date.now() });
  await chatCol.add({ role:"opponent", text:"……負ける気はしないがね。", at:Date.now() });

  return { ok:true, gameId: gid };
});

export const chatRouterFn = onCall( async (req)=>{
  const { gameId, text } = req.data as { gameId:string; text:string };
  if (!gameId || !text) throw new Error("bad_request");

  const refI = db.doc(`games/${gameId}/internal/state`);
  const refP = db.doc(`games/${gameId}/public/state`);
  const refM = db.doc(`games/${gameId}/meta/info`);
  const chatCol = db.collection(`games/${gameId}/chat`);

  await chatCol.add({ role:"user", text, at:Date.now() });

  try{
    const [pubSnap, metaSnap] = await Promise.all([ refP.get(), refM.get() ]);
    if (!pubSnap.exists) throw new Error("game_not_found");
    const pub = pubSnap.data() as GameState;
    const meta:any = metaSnap.data() || {};
    const persona = meta.ai_persona || "皮肉屋で冷徹。短文。";

    const manifest = await DualRaidAdapter.manifestForPrompt(pub, { mySeat:"P1", myHand:(pub as any).p1?.hand||[] });
    const summary = summarize(pub);

    // 1) 司会AIで自然文を判定→アクションJSON or 会話
    const judged = await arbitrate({
      rulepack:"dualraid",
      persona,
      manifest,
      rulebookExcerpt: RULEBOOK,
      stateSummary: summary,
      userUtterance: text
    });

    let needOpponent = false;

    if (judged.kind==="game" || judged.kind==="both"){
      await db.runTransaction(async(tx)=>{
        const snap = await tx.get(refI);
        if (!snap.exists) throw new Error("game_not_found");
        let gs = snap.data() as GameState;

        for(const a of (judged as any).actions as Action[]){
          gs = applyIntent(gs, "P1", a);
        }
        // P2手番になったらAI起動
        needOpponent = gs.turn === "P2" && gs.status === "active";
        tx.set(refI, gs);
        tx.set(refP, toPublic(gs));
      });

      if ((judged as any).narration) {
        await chatCol.add({ role:"system", text:(judged as any).narration, at:Date.now() });
      }
    }
    if (judged.kind==="chat" || judged.kind==="both"){
      // 会話だけの場合：ペルソナに沿った短文返答
      const talk = (judged as any).reply || "ふん、続けよう。";
      await chatCol.add({ role:"opponent", text: talk, at:Date.now() });
    }

    // 2) 相手AIの手番（LLM計画）
    if (needOpponent){
      await db.runTransaction(async(tx)=>{
        const snap = await tx.get(refI);
        if (!snap.exists) return;
        let gs = snap.data() as GameState;

        const manifest2 = await DualRaidAdapter.manifestForPrompt(gs, { mySeat:"P2", myHand:[] });
        const summary2 = summarize(gs);
        const plan = await planOpponentTurn({ persona, manifest:manifest2, rulebook: RULEBOOK, stateSummary: summary2 });

        for(const a of plan) gs = applyIntent(gs, "P2", a);
        tx.set(refI, gs);
        tx.set(refP, toPublic(gs));
      });
    }

    return { ok:true };
  }catch(e:any){
    await chatCol.add({ role:"system", text:`（サーバエラー）${e?.message||e}`, at:Date.now() });
    return { ok:false, error:String(e?.message||e) };
  }
});
