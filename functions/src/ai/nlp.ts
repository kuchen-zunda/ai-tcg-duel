import { getFirestore } from "firebase-admin/firestore";
import dataset from "../data/min_tcg_set.js";
import type { GameState, Action } from "../engine/types.js";

const SYSTEM = `You are a command parser for a turn-based card game.
Output ONLY JSON: { ok:boolean, intent:object|null, ask:string|null, explain:string }.
If ambiguous or impossible, set ok=false and ask a short clarifying question in Japanese.
Use ONLY names that exist in the provided state. You may canonicalize nicknames with alias maps.`;

const JOB_PREFIXES = ["剣士","僧侶","弓手","魔導師","盗賊","守護者","吟遊詩人","戦士","魔法使い"];
const nospace = (s:string)=>s.replace(/\s+/g,"");

function safeParse(s: string) {
  try { return JSON.parse(s); }
  catch { return { ok:false, intent:null, ask:"もう一度短く指示してね", explain:"parse_error" }; }
}

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

const END_SYNS = ["ターン終了","終了","ターンエンド","エンド","エンドです","ターン返します","返します","返す","パス"];
const ATK_SYNS = ["攻撃","アタック","殴る","たたく","通常攻撃","攻める"];
const HEAL_SYNS = ["ヒール","回復","治療","ケア","癒やす","癒す","ヒーリング"];
const USE_SYNS = ["使う","使用","発動","プレイ","切る","うつ","唱える","貼る","装備","装着","つける"]; // 種別は後で推定

function hasWord(t:string, arr:string[]) { return arr.some(w=> t.includes(w)); }

function trySimple(text:string, ctx:{
  myAdv:string[]; aliasUnits:Map<string,string>;
  myHand:string[]; aliasCards:Map<string,string>;
  actionsByUnit:Record<string,string[]>;
  catsByCard: Record<string,"support"|"equipment"|"event"|"field">;
}) {
  const t = text.trim();

  // ターン終了の揺らぎ
  if (hasWord(t, END_SYNS)) return { ok:true, intent:{ type:"end_turn" } as any, explain:"ターン終了" };

  // 「リオで攻撃」 / 「攻撃 リオ」 / 「リオ 殴る」等
  if (ATK_SYNS.some(s=>t.includes(s))) {
    // 「Xで(攻撃)」形式優先
    let m = t.match(/^(.+?)で(.+)$/);
    if (!m) m = t.match(/^(.+?)\s*(を)?\s*(殴る|攻撃|アタック|たたく)/);
    if (m) {
      const unit = canonical(m[1], ctx.myAdv, ctx.aliasUnits);
      if (unit) return { ok:true, intent:{ type:"use_action", unit, action:"攻撃" } as any, explain:`${unit}で攻撃` };
    }
    // 「(攻撃) リオ」
    m = t.match(/^(攻撃|アタック|殴る|たたく)\s+(.+)$/);
    if (m) {
      const unit = canonical(m[2], ctx.myAdv, ctx.aliasUnits);
      if (unit) return { ok:true, intent:{ type:"use_action", unit, action:"攻撃" } as any, explain:`${unit}で攻撃` };
    }
  }

  // ヒール系 「ルゥナで回復→リオ」「ヒール ルゥナ→リオ」「ルゥナ リオ回復」
  if (HEAL_SYNS.some(s=>t.includes(s))) {
    let m = t.match(/^(.+?)で(.+?)[\s　]*(?:→|->)?[\s　]*(.+)$/); // Aでヒール→B
    if (m) {
      const healer = canonical(m[1], ctx.myAdv, ctx.aliasUnits);
      const target = canonical(m[3], ctx.myAdv, ctx.aliasUnits);
      if (healer && target) return { ok:true, intent:{ type:"use_action", unit:healer, action:"ヒール", target } as any, explain:`${healer}が${target}を回復` };
    }
    m = t.match(/^(?:ヒール|回復|治療)\s+(.+?)[\s　]*(?:→|->)\s*(.+)$/); // ヒール A→B
    if (m) {
      const healer = canonical(m[1], ctx.myAdv, ctx.aliasUnits);
      const target = canonical(m[2], ctx.myAdv, ctx.aliasUnits);
      if (healer && target) return { ok:true, intent:{ type:"use_action", unit:healer, action:"ヒール", target } as any, explain:`${healer}が${target}を回復` };
    }
  }

  // ユニット固有アクション名（「セリスで範囲魔法」「カナ 強撃」など）
  let m = t.match(/^(.+?)で(.+)$/);
  if (m) {
    const unit = canonical(m[1], ctx.myAdv, ctx.aliasUnits);
    const actionName = m[2].trim();
    const legal = unit ? (ctx.actionsByUnit[unit] || []) : [];
    const action = legal.find(n=> n===actionName) || legal.find(n=> n.includes(actionName));
    if (unit && action) return { ok:true, intent:{ type:"use_action", unit, action } as any, explain:`${unit}が「${action}」` };
  }

  // カード名が含まれていたら「何として使うか」を推定（手札限定）
  if (hasWord(t, USE_SYNS) || ctx.myHand.some(c=> t.includes(c))) {
    // 手札からカード候補を拾う
    const card = ctx.myHand.find(c=> t.includes(c)) || ctx.myHand.find(c=> t.includes(nospace(c)));
    if (card) {
      const cat = ctx.catsByCard[card]; // support/equipment/event/field
      if (cat === "equipment") {
        // 装備 → 「装備 A」「Aにつける」など
        let unit: string | null = null;
        let mm = t.match(/(?:->|→)\s*(.+)$/) || t.match(/(に|へ)\s*(.+?)\s*(を|をつける|装備)/);
        if (mm) unit = canonical(mm[1] || mm[2], ctx.myAdv, ctx.aliasUnits);
        if (!unit) {
          // 指定なければ一番左の生存ユニットに装備（運用で好み調整）
          unit = ctx.myAdv[0] || null;
        }
        if (unit) return { ok:true, intent:{ type:"equip", card, unit } as any, explain:`${unit}に装備「${card}」` };
      } else if (cat === "field") {
        const side = /ボス|boss/i.test(t) ? "boss" : "adventurer";
        return { ok:true, intent:{ type:"play_field", card, side } as any, explain:`フィールド「${card}」(${side})` };
      } else if (cat === "event") {
        return { ok:true, intent:{ type:"play_event", card } as any, explain:`イベント「${card}」` };
      } else { // support
        const mode = /ボス|boss/i.test(t) ? "boss" : "adventurer";
        let target: string | undefined = undefined;
        let mm = t.match(/(?:->|→)\s*(.+)$/) || t.match(/(を|で)\s*(.+?)\s*(強化|支援|対象)/);
        if (mm) target = canonical(mm[1] || mm[2], ctx.myAdv, ctx.aliasUnits) || undefined;
        return { ok:true, intent:{ type:"play_support", card, mode, target } as any, explain:`サポート「${card}」(${mode})` };
      }
    }
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

  const actionsByUnit:Record<string,string[]> = {};
  for (const a of (dataset as any).cards.adventurers) {
    actionsByUnit[a.name] = (a.actions||[]).map((x:any)=>x.name);
  }
  const catsByCard:Record<string,"support"|"equipment"|"event"|"field"> = {};
  for (const s of (dataset as any).cards.supports)   catsByCard[s.name] = "support";
  for (const e of (dataset as any).cards.equipment) catsByCard[e.name] = "equipment";
  for (const v of (dataset as any).cards.events)    catsByCard[v.name] = "event";
  for (const f of (dataset as any).cards.fields)    catsByCard[f.name] = "field";

  const aliasUnits = buildAliasMap(myAdv);
  const aliasCards = new Map<string,string>(); for (const c of hand) aliasCards.set(nospace(c), c);

  // 1) 高速フォールバック（揺らぎ広め）
  const simple = trySimple(text, { myAdv, aliasUnits, myHand: hand, aliasCards, actionsByUnit, catsByCard });
  if (simple) return simple;

  // 2) LLM（構造化JSON）
  const userPrompt = [
    `ゲームID: ${gameId}`,
    `myUnits: ${JSON.stringify(myAdv)}`,
    `myHand: ${JSON.stringify(hand)}`,
    `actionsByUnit: ${JSON.stringify(actionsByUnit)}`,
    `catsByCard: ${JSON.stringify(catsByCard)}`,
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

    // 念のためユニット/ターゲット名を最終正規化
    const intent:any = out?.intent || null;
    if (intent) {
      if (intent.unit   && !myAdv.includes(intent.unit))   { const can = canonical(String(intent.unit), myAdv, aliasUnits); if (can) intent.unit = can; }
      if (intent.target && !myAdv.includes(intent.target)) { const can = canonical(String(intent.target), myAdv, aliasUnits); if (can) intent.target = can; }
    }
    return out;
  }

  return { ok:false, intent:null, ask:"NLPプロバイダ未設定なのだ", explain:"no_provider" };
}
