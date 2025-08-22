const dataset = {
  version: "0.9.0",
  cards: {
    bosses: [
      { id:"B001", name:"魔王ヴァルグリム", hp:50,
        dice_table: { "1":{action:"single_attack",value:10}, "2":{action:"single_attack",value:10},
                      "3":{action:"aoe_attack",value:5}, "4":{action:"aoe_attack",value:5},
                      "5":{action:"self_heal",value:10}, "6":{action:"debuff_all_enemies_next_turn",attack_mod:-3} } },
      { id:"B002", name:"魔王マルヴァス", hp:45,
        dice_table: { "1":{action:"single_attack",value:12}, "2":{action:"aoe_attack",value:5},
                      "3":{action:"aoe_attack",value:5}, "4":{action:"stun_enemy",duration_turns:1},
                      "5":{action:"buff_self_next_turn_damage",value:5}, "6":{action:"buff_self_next_turn_damage",value:5} } }
    ],
    adventurers: [
      { id:"A001", name:"剣士リオ", hp:20, atk:8, max_ap:2,
        actions:[{name:"攻撃",type:"attack",damage:8,cost_ap:0}] },
      { id:"A002", name:"僧侶ルゥナ", hp:18, atk:3, max_ap:4,
        actions:[{name:"攻撃",type:"attack",damage:3,cost_ap:0},{name:"ヒール",type:"heal",heal:8,target:"ally_one",cost_ap:2}] },
      { id:"A003", name:"盗賊トウマ", hp:16, atk:5, max_ap:3,
        actions:[{name:"攻撃",type:"attack",damage:5,cost_ap:0}] },
      { id:"A004", name:"魔導士セイ", hp:15, atk:6, max_ap:6,
        actions:[{name:"攻撃",type:"attack",damage:6,cost_ap:0},{name:"範囲魔法",type:"aoe_attack",damage:4,cost_ap:2}] },
      { id:"A005", name:"拳闘士カイ", hp:18, atk:9, max_ap:2,
        actions:[{name:"攻撃",type:"attack",damage:9,cost_ap:0}] },
      { id:"A006", name:"僧侶ショウ", hp:20, atk:2, max_ap:4,
        actions:[{name:"攻撃",type:"attack",damage:2,cost_ap:0},{name:"大回復",type:"heal",heal:4,target:"ally_all",cost_ap:3}] },
      { id:"A007", name:"狩人ミナト", hp:17, atk:6, max_ap:3,
        actions:[{name:"攻撃",type:"attack",damage:6,cost_ap:0},{name:"狙撃",type:"attack_boss_only",damage:12,cost_ap:2}] },
      { id:"A008", name:"錬金術士ハル", hp:15, atk:4, max_ap:5,
        actions:[{name:"攻撃",type:"attack",damage:4,cost_ap:0}] }
    ],
    supports: [
      { id:"S001", name:"癒しの光",
        adventurer_effect:{type:"heal",target:"ally_one",heal:5},
        boss_effect:{type:"shield_next_hit",reduce:5} },
      { id:"S002", name:"魔力の加護",
        adventurer_effect:{type:"buff_next_attack",target:"ally_one",multiplier:2},
        boss_effect:{type:"dice_modifier_next",value:1} },
      { id:"S007", name:"絆の記録",
        adventurer_effect:{type:"draw_cards",count_by:"fallen_allies",max:2},
        boss_effect:{type:"opponent_put_hand_to_deck",count:1} }
    ],
    equipment: [{id:"E001", name:"勇気の剣"}],
    events: [{id:"V003", name:"気合注入"}],
    fields: [{id:"F001", name:"神殿広間"}, {id:"F002", name:"魔王の玉座"}]
  }
};
export default dataset;
