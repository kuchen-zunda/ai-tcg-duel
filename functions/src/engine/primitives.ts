import { Adventurer, PlayerSide } from "./types.js";

export function dealDamageToBoss(side: PlayerSide, amount: number){
  side.boss.hp = Math.max(0, side.boss.hp - amount);
}
export function dealDamageToAdventurer(unit: Adventurer, amount: number){
  unit.hp = Math.max(0, unit.hp - amount);
}
export function healAdventurer(unit: Adventurer, amount: number){
  unit.hp = Math.min(unit.maxHp, unit.hp + amount);
}
