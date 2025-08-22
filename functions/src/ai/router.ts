import { getFirestore } from "firebase-admin/firestore";
import type { GameState, Action } from "../rulepacks/dualraid/engine/types.js";
import type { EngineAdapter, RouterResult } from "../core/types.js";

const SYSTEM = `You are a router for a turn-based card game with roleplay.
Decide whether a user's message is: (a) a game action, (b) conversational chat, (c) both, (d) unknown.
Return ONLY JSON {kind, actions, reply, ask, explain}.
- If game action, produce an array "actions" following the schema and allowed names.
- If chat, write a short Japanese reply matching the persona.
- If both, include both.
- If ambiguous, ask a short clarification.
Constraints:
- Use ONLY names provided; NEVER invent new cards/units/actions.
- The "actions" must be valid per the provided vocab; no free-form text.`;

function safe<T = any>(s: string): T {
  try { return JSON.parse(s); }
  catch { return { kind: "unknown", ask: "もう一度短くお願い" } as any; }
}

export async function routeUserText(
  { gameId, seat, adapter, model = process.env.OPENAI_MODEL || "gpt-4o-mini" }:
  { gameId: string; seat: "P1" | "P2"; adapter: EngineAdapter; model?: string },
  text: string
): Promise<RouterResult> {
  const db = getFirestore();

  const pub = await db.doc(`games/${gameId}/public/state`).get();
  const meta = await db.doc(`games/${gameId}/meta/info`).get();
  const gs = pub.data() as GameState;

  const p1 = (meta.data() as any)?.p1_uid;
  const priv = p1 ? (await db.doc(`games/${gameId}/private/${p1}`).get()).data() : null;
  const hand = seat === "P1" ? (priv?.hand ?? []) : [];

  const man = await adapter.manifestForPrompt(gs, { mySeat: seat, myHand: hand });

  const prompt =
`Persona (opponent): ${(meta.data() as any)?.ai_persona || "勝気だが礼儀正しい剣士。短文。"}
Seat: ${seat}
Units (you can command): ${JSON.stringify(man.units)}
ActionsByUnit: ${JSON.stringify(man.actionsByUnit)}
CardsByCategory: ${JSON.stringify(man.cardsByCategory)}
Hand: ${JSON.stringify(man.hand)}
Action schema (array):
  - {"type":"use_action","unit":"<unit>","action":"<name>","target":"<unit?>"}
  - {"type":"equip","card":"<in hand>","unit":"<unit>"}
  - {"type":"play_support","card":"<in hand>","mode":"adventurer|boss","target":"<unit?>"}
  - {"type":"play_field","card":"<in hand>","side":"adventurer|boss"}
  - {"type":"play_event","card":"<in hand>"}
  - {"type":"end_turn"}
User: """${text}"""
Return ONLY JSON: {"kind":"game_action|chat|both|unknown","actions":[...]|null,"reply":string|null,"ask":string|null,"explain":string|null}`;

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return { kind: "unknown", ask: "（設定不足）管理者が OpenAI キーを設定してください。", reply: null, actions: null, explain: null } as any;
  }

  const payload = {
    model,
    temperature: 0.3,
    response_format: { type: "json_object" },
    messages: [{ role: "system", content: SYSTEM }, { role: "user", content: prompt }]
  };

  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const j = await r.json();
    return safe<RouterResult>(j?.choices?.[0]?.message?.content || "{}");
  } catch (err: any) {
    return { kind: "unknown", ask: "接続に失敗しました。もう一度お願いします。", reply: null, actions: null, explain: String(err) } as any;
  }
}
