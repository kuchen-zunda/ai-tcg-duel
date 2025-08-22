// functions/src/rulepacks/dualraid/engine/reducer.ts
import type { Action, GameState } from "./types.js";
import dataset from "../dataset.js";
import { softValidate, onTurnStart, findAction, validateDeck } from "./validate.js";

// 便利関数
function me(gs:GameState, actor:"P1"|"P2"){ return actor==="P1" ? gs.p1 : gs.p2; }
function enemy(gs:GameState, actor:"P1"|"P2"){ return actor==="P1" ? gs.p2 : gs.p1; }
function log(gs:GameState, entry:any){ gs.log = gs.log||[]; gs.log.push({ ...entry, at: Date.now() }); }

function dealDamageToBoss(side:any, dmg:number){
  side.boss.hp = Math.max(0, side.boss.hp - Math.max(0, dmg||0));
}
function dealDamageToAdventurer(unit:any, dmg:number){
  unit.hp = Math.max(0, unit.hp - Math.max(0, dmg||0));
}
function healAdventurer(unit:any, val:number){
  unit.hp = Math.min(unit.maxHp, unit.hp + Math.max(0,val||0));
}

export function startGame(seed:string, p1BossName?:string, p2BossName?:string): GameState {
  // デッキ生成（既存データの name[] を適当に20枚にする例。プロジェクト側の生成ロジックがあれば差し替えOK）
  const allNames = [
    ...(dataset as any).cards.supports.map((c:any)=>c.name),
    ...(dataset as any).cards.equipment.map((c:any)=>c.name),
    ...(dataset as any).cards.events.map((c:any)=>c.name || []).filter(Boolean),
    ...(dataset as any).cards.fields.map((c:any)=>c.name)
  ].filter(Boolean);

  function mkDeck():string[] {
    const pool = [...allNames];
    const deck:string[]=[];
    while(deck.length<20){ deck.push(pool[deck.length % pool.length]); }
    validateDeck(deck);
    return deck;
  }

  const p1 = {
    boss: { id:"b1", name: p1BossName || (dataset as any).cards.bosses[0].name, hp:(dataset as any).cards.bosses[0].hp, maxHp:(dataset as any).cards.bosses[0].hp },
    adv: (dataset as any).cards.adventurers.slice(0,4).map((a:any,i:number)=>({ id:"a1"+i, name:a.name, hp:a.hp, maxHp:a.hp, ap:0, maxAp:a.max_ap||6, statuses:[], equipment:[] })),
    hand: [] as string[],
    deck: mkDeck(),
    discard: [] as string[],
    fieldAdv: null as string|null,
    fieldBoss: null as string|null,
  };
  const p2 = {
    boss: { id:"b2", name: p2BossName || (dataset as any).cards.bosses[1]?.name || (dataset as any).cards.bosses[0].name, hp:(dataset as any).cards.bosses[1]?.hp || (dataset as any).cards.bosses[0].hp, maxHp:(dataset as any).cards.bosses[1]?.hp || (dataset as any).cards.bosses[0].hp },
    adv: (dataset as any).cards.adventurers.slice(0,4).map((a:any,i:number)=>({ id:"a2"+i, name:a.name, hp:a.hp, maxHp:a.hp, ap:0, maxAp:a.max_ap||6, statuses:[], equipment:[] })),
    hand: [] as string[],
    deck: mkDeck(),
    discard: [] as string[],
    fieldAdv: null as string|null,
    fieldBoss: null as string|null,
  };

  // 初期手札3枚
  p1.hand = p1.deck.splice(0,3);
  p2.hand = p2.deck.splice(0,3);

  const gs:GameState = {
    seed,
    rng: { seed, rollNo: 0 },        // ← 追加
    status:"active",
    turn:"P1",
    p1, p2,
    log:[],
    flags:{}
  };
  onTurnStart(gs, "P1"); // P1開始時にAP+1など
  return gs;
}

export function applyIntent(gs:GameState, actor:"P1"|"P2", a:Action): GameState {
  if (gs.status!=="active") return gs;

  const reason = softValidate(gs, actor, a);
  if (reason) { log(gs,{t:"invalid", actor, reason}); return gs; }

  const mine:any = me(gs, actor);
  const foe:any = enemy(gs, actor);

  if (a.type==="end_turn"){
    // 相手ターンへ
    const next = actor==="P1" ? "P2" : "P1";
    gs.turn = next;
    onTurnStart(gs, next);
    log(gs,{ t:"end", actor });
    return gs;
  }

  if (a.type==="use_action"){
    const unit = mine.adv.find((u:any)=>u.name===a.unit)!;
    const def:any = findAction(a.unit, a.action)!;
    unit.ap = Math.max(0, (unit.ap||0) - (def.cost_ap||0));
    unit.statuses = [...new Set([...(unit.statuses||[]), "acted"])];

    if (def.type==="attack" || def.type==="attack_boss_only"){
      dealDamageToBoss(foe, def.damage||0);
      log(gs,{ t:"action", actor, unit:a.unit, name:a.action, dmg:def.damage||0, target:"boss" });
    } else if (def.type==="aoe_attack"){
      for(const e of foe.adv.filter((x:any)=>x.hp>0)) dealDamageToAdventurer(e, def.damage||0);
      log(gs,{ t:"action", actor, unit:a.unit, name:a.action, aoe:def.damage||0 });
    } else if (def.type==="heal"){
      const tgt = mine.adv.find((x:any)=>x.name===a.target) || mine.adv.find((x:any)=>x.hp>0);
      if (tgt) healAdventurer(tgt, def.heal||0);
      log(gs,{ t:"action", actor, unit:a.unit, name:a.action, heal:def.heal||0, target:tgt?.name });
    } else if (def.type==="defend"){
      unit.statuses = [...new Set([...(unit.statuses||[]), `defend:${def.reduce||0}`])];
      log(gs,{ t:"action", actor, unit:a.unit, name:a.action, defend:def.reduce||0 });
    } else {
      log(gs,{ t:"action", actor, unit:a.unit, name:a.action });
    }
    return gs;
  }

  if (a.type==="play_support"){
    const idx = mine.hand.indexOf(a.card); if (idx>=0) mine.hand.splice(idx,1);
    gs.flags = gs.flags || {}; gs.flags[actor] = gs.flags[actor] || {}; gs.flags[actor].supportUsed = true;
    log(gs,{ t:"support", actor, card:a.card, mode:a.mode, target:a.target });
    return gs;
  }

  if (a.type==="play_field"){
    const idx = mine.hand.indexOf(a.card); if (idx>=0) mine.hand.splice(idx,1);
    if (a.side==="adventurer") mine.fieldAdv = a.card; else mine.fieldBoss = a.card;
    log(gs,{ t:"field", actor, card:a.card, side:a.side });
    return gs;
  }

  if (a.type==="equip"){
    const idx = mine.hand.indexOf(a.card); if (idx>=0) mine.hand.splice(idx,1);
    const unit = mine.adv.find((u:any)=>u.name===a.unit)!;
    unit.equipment = [...(unit.equipment||[]), a.card];  // 同一冒険者に複数可
    log(gs,{ t:"equip", actor, card:a.card, unit:a.unit });
    return gs;
  }

  return gs;
}
