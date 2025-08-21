import { dealDamageToAdventurer, dealDamageToBoss } from "./primitives.js";
import { nextInt } from "./rng.js";
import dataset from "../data/min_tcg_set.js";
export function resolveBossAction(gs, actor) {
    const me = actor === "P1" ? gs.p1 : gs.p2;
    const opp = actor === "P1" ? gs.p2 : gs.p1;
    const bossCard = dataset.cards.bosses.find((b) => b.name === me.boss.name);
    if (!bossCard)
        return;
    const die = nextInt(gs.rng.seed, ++gs.rng.rollNo, 6);
    const row = bossCard.dice_table[String(die)];
    if (!row)
        return;
    if (row.action === "single_attack") {
        const tgt = opp.adv.filter((a) => a.hp > 0).sort((a, b) => a.hp - b.hp)[0];
        if (tgt)
            dealDamageToAdventurer(tgt, row.value || 0);
        else
            dealDamageToBoss(opp, row.value || 0);
    }
    else if (row.action === "aoe_attack") {
        for (const a of opp.adv.filter((x) => x.hp > 0))
            dealDamageToAdventurer(a, row.value || 0);
    }
    else if (row.action === "self_heal") {
        me.boss.hp = Math.min(me.boss.maxHp, me.boss.hp + (row.value || 0));
    }
}
