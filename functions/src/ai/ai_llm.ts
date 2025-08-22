// functions/src/ai/ai_llm.ts
import type { Action, GameState } from "../rulepacks/dualraid/engine/types.js";
import { callLLMJSON } from "../core/llm.js";

const PLAN_SCHEMA = {
  type:"object",
  properties:{
    actions:{ type:"array", items:{
      oneOf:[
        { type:"object", properties:{ type:{const:"use_action"}, unit:{type:"string"}, action:{type:"string"}, target:{type:"string"} }, required:["type","unit","action"] },
        { type:"object", properties:{ type:{const:"play_support"}, card:{type:"string"}, mode:{enum:["adventurer","boss"]}, target:{type:"string"} }, required:["type","card","mode"] },
        { type:"object", properties:{ type:{const:"play_field"}, card:{type:"string"}, side:{enum:["adventurer","boss"]} }, required:["type","card","side"] },
        { type:"object", properties:{ type:{const:"equip"}, card:{type:"string"}, unit:{type:"string"} }, required:["type","card","unit"] },
        { type:"object", properties:{ type:{const:"end_turn"} }, required:["type"] }
      ]
    }}
  },
  required:["actions"]
};

export async function planOpponentTurn({
  persona,
  manifest,
  rulebook,
  stateSummary
}:{
  persona: string;
  manifest: any;
  rulebook: string;
  stateSummary: string;
}): Promise<Action[]> {
  const system =
`あなたは対戦AIです。賢く手札・AP・ルールを考慮し、最善手を1～3アクションだけ計画します。
出力は JSON のみ（スキーマ準拠）。最後は必ず end_turn を含めても良い。`;

  const user =
`# ルール要約
${rulebook}

# 盤面サマリ
${stateSummary}

# ルールマニフェスト
${JSON.stringify(manifest, null, 2)}

# あなたの性格
${persona || ""}

# 指示
- その手番に行う 1～3 アクションを列挙して返す
- 行動済ユニットの再行動は禁止（エンジンで弾かれる）
- APコストや「サポート1ターン1枚」等の制約に注意`;

  try {
    const out = await callLLMJSON({ system, user, schema: PLAN_SCHEMA });
    return (out?.actions ?? []) as Action[];
  } catch {
    return [{ type:"end_turn" } as Action];
  }
}
