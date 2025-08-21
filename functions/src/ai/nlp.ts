// Providerに依存しない薄いラッパー（OpenAI/Vertex等どれでもOKに）
import { getFirestore } from "firebase-admin/firestore";
import type { GameState, Action } from "../engine/types.js";

const SYSTEM = `You are a command parser for a turn-based card game.
- Output ONLY JSON with keys: ok(boolean), intent(object|null), ask(string|null), explain(string).
- If the input is ambiguous or impossible, set ok=false and ask with a short clarifying question in Japanese.
- Valid intents (examples):
  { "type":"end_turn" }
  { "type":"use_action","unit":"<advName>","action":"攻撃" }
  { "type":"use_action","unit":"僧侶ルゥナ","action":"ヒール","target":"剣士リオ" }
  { "type":"play_support","card":"絆の記録","mode":"adventurer","target":"剣士リオ" }
- Use ONLY names that exist in the provided state.`

export async function parseLineToIntent(opts:{
  provider?: "openai"|"vertex";
  apiKey?: string;
  model?: string;
  gameId: string;
  text: string;
}): Promise<{ ok:boolean; intent: Action|null; ask?: string|null; explain?: string }> {
  const db = getFirestore();
  // 盤面の固有名詞だけ抽出してプロンプトに載せ、幻覚を抑える
  const snap = await db.doc(`games/${opts.gameId}/public/state`).get();
  const gs = snap.data() as GameState;
  const me = gs?.p1, opp = gs?.p2;
  const names = {
    myAdv: me?.adv?.map(a=>a.name) ?? [],
    myHand: (await db.doc(`games/${opts.gameId}/private/${(await db.doc(`games/${opts.gameId}/meta/info`).get()).data()?.p1_uid}`).get()).data()?.hand ?? [],
    supports: ["癒しの光","魔力の加護","絆の記録","迅速の符","鉄壁の守り","幻惑の囁き","血の契約"]
  };

  const userPrompt = [
    `ゲームID: ${opts.gameId}`,
    `自分の冒険者: ${names.myAdv.join(", ") || "-"}`,
    `自分の手札: ${names.myHand.join(", ") || "-"}`,
    `入力: """${opts.text}"""`,
    `JSONだけで返答して: {"ok":..., "intent":..., "ask":..., "explain":...}`
  ].join("\n");

  // --- プロバイダ別呼び出し（例：OpenAI Chat Completions JSON） ---
  const provider = opts.provider || (process.env.LLM_PROVIDER as any) || "openai";
  if (provider === "openai") {
    const apiKey = opts.apiKey || process.env.OPENAI_API_KEY!;
    const model = opts.model || process.env.OPENAI_MODEL || "gpt-4o-mini";
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        response_format: { type: "json_object" },
        messages: [{ role:"system", content: SYSTEM }, { role:"user", content: userPrompt }]
      })
    });
    const j = await r.json();
    const txt = j.choices?.[0]?.message?.content || "{}";
    return safeParse(txt);
  }

  // 他プロバイダはここに追加（Vertex等）。未設定ならフォールバック
  return fallbackParse(opts.text, names);
}

// JSON安全パース
function safeParse(s:string){
  try { return JSON.parse(s); } catch { return { ok:false, intent:null, ask:"もう一度短く指示してね", explain:"parse_error" } }
}

// 失敗時フォールバック：超簡易正規表現
function fallbackParse(text:string, names:{myAdv:string[], myHand:string[]}): any {
  const norm = text.replace(/\s+/g,' ').trim();
  if (/^(end|ターン終了|終了)$/i.test(norm)) return { ok:true, intent:{ type:"end_turn" }, explain:"ターン終了" };
  let m = norm.match(/^(attack|攻撃)\s+(\S+)/i);
  if (m) return { ok:true, intent:{ type:"use_action", unit:m[2], action:"攻撃" }, explain:`${m[2]}で攻撃` };
  m = norm.match(/^(heal|ヒール)\s+(\S+)\s*(->|→)\s*(\S+)/i);
  if (m) return { ok:true, intent:{ type:"use_action", unit:m[2], action:"ヒール", target:m[4] }, explain:`${m[2]}が${m[4]}を回復` };
  return { ok:false, intent:null, ask:"例）攻撃 リオ / ヒール ルゥナ→リオ / サポート 絆の記録 冒険者 リオ", explain:"fallback" };
}
