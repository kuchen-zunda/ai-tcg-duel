import { getFirestore } from "firebase-admin/firestore";
import type { GameState, Action } from "../engine/types.js";
import dataset from "../data/min_tcg_set.js";

const SYSTEM = `You are a command parser for a turn-based card game.
Output ONLY JSON: { ok:boolean, intent:object|null, ask:string|null, explain:string }.
If ambiguous or impossible, set ok=false and ask a short clarifying question in Japanese.
Use ONLY names that exist in the provided state. You may canonicalize nicknames using the supplied alias maps.`;

// ---- utils ----
function safeParse(s: string) { try { return JSON.parse(s); } catch { return { ok:false, intent:null, ask:"もう一度短く指示してね", explain:"parse_error" }; } }
const JOB_PREFIXES = ["剣士","僧侶","弓手","魔導師","盗賊","守護者","吟遊詩人","戦士","魔法使い"];
const nospace = (s:string)=>s.replace(/\s+/g,"");

// unit別のエイリアス（リオ→剣士リオ）
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
function canonical(raw:string, legal:string[], alias:Map<string,string>){
  if (!raw) return null;
  if (legal.includes(raw)) return raw;
  const key = nospace(raw);
  if (alias.has(key)) return alias.get(key)!;
  const hit = legal.find(n=> nospace(n).includes(key));
  return hit || null;
}

function trySimple(text:string, names:{ myAdv:string[]; actionsByUnit:Record<string,string[]>; handCards:string[]; aliasUnits:Map<string,string>; aliasCards:Map<string,string> }) {
  const t = text.trim();
  if (/^(ターン終了|終了|end)$/i.test(t)) return { ok:true, intent:{ type:"end_turn" } as any, explain:"ターン終了" };

  // 〇〇で攻撃 / 攻撃 〇〇
  let m = t.match(/^(.+?)で(攻撃)$/); if (!m) m = t.match(/^(攻撃)\s+(.+)$/);
  if (m) {
    const nameRaw = m[1]==="攻撃" ? m[2] : m[1];
    const unit = canonical(nameRaw, names.myAdv, names.aliasUnits);
    if (unit) return { ok:true, intent:{ type:"use_action", unit, action:"攻撃" } as any, explain:`${unit}で攻撃` };
  }

  // 〇〇でヒール→△△ / ヒール 〇〇→△△
  m = t.match(/^(.+?)で(ヒール|回復)[\s　]*(?:→|->)?[\s　]*(.+)$/);
  if (!m) m = t.match(/^(ヒール|回復)\s+(.+?)[\s　]*(?:→|->)\s*(.+)$/);
  if (m) {
    const healerRaw = m[1]==="ヒール"||m[1]==="回復" ? m[2] : m[1];
    const targetRaw = m[3];
    const healer = canonical(healerRaw, names.myAdv, names.aliasUnits);
    const target = canonical(targetRaw, names.myAdv, names.aliasUnits);
    if (healer && target) return { ok:true, intent:{ type:"use_action", unit:healer, action:"ヒール", target } as any, explain:`${healer}が${target}を回復` };
  }

  // 装備 カード名 -> ユニット
  m = t.match(/^(装備)\s+(.+?)(?:\s*(?:->|→)\s*(.+))?$/);
  if (m) {
    const card = canonical(m[2], names.handCards, names.aliasCards);
    const unit = m[3] ? canonical(m[3], names.myAdv, names.aliasUnits) : null;
    if (card && unit) return { ok:true, intent:{ type:"equip", card, unit } as any, explain:`${unit}に装備「${card}」` };
  }

  // サポート/フィールド/イベント
  m = t.match(/^(サポート|support)\s+(.+?)(?:\s+(冒険者|ボス))?(?:\s+(.+))?$/i);
  if (m) {
    const card = canonical(m[2], names.handCards, names.aliasCards);
    const mode = /ボス/i.test(m[3]||"") ? "boss" : "adventurer";
    const target = m[4] ? canonical(m[4], names.myAdv, names.aliasUnits) : undefined;
    if (card) return { ok:true, intent:{ type:"play_support", card, mode, target } as any, explain:`サポート「${card}」(${mode})` };
  }
  m = t.match(/^(フィールド|field)\s+(.+?)\s+(冒険者|ボス)$/i);
  if (m) {
    const card = canonical(m[2], names.handCards, names.aliasCards);
    const side = /ボス/i.test(m[3]) ? "boss" : "adventurer";
    if (card) return { ok:true, intent:{ type:"play_field", card, side } as any, explain:`フィールド「${card}」(${side})` };
  }
  m = t.match(/^(イベント|event)\s+(.+)$/i);
  if (m) {
    const card = canonical(m[2], names.handCards, names.aliasCards);
    if (card) return { ok:true, intent:{ type:"play_event", card } as any, explain:`イベント「${card}」` };
  }

  // 汎用: 〇〇で<任意の行動名>
  m = t.match(/^(.+?)で(.+)$/);
  if (m) {
    const unit = canonical(m[1], names.myAdv, names.aliasUnits);
    const actionName = m[2].trim();
    const legal = unit ? (names.actionsByUnit[unit] || []) : [];
    const action = legal.find(n=> n===actionName) || legal.find(n=> n.includes(actionName));
    if (unit && action) return { ok:true, intent:{ type:"use_action", unit, action } as any, explain:`${unit}が「${action}」` };
  }

  return null;
}

export async function parseLineToIntent(
  { gameId, text, provider = "openai", model = process.env.OPENAI_MODEL || "gpt-4o-mini" }:
  { gameId: string; text: string; provider?: "openai"; model?: string }
): Promise<{ ok:boolean; intent: Action|null; ask?: string|null; explain?: string }> {
  const db = getFirestore();
  const pub  = await db.doc(`games/${gameId}/public/state`).get();
  const meta = await db.doc(`games/${gameId}/meta/info`).get();
  const gs   = pub.data() as GameState | undefined;
  const p1   = (meta.data() as any)?.p1_uid;
  const priv = p1 ? (await db.doc(`games/${gameId}/private/${p1}`).get()).data() : null;

  const myAdv = gs?.p1?.adv?.map(a => a.name) ?? [];
  const hand  = priv?.hand ?? [];

  // クライアントと同じデータセット（サーバ定義）から行動名の一覧を作る
  const actionsByUnit:Record<string,string[]> = {};
  for (const a of (dataset as any).cards.adventurers) {
    actionsByUnit[a.name] = (a.actions||[]).map((x:any)=>x.name);
  }

  const aliasUnits = buildAliasMap(myAdv);
  const aliasCards = new Map<string,string>();
  for (const c of hand) aliasCards.set(nospace(c), c);

  // 1) まず高速フォールバック
  const simple = trySimple(text, { myAdv, actionsByUnit, handCards: hand, aliasUnits, aliasCards });
  if (simple) return simple;

  // 2) LLMに丸投げ（エイリアスや合法名を渡す）
  const userPrompt = [
    `ゲームID: ${gameId}`,
    `myUnits: ${JSON.stringify(myAdv)}`,
    `myHand: ${JSON.stringify(hand)}`,
    `actionsByUnit: ${JSON.stringify(actionsByUnit)}`,
    `aliasUnits: ${JSON.stringify(Object.fromEntries(aliasUnits))}`,
    `aliasCards: ${JSON.stringify(Object.fromEntries(aliasCards))}`,
    `入力: """${text}"""`,
    `JSONだけで返答して: {"ok":..., "intent":..., "ask":..., "explain":...}`,
  ].join("\n");

  if (provider === "openai") {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model, response_format:{ type:"json_object" },
        messages: [{ role:"system", content: SYSTEM }, { role:"user", content: userPrompt }]
      })
    });
    const j = await r.json();
    const txt = j?.choices?.[0]?.message?.content || "{}";
    const out = safeParse(txt);

    // 最終正規化（ユニット名・ターゲット名）
    const intent:any = out?.intent || null;
    if (intent) {
      if (intent.unit   && !myAdv.includes(intent.unit))   { const can = canonical(String(intent.unit), myAdv, aliasUnits); if (can) intent.unit = can; }
      if (intent.target && !myAdv.includes(intent.target)) { const can = canonical(String(intent.target), myAdv, aliasUnits); if (can) intent.target = can; }
    }
    return out;
  }

  return { ok:false, intent:null, ask:"NLPプロバイダ未設定なのだ", explain:"no_provider" };
}
