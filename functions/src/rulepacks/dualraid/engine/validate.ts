import { Action, GameState } from "./types.js";

export function softValidate(gs: GameState, actor:"P1"|"P2", a: Action){
  const me = actor==="P1"? gs.p1 : gs.p2;

  if (a.type==="use_action"){
    const unit = me.adv.find((x:any)=>x.name===a.unit);
    if (!unit) return {ok:false, reason:"unit_not_found"};
    if (unit.hp<=0) return {ok:false, reason:"unit_down"};
  }

  if (a.type==="play_support"){
    if (me.flags.supportUsedThisTurn) return {ok:false, reason:"support_already_used"};
    if (!me.hand.includes(a.card)) return {ok:false, reason:"card_not_in_hand"};
  }

  if (a.type==="equip"){
    if (!me.hand.includes(a.card)) return {ok:false, reason:"card_not_in_hand"};
    const unit = me.adv.find((x:any)=>x.name===a.unit);
    if (!unit) return {ok:false, reason:"unit_not_found"};
  }

  if (a.type==="play_field" || a.type==="play_event"){
    if (!me.hand.includes(a.card)) return {ok:false, reason:"card_not_in_hand"};
  }

  return {ok:true};
}
