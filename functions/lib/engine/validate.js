export function softValidate(gs, actor, a) {
    const me = actor === "P1" ? gs.p1 : gs.p2;
    if (a.type === "use_action") {
        const unit = me.adv.find((x) => x.name === a.unit);
        if (!unit)
            return { ok: false, reason: "unit_not_found" };
        if (unit.hp <= 0)
            return { ok: false, reason: "unit_down" };
    }
    if (a.type === "play_support") {
        if (me.flags.supportUsedThisTurn)
            return { ok: false, reason: "support_already_used" };
        if (!me.hand.includes(a.card))
            return { ok: false, reason: "card_not_in_hand" };
    }
    if (a.type === "play_field" || a.type === "equip") {
        if (!me.hand.includes(a.card))
            return { ok: false, reason: "card_not_in_hand" };
    }
    return { ok: true };
}
