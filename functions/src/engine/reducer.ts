import dataset from "../data/min_tcg_set.js";
import { Action, GameState } from "./types.js";
import { dealDamageToAdventurer, dealDamageToBoss, healAdventurer } from "./primitives.js";
import { softValidate } from "./validate.js";
import { resolveBossAction } from "./boss.js";

function meOf(gs:GameState,a:"P1"|"P2"){return a==="P1"?gs.p1:gs.p2;}
function opOf(gs:GameState,a:"P1"|"P2"){return a==="P1"?gs.p2:gs.p1;}
function shuffle<T>(arr:T[]){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]] } return arr; }

export function draw(gs:GameState, a:"P1"|"P2", n:number){
  const s = meOf(gs,a);
  for(let i=0;i<n;i++){ const c = s.deck.shift(); if(c) s.hand.push(c); }
}

function checkWin(gs: GameState, actor: "P1"|"P2"){
  const me = meOf(gs, actor), opp = opOf(gs, actor);
  const meDead  = me.boss.hp <= 0;
  const oppDead = opp.boss.hp <= 0;
  if (meDead && oppDead) gs.status = "draw";
  else if (oppDead)      gs.status = (actor === "P1") ? "p1_win" : "p2_win";
  else if (meDead)       gs.status = (actor === "P1") ? "p2_win" : "p1_win";
}

export function applyIntent(gs: GameState, actor:"P1"|"P2", act: Action): GameState{
  if (gs.status && gs.status !== "active") throw new Error("game_over"); // ← 追加
  const v = softValidate(gs, actor, act); if(!v.ok) throw new Error(v.reason);
  const me = meOf(gs,actor), enemy = opOf(gs,actor);

  switch(act.type){
    case "use_action": {
      const unit = me.adv.find((u:any)=>u.name===act.unit)!;
      const card:any = dataset.cards.adventurers.find((x:any)=>x.name===unit.name)!;
      const a:any = card.actions.find((x:any)=>x.name===act.action);
      if (!a) throw new Error("action_not_found");
      if ((a.cost_ap||0) > unit.ap) throw new Error("ap_not_enough");
      unit.ap -= (a.cost_ap||0);
      if (a.type==="attack"){ dealDamageToBoss(enemy, a.damage||0); }
      else if (a.type==="attack_boss_only"){ dealDamageToBoss(enemy, a.damage||0); }
      else if (a.type==="aoe_attack"){ for(const e of enemy.adv.filter((x:any)=>x.hp>0)) dealDamageToAdventurer(e, a.damage||0); }
      else if (a.type==="heal"){ const tgt = me.adv.find((x:any)=>x.name===act.target) || me.adv[0]; if (tgt) healAdventurer(tgt, a.heal||0); }
      checkWin(gs, actor);
      break;
    }
    case "play_support": {
      const idx = me.hand.indexOf(act.card); if (idx>=0) me.hand.splice(idx,1);
      me.flags.supportUsedThisTurn = true;
      if (act.card==="絆の記録"){
        const fallen = me.adv.filter((x:any)=>x.hp<=0).length;
        const drawN = Math.min(fallen, 2);
        for (let i=0;i<drawN;i++){ const c = me.deck.shift(); if(c) me.hand.push(c); }
      }
      break;
    }
    case "play_field": {
      if (act.side==="boss") me.fieldBoss = act.card; else me.fieldAdv = act.card;
      const idx = me.hand.indexOf(act.card); if (idx>=0) me.hand.splice(idx,1);
      break;
    }
    case "equip": { break; }
    case "end_turn": {
      for (const u of me.adv) u.ap = Math.min(u.maxAp, u.ap + 1);
      resolveBossAction(gs, actor);
      checkWin(gs, actor);
      if (gs.status === "active") {                      // ← 終了時はターンを回さない
        gs.turn = actor==="P1" ? "P2" : "P1";
        const nxt = meOf(gs, gs.turn);
        nxt.flags.supportUsedThisTurn = false;
      }
      break;
    }
  }
  return gs;
}

export function startGame(seed:string, boss1:string, boss2:string): GameState{
  const pick:any[] = dataset.cards.adventurers.slice(0,4);
  function side(bossName:string){
    const bc:any = dataset.cards.bosses.find((b:any)=>b.name===bossName)!;
    const adv = pick.map((a:any)=>({ id:a.id, name:a.name, hp:a.hp, maxHp:a.hp, atk:a.atk, ap:0, maxAp:a.max_ap, statuses:[], equipment:[] }));
    const deck:string[] = [
      ...dataset.cards.supports.map((s:any)=>s.name),
      ...dataset.cards.equipment.map((e:any)=>e.name),
      ...dataset.cards.events.map((v:any)=>v.name),
      ...dataset.cards.fields.map((f:any)=>f.name),
    ];
    shuffle(deck);
    return { boss:{id:bc.id, name:bc.name, hp:bc.hp, maxHp:bc.hp}, adv, hand:[], deck, discard:[], fieldBoss: null, fieldAdv: null, flags:{supportUsedThisTurn:false} };
  }
  const gs:GameState = {
    id: "g_"+Math.random().toString(36).slice(2,10),
    turn:"P1", phase:"draw",
    status:"active",
    p1: side(boss1), p2: side(boss2),
    rng:{ seed, rollNo:0 }, log:[]
  };
  for (const s of [gs.p1, gs.p2]) { for (let i=0;i<3;i++){ const c=s.deck.shift(); if(c) s.hand.push(c); } }
  return gs;
}
