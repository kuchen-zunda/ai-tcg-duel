// functions/src/core/arbiter.ts
import type { Action, GameState } from "../rulepacks/dualraid/engine/types.js";
import { callLLMJSON } from "./llm.js";

export type ArbiterIn = {
  rulepack: "dualraid";
  persona: string;           // 相手AIのペルソナ（会話時に使用）
  manifest: any;             // ルールパックの機械可読マニフェスト
  rulebookExcerpt: string;   // ルール要約（短文）
  stateSummary: string;      // 盤面サマリ（テキスト）
  userUtterance: string;     // ユーザー自然文
};

export type ArbiterOut =
  | { kind: "game"; actions: Action[]; narration?: string }
  | { kind: "chat"; reply: string }
  | { kind: "both"; actions: Action[]; reply: string; narration?: string };

// 共通スキーマ（エンジンが理解できる最小集合）
const ACTION_SCHEMA = {
  oneOf: [
    {
      type: "object",
      properties: {
        kind: { const: "game" },
        actions: {
          type: "array",
          items: {
            oneOf: [
              { type:"object", properties:{ type:{const:"use_action"}, unit:{type:"string"}, action:{type:"string"}, target:{type:"string"} }, required:["type","unit","action"] },
              { type:"object", properties:{ type:{const:"play_support"}, card:{type:"string"}, mode:{enum:["adventurer","boss"]}, target:{type:"string"} }, required:["type","card","mode"] },
              { type:"object", properties:{ type:{const:"play_field"}, card:{type:"string"}, side:{enum:["adventurer","boss"]} }, required:["type","card","side"] },
              { type:"object", properties:{ type:{const:"equip"}, card:{type:"string"}, unit:{type:"string"} }, required:["type","card","unit"] },
              { type:"object", properties:{ type:{const:"end_turn"} }, required:["type"] }
            ]
          }
        },
        narration: { type:"string" }
      },
      required: ["kind","actions"]
    },
    {
      type: "object",
      properties: { kind:{const:"chat"}, reply:{type:"string"} },
      required: ["kind","reply"]
    },
    {
      type: "object",
      properties: {
        kind:{const:"both"},
        actions: { $ref: "#/oneOf/0/properties/actions" },
        reply:{type:"string"},
        narration:{type:"string"}
      },
      required:["kind","actions","reply"]
    }
  ]
};

export async function arbitrate(input: ArbiterIn): Promise<ArbiterOut> {
  const { manifest, rulebookExcerpt, stateSummary, userUtterance, persona } = input;

  const system =
`あなたはカードゲームの司会兼ジャッジAIです。
- 入力された自然文が「ゲーム操作」なら、必ず JSON でアクション配列を返す。
- ただの会話なら JSON で chat を返す。
- 曖昧な場合は best-effort で1通の解釈を行う（不正ならエンジン側が弾く）。
- 出力は必ず JSON（スキーマ準拠）。テキストは一切混ぜない。`;

  const user =
`# ルール要約
${rulebookExcerpt}

# 盤面サマリ
${stateSummary}

# ルールマニフェスト（機械可読）
${JSON.stringify(manifest, null, 2)}

# 対戦相手のペルソナ（会話時のみ参考）
${persona || ""}

# ユーザーの発話
${userUtterance}

# 期待する出力
- ゲーム操作の場合: {"kind":"game","actions":[...],"narration": "...(任意)"}
- 会話のみ: {"kind":"chat","reply":"..."}
- 両方: {"kind":"both","actions":[...],"reply":"...", "narration":"...(任意)"} `;

  try {
    const out = await callLLMJSON({ system, user, schema: ACTION_SCHEMA });
    // 型はエンジンで再検証するのでそのまま返す
    return out as ArbiterOut;
  } catch {
    // LLM失敗時はフォールバック：単純なエンドターンだけ拾う
    if (/(ターン(終|終了|エンド)|エンド|turn end|endturn)/i.test(userUtterance)) {
      return { kind:"game", actions:[{type:"end_turn"}], narration:"あなたはターンを終了した。" };
    }
    return { kind:"chat", reply:"なるほど。続けよう。" };
  }
}
