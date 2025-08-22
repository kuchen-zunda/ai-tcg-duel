import dataset from "./dataset.js";
import type { GameState, Action } from "./engine/types.js";
import { applyIntent } from "./engine/reducer.js";
import type { EngineAdapter } from "../../core/types.js";

export const DualRaidAdapter: EngineAdapter = {
  engine: "dualraid",

  async manifestForPrompt(gs, { mySeat, myHand }) {
    const units = (mySeat==="P1"? gs.p1.adv : gs.p2.adv).map(a=>a.name);
    const actionsByUnit: Record<string,string[]> = {};
    for (const a of (dataset as any).cards.adventurers) {
      actionsByUnit[a.name] = (a.actions||[]).map((x:any)=>x.name);
    }
    const cardsByCategory:any = { support:[], equipment:[], event:[], field:[] };
    for (const s of (dataset as any).cards.supports)   cardsByCategory.support.push(s.name);
    for (const e of (dataset as any).cards.equipment) cardsByCategory.equipment.push(e.name);
    for (const v of (dataset as any).cards.events)    cardsByCategory.event.push(v.name);
    for (const f of (dataset as any).cards.fields)    cardsByCategory.field.push(f.name);

    return { units, actionsByUnit, cardsByCategory, hand: myHand };
  },

  validateAndApply(gs, actor, actions) {
    let cur = gs;
    for (const a of actions) {
      cur = applyIntent(cur, actor, a);
    }
    return cur;
  }
};
