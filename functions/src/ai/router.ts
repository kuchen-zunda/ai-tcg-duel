// 会話/操作のルーティング + 必要なら人格に沿った返信も生成
import { getFirestore } from "firebase-admin/firestore";
import dataset from "../data/min_tcg_set.js";
import type { GameState, Action } from "../engine/types.js";

type RouteKind = "game_action" | "chat" | "both" | "unknown";
export type RouteResult = {
  kind: RouteKind;
  intent?: Action|null;
  reply?: string|null;   // 人格での返答（chat or bothのとき）
  ask?: string|null;     // あいまい時の質問
  explain?: string|null; // 解釈の説明（任意）
};

const SYSTEM = `You are a router for a turn-based card game with roleplay.
Decide if a user's message is (a) a game action, (b) a conversational chat, (c) both.
Return ONLY JSON: {kind, intent, reply, ask, explain}.
- If it's a game action, fill "intent" using the schema provided and set kind to "game_action".
- If it's just smalltalk/roleplay, set kind "chat" and write "reply" in Japanese matching the given persona.
- If both (talk + an instruction), set kind "both", include both "intent" and "reply".
- If ambiguous, set kind "unknown" and ask a short Japanese clarification in "ask".
Constraints:
- Use ONLY unit and card names from the provided state.
- Use only action names listed for that unit.
- NEVER invent resources or names not present.
- Persona applies only to "reply" content; "intent" must remain strictly structured.`;

const nospace = (s:string)=>s.replace(/\s+/g,"");
const JOB_PREFIXES = ["剣士","僧侶","弓手","魔導師","盗賊","守護者","吟遊詩人","戦士","魔法使い"];

function buildAliasMap(fulls: string[]) {
  const m = new Map<string,string>();
  for (const full of fulls) {
    const NS = nospace(full);
    const stripped = JOB_PREFIXES.reduce((s,p)=> s.replace(new RegExp("^"+p), ""), NS);
    const aliases = new Set<string>([NS, stripped, stripped.slice(-3), stripped.slice(-2)]);
    for (const a of aliases) if (a && a.length>=2) m.set(a, full);
  }
  return m;
}
function canonical(raw:string, legal:string[], alias:Map<string,string>) {
  if (!raw) return null;
  if (legal.includes(raw)) return raw;
  const key = nospace(raw);
  if (alias.has(key)) return alias.get(key)!;
  const hit = legal.find(n=> nospace(n).includes(key));
  return hit || null;
}
function safeParse<T=any>(s:string): T {
  try { return JSON.parse(s); } catch { return { kind:"unknown", ask:"もう一度短く指示してね" } as any; }
}

export async function routeUserText(
  { gameId, uid, text, model = process.env.OPENAI_MODEL || "gpt-4o-mini" }:
  { gameId:string; uid:string; text:string; model?:string }
): Promise<RouteResult> {
  const db = getFirestore();
  const pub  = await db.doc(`games/${gameId}/public/state`).get();
  const meta = await db.doc(`games/${gameId}/meta/info`).get();
  const gs   = pub.data() as GameState | undefined;

  // プレイヤの手札（P1想定。将来P2なら分岐）
  const p1 = (meta.data() as any)?.p1_uid;
  const priv = p1 ? (await db.doc(`games/${gameId}/private/${p1}`).get()).data() : null;

  const myAdv = gs?.p1?.adv?.map(a => a.name) ?? [];
  const myHand = priv?.hand ?? [];
  const oppAdv = gs?.p2?.adv?.map(a => a.name) ?? [];

  // 行動定義
  const actionsByUnit:Record<string,string[]> = {};
  for (const a of (dataset as any).cards.adventurers) {
    actionsByUnit[a.name] = (a.actions||[]).map((x:any)=>x.name);
  }
  // カテゴリ
  const catsByCard:Record<string,"support"|"equipment"|"event"|"field"> = {};
  for (const s of (dataset as any).cards.supports)   catsByCard[s.name] = "support";
  for (const e of (dataset as any).cards.equipment) catsByCard[e.name] = "equipment";
  for (const v of (dataset as any).cards.events)    catsByCard[v.name] = "event";
  for (const f of (dataset as any).cards.fields)    catsByCard[f.name] = "field";

  const aliasUnits = buildAliasMap(myAdv);
  const userPrompt =
`GameID: ${gameId}
Persona (opponent): ${(meta.data() as any)?.ai_persona || "軽口を叩く冒険者風。短文でフレンドリー。"}
My units: ${JSON.stringify(myAdv)}
Opponent units: ${JSON.stringify(oppAdv)}
My hand: ${JSON.stringify(myHand)}
ActionsByUnit: ${JSON.stringify(actionsByUnit)}
CardCategories: ${JSON.stringify(catsByCard)}
AliasUnits: ${JSON.stringify(Object.fromEntries(aliasUnits))}
Schema for "intent":
  - use_action: {"type":"use_action","unit":"<my unit>","action":"<action name>","target":"<my unit(optional)>"}
  - play_support: {"type":"play_support","card":"<in hand>","mode":"adventurer|boss","target":"<my unit(optional)>"}
  - play_field: {"type":"play_field","card":"<in hand>","side":"adventurer|boss"}
  - equip: {"type":"equip","card":"<in hand>","unit":"<my unit>"}
  - play_event: {"type":"play_event","card":"<in hand>"}
  - end_turn: {"type":"end_turn"}
User: """${text}"""
Return ONLY JSON: {"kind":"game_action|chat|both|unknown","intent":{...}|null,"reply":string|null,"ask":string|null,"explain":string|null}`;

  const r = await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{ "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type":"application/json" },
    body: JSON.stringify({
      model,
      response_format:{ type:"json_object" },
      messages: [
        { role:"system", content: SYSTEM },
        { role:"user", content: userPrompt }
      ],
      temperature: 0.3 // 解析は低温で安定
    })
  });
  const j = await r.json();
  const out = safeParse<RouteResult>(j?.choices?.[0]?.message?.content || "{}");

  // 最終の名前正規化（保険）
  if (out?.intent) {
    const intent:any = out.intent;
    if (intent.unit   && !myAdv.includes(intent.unit))   intent.unit   = canonical(intent.unit,   myAdv, aliasUnits);
    if (intent.target && !myAdv.includes(intent.target)) intent.target = canonical(intent.target, myAdv, aliasUnits);
  }
  return out;
}
