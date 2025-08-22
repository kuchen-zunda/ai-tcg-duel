// functions/src/core/llm.ts
// OpenAI Chat Completions(JSONモード)を叩く軽量ヘルパー（Node.js 20+ の fetch を使用）
export async function callLLMJSON({
  system,
  user,
  schema,
  model = "gpt-4o-mini"
}: {
  system: string;
  user: string;
  schema: any;           // JSON Schema
  model?: string;
}): Promise<any> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY not set (functions.onCall secrets に登録してね)");

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      response_format: { type: "json_schema", json_schema: { name: "action_schema", schema } },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      temperature: 0.2
    })
  });

  if (!res.ok) {
    const t = await res.text().catch(()=> "");
    throw new Error(`LLM_HTTP_${res.status}: ${t}`);
  }
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content ?? "{}";
  try { return JSON.parse(text); } catch { throw new Error("LLM_JSON_PARSE_FAILED"); }
}
