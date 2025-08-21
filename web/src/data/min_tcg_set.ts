// 表示専用の軽量カード定義（サーバ側の構造と互換）
// ※ ここは UI の表示に使うだけ。数値はお好みで調整OK。

const cards: any = {
  adventurers: [
    {
      id: "adv_rio",
      name: "剣士リオ",
      hp: 20, atk: 4, max_ap: 2,
      actions: [
        { name: "攻撃", type: "attack_boss_only", damage: 4, cost_ap: 0 },
        { name: "渾身斬り", type: "attack_boss_only", damage: 7, cost_ap: 2 },
        { name: "守りを固める", type: "defend", reduce: 3, cost_ap: 1 }
      ]
    },
    {
      id: "adv_luna",
      name: "僧侶ルゥナ",
      hp: 16, atk: 2, max_ap: 3,
      actions: [
        { name: "攻撃", type: "attack_boss_only", damage: 2, cost_ap: 0 },
        { name: "ヒール", type: "heal", heal: 6, cost_ap: 2 },
        { name: "守りの祈り", type: "defend", reduce: 2, cost_ap: 1 }
      ]
    },
    {
      id: "adv_kana",
      name: "弓手カナ",
      hp: 18, atk: 3, max_ap: 2,
      actions: [
        { name: "攻撃", type: "attack_boss_only", damage: 3, cost_ap: 0 },
        { name: "強撃", type: "attack_boss_only", damage: 6, cost_ap: 2 },
        { name: "回避", type: "defend", reduce: 99, cost_ap: 1 } // 表示用（サーバ側と一致してなくてもOK）
      ]
    },
    {
      id: "adv_ceris",
      name: "魔導師セリス",
      hp: 14, atk: 1, max_ap: 3,
      actions: [
        { name: "火球", type: "attack_boss_only", damage: 4, cost_ap: 1 },
        { name: "範囲魔法", type: "aoe_attack", damage: 3, cost_ap: 2 },
        { name: "詠唱", type: "defend", reduce: 0, cost_ap: 0 }
      ]
    }
  ],
  bosses: [
    {
      id: "boss_tomb",
      name: "墓所の王",
      hp: 40,
      dice_table: {
        "1": { action: "single_attack", value: 5 },
        "2": { action: "single_attack", value: 5 },
        "3": { action: "aoe_attack", value: 3 },
        "4": { action: "self_heal", value: 4 },
        "5": { action: "single_attack", value: 7 },
        "6": { action: "aoe_attack", value: 4 }
      }
    },
    {
      id: "boss_gale",
      name: "翠嵐の領主",
      hp: 38,
      dice_table: {
        "1": { action: "single_attack", value: 4 },
        "2": { action: "single_attack", value: 6 },
        "3": { action: "aoe_attack", value: 3 },
        "4": { action: "self_heal", value: 5 },
        "5": { action: "single_attack", value: 7 },
        "6": { action: "aoe_attack", value: 4 }
      }
    }
  ],
  supports: [
    { name: "癒しの光" },
    { name: "魔力の加護" },
    { name: "絆の記録" },     // ドロー強化（実装はサーバ）
    { name: "迅速の符" },
    { name: "鉄壁の守り" },
    { name: "幻惑の囁き" }
  ],
  equipment: [
    { name: "勇気のお守り", atk_plus: 1 },
    { name: "学者の羽根帽子", max_ap_plus: 1 }
  ],
  events: [
    { name: "追憶の手帳", effect: "draw_if_fallen" } // 倒れている冒険者の数だけドロー（上限2）
  ],
  fields: [
    { name: "古戦場" },
    { name: "静寂の聖域" }
  ]
};

export default { cards };
