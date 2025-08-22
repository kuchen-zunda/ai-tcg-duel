import type { ArbiterInput, DecideResult } from "./schema.js";

const SYSTEM = `You are the host/referee of a TCG room.
Read rulebook and manifest; return ONLY JSON matching the schema.
Never invent card/unit/action names beyond the provided manifest.
If input is casual chat, do not produce any action.`;

function safe<T=any>(s:string){ try{ return JSON.parse(s) as T } catch{ return {kind:"unknown", ask:"もう一度短くお願い"} as any } }

function norm(s:string){
  return s.replace(/[！!。．\.?？、,]/g,' ').replace(/\s+/g,' ').trim();
}

export async function arbitrate(input: ArbiterInput, model = process.env.OPENAI_MODEL || "gpt-4o-mini"): Promise<DecideResult>{
  const key = process.env.OPENAI_API_KEY;
  const prompt = `Rulepack: ${input.rulepack}
Opponent Persona: ${input.persona}
State Summary: ${input.stateSummary}

Manifest Units: ${JSON.stringify(input.manifest.units)}
ActionsByUnit: ${JSON.stringify(input.manifest.actionsByUnit)}
CardsByCategory: ${JSON.stringify(input.manifest.cardsByCategory)}
Hand: ${JSON.stringify(input.manifest.hand)}

Rulebook excerpt:
"""
${input.rulebookExcerpt}
"""

User: """${input.userUtterance}"""

Return ONLY one of:
{"kind":"game","actions":[...] ,"narration": "<jp>"}
{"kind":"chat","reply":"<jp>"}
{"kind":"both","actions":[...],"reply":"<jp>","narration":"<jp>"}
{"kind":"unknown","ask":"<jp>"} 
`;

  if (key){
    try{
      const r = await fetch("https://api.openai.com/v1/chat/completions", {
        method:"POST",
        headers:{ "Authorization":`Bearer ${key}`, "Content-Type":"application/json" },
        body: JSON.stringify({
          model, temperature:0.2,
          response_format:{ type:"json_object" },
          messages:[ {role:"system", content:SYSTEM}, {role:"user", content:prompt} ]
        })
      });
      const j = await r.json();
      const out = safe<DecideResult>(j?.choices?.[0]?.message?.content || "{}");
      if (out && out.kind && out.kind !== "unknown") return out;
    }catch{ /* フォールバックへ */ }
  }

  // ---- フォールバック（ローカルゆるふわ正規化） ----
  const t = norm(input.userUtterance);
  if (/(ターン(終|終了)|エンド|ターン返(す|します))/.test(t)) {
    return { kind:"game", actions:[{type:"end_turn"}] } as any;
  }
  const m = /(.*?)で(攻撃|アタック|ヒール|回復|防御|ガード|強攻撃|全力)/.exec(t);
  if (m){
    const unit = input.manifest.units.find(u=>u.includes(m[1])) || input.manifest.units[0];
    const acts = input.manifest.actionsByUnit[unit]||[];
    const pick = (cs:string[])=> acts.find(a=>cs.some(c=>a.includes(c))) || acts[0];
    const word = m[2];
    const name = /攻撃|アタック/.test(word)? pick(["攻撃","アタック","attack"])
               : /ヒール|回復/.test(word)? pick(["ヒール","回復","heal"])
               : /防御|ガード/.test(word)? pick(["防御","ガード","defend"])
               : pick(["強","強攻","power"]);
    return { kind:"game", actions:[{type:"use_action", unit, action:name}] } as any;
  }

  // 「カード名→ユニット」（装備/サポート）
  const arrow = /(.*?)[\s　]*→[\s　]*([^\s　]+)/.exec(t);
  if (arrow){
    const cardNameRaw = arrow[1].trim();
    const target = arrow[2].trim();
    const hand = input.manifest.hand || [];
    const find = (n:string)=> hand.find(h=>h===n || h.includes(n));
    const card = find(cardNameRaw);
    if (card){
      if (input.manifest.cardsByCategory.equipment.includes(card)){
        return { kind:"game", actions:[{type:"equip", card, unit:target}] } as any;
      }
      if (input.manifest.cardsByCategory.support.includes(card)){
        const mode = /(ボス|BOSS|魔王)/.test(t) ? "boss" : "adventurer";
        return { kind:"game", actions:[{type:"play_support", card, mode, target}] } as any;
      }
    }
  }

  // イベント：「◯◯ 使う/使用」
  {
    const m = /(.*?)(を?使う|使用)/.exec(t);
    if (m){
      const name = m[1].trim();
      const hand = input.manifest.hand || [];
      const card = hand.find(h => h===name || h.includes(name));
      if (card && input.manifest.cardsByCategory.event.includes(card)){
        return { kind:"game", actions:[{type:"play_event", card}] } as any;
      }
    }
  }

  // フィールド：「フィールド ◯◯ (ボス|冒険者)」
  {
    const m = /フィールド\s+([^\s]+)(?:\s+(ボス|冒険者|冒険者側|自軍|相手|敵))?/.exec(t);
    if (m){
      const name = m[1];
      const side = /(ボス|相手|敵)/.test(m[2]||"") ? "boss" : "adventurer";
      const hand = input.manifest.hand || [];
      const card = hand.find(h => h===name || h.includes(name));
      if (card && input.manifest.cardsByCategory.field.includes(card)){
        return { kind:"game", actions:[{type:"play_field", card, side}] } as any;
      }
    }
  }

  return { kind:"unknown", ask:"ゲーム指示か会話か、もう少し具体的にお願いなのだ" };
}
