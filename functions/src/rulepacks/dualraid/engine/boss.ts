import { GameState } from "./types.js";
import { dealDamageToAdventurer, dealDamageToBoss } from "./primitives.js";
import { nextInt } from "./rng.js";
import dataset from "../dataset.js";

export function resolveBossAction(gs: GameState, actor:"P1"|"P2"){
  const me = actor==="P1"? gs.p1 : gs.p2;
  const opp = actor==="P1"? gs.p2 : gs.p1;
  const bossCard: any = dataset.cards.bosses.find((b: any)=>b.name===me.boss.name);
  if (!bossCard) return null;

  const die = nextInt(gs.rng.seed, ++gs.rng.rollNo, 6);
  const row: any = bossCard.dice_table[String(die)];
  if (!row) return null;

  let targets: string[] = [];
  if (row.action==="single_attack"){
    const tgt = opp.adv.filter((a:any)=>a.hp>0).sort((a:any,b:any)=>a.hp-b.hp)[0];
    if (tgt) { dealDamageToAdventurer(tgt, row.value||0); targets=[tgt.name]; }
    else { dealDamageToBoss(opp, row.value||0); }
  } else if (row.action==="aoe_attack"){
    for (const a of opp.adv.filter((x:any)=>x.hp>0)) dealDamageToAdventurer(a, row.value||0);
    targets = opp.adv.filter((x:any)=>x.hp>0).map((x:any)=>x.name);
  } else if (row.action==="self_heal"){
    me.boss.hp = Math.min(me.boss.maxHp, me.boss.hp + (row.value||0));
  }
  return { die, action: row.action, value: row.value||0, targets };
}
