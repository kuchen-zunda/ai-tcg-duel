export async function opponentReply(persona:string, text:string, model = process.env.OPENAI_MODEL || "gpt-4o-mini"){
  const key = process.env.OPENAI_API_KEY;
  if (!key) return "了解なのだ。";
  try{
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method:"POST",
      headers:{ "Authorization":`Bearer ${key}`, "Content-Type":"application/json" },
      body: JSON.stringify({
        model, temperature:0.7,
        messages:[
          { role:"system", content:`You are an opponent in a TCG duel. Persona: ${persona}. Reply briefly in Japanese.` },
          { role:"user", content:text }
        ]
      })
    });
    const j = await r.json();
    return j?.choices?.[0]?.message?.content || "……。";
  }catch{
    return "……。";
  }
}
