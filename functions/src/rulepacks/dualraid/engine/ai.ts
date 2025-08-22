import { GameState } from "./types.js";
import { applyIntent } from "./reducer.js";

export function aiTakeTurn(gs: GameState, actor: "P2"): GameState {
  const me = gs.p2;
  const alive = (u: any) => u.hp > 0;

  // サポート1枚使う（あれば）
  if (!me.flags.supportUsedThisTurn) {
    for (const name of ["迅速の符","魔力の加護","癒しの光","鉄壁の守り","幻惑の囁き","絆の記録","血の契約"]) {
      if (me.hand.includes(name)) {
        const unit = me.adv.filter(alive).sort((a: any, b: any) => b.atk - a.atk)[0]?.name;
        try {
          gs = applyIntent(gs, "P2", { type: "play_support", card: name, mode: "adventurer", target: unit });
          break;
        } catch {}
      }
    }
  }

  // 一番ATK高いユニットで攻撃
  const unit = me.adv.filter(alive).sort((a: any, b: any) => b.atk - a.atk)[0];
  if (unit) {
    try { gs = applyIntent(gs, "P2", { type: "use_action", unit: unit.name, action: "攻撃" }); } catch {}
  }

  // ターン終了
  gs = applyIntent(gs, "P2", { type: "end_turn" });
  return gs;
}
