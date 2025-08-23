import { callLLMJSON } from "./llm.js";

const ActionSchema = {
  type:"object",
  properties:{
    actions:{ type:"array", items:{ type:"object",
      properties:{
        type:{ type:"string", enum:["use_action","play_support","play_field","equip","end_turn"] },
        unit:{ type:"string" },
        action:{ type:"string" },
        target:{ type:"string" },
        card:{ type:"string" },
        mode:{ type:"string", enum:["adventurer","boss"] },
        side:{ type:"string", enum:["adventurer","boss"] }
      }, required:["type"], additionalProperties:false } },
    chat:{ type:"string" }
  },
  additionalProperties:false
};

const SYSTEM = `あなたはカードゲームの司会兼ジャッジAIです。
- 入力がゲーム操作なら actions を返す。会話だけなら chat。
- 冒険者の名称やカード名は manifest.units[].aliases / cards.*[].aliases から曖昧表現を正規化（例：「リオ」→「剣士リオ」）。
- 1冒険者はターン中1回だけ行動。サポートは1ターン1枚まで。残りAPにも注意。
- 出力は JSON（スキーマ準拠）のみ。テキストは混ぜない。`;

export async function routeNaturalLanguage({ text, manifest }:{
  text:string, manifest:any
}){
  return await callLLMJSON({
    system: SYSTEM + `\n現在の手札: ${JSON.stringify(manifest.myHand)}\n`,
    user: `manifest=${JSON.stringify(manifest)}\nユーザー入力:「${text}」\n最適な actions[] （必要なら end_turn を含む）か、ただの会話なら chat を出力。`,
    schema: ActionSchema,
  });
}

/* 相手（P2）用：盤面を見て最善の短いアクション列を返す */
export async function opponentPlan({ gs, manifest }:{ gs:any, manifest:any }){
  return await callLLMJSON({
    system: SYSTEM + `\nあなたは対戦相手（P2）です。短い一言の挑発 chat を添えても良いが、必ず有効な actions を返し、最後に end_turn を入れること。`,
    user: `manifest=${JSON.stringify(manifest)}\n現在の盤面要約: P2の手札=${JSON.stringify(manifest.myHand)}。最善の手順を返す。`,
    schema: ActionSchema,
  });
}
