// functions/src/rulepacks/dualraid/engine/validate.ts
import type { Action, GameState } from "./types.js";
import dataset from "../dataset.js";

function getSide(gs:GameState, actor:"P1"|"P2"){ return actor==="P1" ? gs.p1 : gs.p2; }
function getEnemy(gs:GameState, actor:"P1"|"P2"){ return actor==="P1" ? gs.p2 : gs.p1; }

export function findAction(unitName:string, actionName:string){
  const card:any = (dataset as any).cards.adventurers.find((a:any)=>a.name===unitName);
  return card?.actions?.find((x:any)=>x.name===actionName);
}

export function softValidate(gs:GameState, actor:"P1"|"P2", a:Action): string | null {
  const me:any = getSide(gs, actor);

  if (a.type==="end_turn") return null;

  if (a.type==="use_action"){
    const unit = me.adv.find((u:any)=>u.name===a.unit && u.hp>0);
    if (!unit) return "unit_not_available";
    if ((unit.statuses||[]).includes("acted")) return "unit_already_acted";
    const def = findAction(a.unit, a.action);
    if (!def) return "action_not_found";
    if ((unit.ap||0) < (def.cost_ap||0)) return "ap_not_enough";
    return null;
  }

  if (a.type==="play_support"){
    if (!(me.hand||[]).includes(a.card)) return "card_not_in_hand";
    if (gs.flags?.[actor]?.supportUsed) return "support_already_used";
    return null;
  }

  if (a.type==="play_field"){
    if (!(me.hand||[]).includes(a.card)) return "card_not_in_hand";
    return null;
  }

  if (a.type==="equip"){
    if (!(me.hand||[]).includes(a.card)) return "card_not_in_hand";
    const unit = me.adv.find((u:any)=>u.name===a.unit);
    if (!unit) return "equip_target_not_found";
    return null;
  }

  return "unknown_action";
}

// ターン開始処理：AP +1（最大まで）と acted リセット & サポートリセット
export function onTurnStart(gs:GameState, who:"P1"|"P2"){
  const me:any = getSide(gs, who);
  for (const u of me.adv) {
    if (u.hp>0) u.ap = Math.min(u.maxAp, (u.ap||0)+1);
    u.statuses = (u.statuses||[]).filter((s:string)=>!s.startsWith("acted"));
  }
  gs.flags = gs.flags || {};
  gs.flags[who] = gs.flags[who] || {};
  gs.flags[who].supportUsed = false;
}

// デッキ検証：20枚・同名3枚まで
export function validateDeck(list:string[]){
  if (list.length !== 20) throw new Error("deck_must_be_20");
  const count:Record<string,number> = {};
  for (const c of list){ count[c] = (count[c]||0)+1; if (count[c] > 3) throw new Error("max_3_copies"); }
}
