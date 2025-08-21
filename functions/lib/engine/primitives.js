export function dealDamageToBoss(side, amount) {
    side.boss.hp = Math.max(0, side.boss.hp - amount);
}
export function dealDamageToAdventurer(unit, amount) {
    unit.hp = Math.max(0, unit.hp - amount);
}
export function healAdventurer(unit, amount) {
    unit.hp = Math.min(unit.maxHp, unit.hp + amount);
}
