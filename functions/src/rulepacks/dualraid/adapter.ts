import dataset from "./dataset.js";

export const DualRaidAdapter = {
  async manifestForPrompt(gs:any, ctx:{ mySeat:"P1"|"P2"; myHand:string[] }) {
    const adv = (dataset as any).cards.adventurers.map((a:any)=>({
      name:a.name,
      aliases:[ a.name, a.name.replace(/^(剣士|僧侶|盗賊|魔導士)/,"") ].filter(Boolean),
      actions:a.actions.map((x:any)=>({ name:x.name, type:x.type, cost_ap:x.cost_ap }))
    }));
    const supports = (dataset as any).cards.supports.map((s:any)=>({ name:s.name, aliases:[s.name] }));
    const equipment = (dataset as any).cards.equipment.map((e:any)=>({ name:e.name, to:e.to||[], aliases:[e.name] }));
    const fields = (dataset as any).cards.fields.map((f:any)=>({ name:f.name, aliases:[f.name] }));
    return { seat:ctx.mySeat, myHand:ctx.myHand, units:adv, cards:{supports,equipment,fields},
      constraints:{ supportOncePerTurn:true, oneActionPerAdventurer:true } };
  }
};
