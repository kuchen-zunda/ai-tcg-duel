import dataset from "../dataset.js";
import { Action, GameState } from "./types.js";
import { dealDamageToAdventurer, dealDamageToBoss, healAdventurer } from "./primitives.js";
import { softValidate } from "./validate.js";
import { resolveBossAction } from "./boss.js";

function meOf(gs:GameState,a:"P1"|"P2"){return a==="P1"?gs.p1:gs.p2;}
function opOf(gs:GameState,a:"P1"|"P2"){return a==="P1"?gs.p2:gs.p1;}
function other(a:"P1"|"P2"){return a==="P1"?"P2":"P1";}
function shuffle<T>(arr:T[]){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]] } return arr; }

export function draw(gs:GameState, a:"P1"|"P2", n:number){
  const s = meOf(gs,a);
  for(let i=0;i<n;i++){ const c = s.deck.shift(); if(c) s.hand.push(c); }
}

function startOfTurn(gs:GameState, a:"P1"|"P2"){
  for (const u of meOf(gs,a).adv) u.ap = Math.min(u.maxAp, u.ap + 1);
  draw(gs, a, 1);
  meOf(gs,a).flags.supportUsedThisTurn = false;
}

export function applyIntent(gs: GameState, actor:"P1"|"P2", act: Action): GameState{
  if (gs.status!=="active") return gs;
  softValidate(gs, actor, act);

  const me = meOf(gs, actor);
  const enemy = opOf(gs, actor);

  switch (act.type) {
    case "use_action": {
      const unit = me.adv.find((u:any)=>u.name===act.unit);
      if (!unit || unit.hp<=0) throw new Error("unit_not_available");
      const card:any = (dataset as any).cards.adventurers.find((a:any)=>a.name===unit.name);
      const a = (card?.actions||[]).find((x:any)=>x.name===act.action);
      if (!a) throw new Error("action_not_found");
      if ((unit.ap||0) < (a.cost_ap||0)) throw new Error("ap_insufficient");
      unit.ap -= (a.cost_ap||0);

      if (a.type==="attack"){ dealDamageToBoss(enemy, a.damage||0); }
      else if (a.type==="attack_boss_only"){ dealDamageToBoss(enemy, a.damage||0); }
      else if (a.type==="aoe_attack"){ for(const e of enemy.adv.filter((x:any)=>x.hp>0)) dealDamageToAdventurer(e, a.damage||0); }
      else if (a.type==="heal"){
        if (a.target==="ally_all"){ for(const f of me.adv) healAdventurer(f, a.heal||0); }
        else {
          const tgt = me.adv.find((x:any)=>x.name===act.target) || me.adv[0];
          if (tgt) healAdventurer(tgt, a.heal||0);
        }
      }

      gs.log.push({ t:"action", actor, unit:unit.name, name:a.name, at:Date.now() });
      break;
    }

    case "play_support": {
      if (me.flags.supportUsedThisTurn) throw new Error("support_already_used");
      const sup:any = (dataset as any).cards.supports.find((s:any)=>s.name===act.card);
      if (!sup) throw new Error("support_not_found");
      const idx = me.hand.indexOf(act.card); if (idx<0) throw new Error("card_not_in_hand");
      me.hand.splice(idx,1); me.discard.push(act.card);
      me.flags.supportUsedThisTurn = true;

      if (act.mode==="adventurer" && sup.adventurer_effect){
        const ef = sup.adventurer_effect;
        if (ef.type==="heal"){
          if (ef.target==="ally_all"){ for(const f of me.adv) healAdventurer(f, ef.heal||0); }
          else {
            const tgt = me.adv.find((x:any)=>x.name===act.target) || me.adv[0];
            if (tgt) healAdventurer(tgt, ef.heal||0);
          }
        } else if (ef.type==="buff_next_attack"){
          const tgt = me.adv.find((x:any)=>x.name===act.target) || me.adv[0];
          if (tgt) tgt.statuses = [...new Set([...(tgt.statuses||[]), `buff:${ef.multiplier||2}`])];
        } else if (ef.type==="draw_cards"){
          let k = 0;
          if (ef.count_by==="fallen_allies"){ k = me.adv.filter((x:any)=>x.hp<=0).length; }
          k = Math.min(k, ef.max||2);
          draw(gs, actor, k);
        }
      } else if (act.mode==="boss" && sup.boss_effect){
        const ef = sup.boss_effect;
        if (ef.type==="dice_modifier_next"){
          me.boss.stash = me.boss.stash || {};
          me.boss.stash.nextDiceMod = (me.boss.stash.nextDiceMod||0) + (ef.value||0);
        } else if (ef.type==="shield_next_hit"){
          me.boss.stash = me.boss.stash || {};
          me.boss.stash.nextTurnDamageUp = (me.boss.stash.nextTurnDamageUp||0) + (ef.reduce||0);
        } else if (ef.type==="opponent_put_hand_to_deck"){
          const n = Math.min(ef.count||1, enemy.hand.length);
          for (let i=0;i<n;i++){ const c = enemy.hand.shift(); if (c) enemy.deck.push(c); }
        }
      }

      gs.log.push({ t:"support", actor, card:act.card, mode:act.mode, target:act.target||null, at:Date.now() });
      break;
    }

    case "play_field": {
      const idx = me.hand.indexOf(act.card); if (idx<0) throw new Error("card_not_in_hand");
      me.hand.splice(idx,1); me.discard.push(act.card);
      if (act.side==="boss") me.fieldBoss = act.card; else me.fieldAdv = act.card;
      gs.log.push({ t:"field", actor, card:act.card, side:act.side, at:Date.now() });
      break;
    }

    case "equip": {
      const idx = me.hand.indexOf(act.card); if (idx<0) throw new Error("card_not_in_hand");
      const unit = me.adv.find((u:any)=>u.name===act.unit); if (!unit) throw new Error("unit_not_found");
      me.hand.splice(idx,1); unit.equipment.push(act.card);
      gs.log.push({ t:"equip", actor, card:act.card, unit:act.unit, at:Date.now() });
      break;
    }

    case "play_event": {
      const idx = me.hand.indexOf(act.card); if (idx<0) throw new Error("card_not_in_hand");
      me.hand.splice(idx,1); me.discard.push(act.card);
      gs.log.push({ t:"event", actor, card:act.card, at:Date.now() });
      break;
    }

    case "end_turn": {
      if (gs.phase!=="draw") return gs;

      if (gs.turn === gs.roundStarter) {
        gs.turn = other(gs.turn);
        startOfTurn(gs, gs.turn);
      } else {
        gs.phase = "boss";
        const order:("P1"|"P2")[] = [gs.roundStarter, other(gs.roundStarter)];
        for (const side of order) {
          const meSide = meOf(gs, side);
          const res = resolveBossAction(gs, side);
          if (res) {
            gs.log.push({ t:"boss_roll", actor:side, boss: meSide.boss.name, die:res.die, action:res.action, val:res.value, targets:res.targets, at:Date.now() });
          }
        }
        gs.roundStarter = other(gs.roundStarter);
        gs.turn = gs.roundStarter;
        gs.phase = "draw";
        startOfTurn(gs, gs.turn);
      }
      break;
    }
  }
  return gs;
}

export function startGame(seed:string, boss1:string, boss2:string): GameState{
  const pick:any[] = (dataset as any).cards.adventurers.slice(0,4);
  function side(bossName:string){
    const bc:any = (dataset as any).cards.bosses.find((b:any)=>b.name===bossName)!;
    const adv = pick.map((a:any)=>({ id:a.id, name:a.name, hp:a.hp, maxHp:a.hp, atk:a.atk, ap:0, maxAp:a.max_ap, statuses:[], equipment:[] }));
    const deck:string[] = [];
    for (const s of (dataset as any).cards.supports) deck.push(s.name);
    for (const e of (dataset as any).cards.equipment) deck.push(e.name);
    for (const v of (dataset as any).cards.events) deck.push(v.name);
    for (const f of (dataset as any).cards.fields) deck.push(f.name);
    shuffle(deck);
    return { boss:{id:bc.id, name:bc.name, hp:bc.hp, maxHp:bc.hp}, adv, hand:[], deck, discard:[], fieldBoss:null, fieldAdv:null, flags:{supportUsedThisTurn:false} };
  }
  const gs:GameState = {
    id: "g_"+Math.random().toString(36).slice(2,10),
    turn:"P1", phase:"draw",
    status: "active",
    p1: side(boss1), p2: side(boss2),
    rng:{ seed, rollNo:0 }, log:[],
    roundStarter: "P1",
  };
  for (const s of [gs.p1, gs.p2]) { for (let i=0;i<3;i++){ const c=s.deck.shift(); if(c) s.hand.push(c); } }
  startOfTurn(gs, "P1");
  return gs;
}
