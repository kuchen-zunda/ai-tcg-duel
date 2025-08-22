// functions/src/core/arbiter.ts
import dataset from "../rulepacks/dualraid/dataset.js";
import type { Action, GameState } from "../rulepacks/dualraid/engine/types.js";

type ArbiterIn = {
  rulepack: "dualraid";
  persona: string;           // 相手AIのペルソナ（会話用）
  stateSummary: string;      // 盤面サマリ（未使用でもOK）
  manifest: any;             // UI向けマニフェスト（未使用でもOK）
  rulebookExcerpt: string;   // ルール要約（未使用でもOK）
  userUtterance: string;     // ユーザ自然文
};

type ArbiterOut =
  | { kind: "game"; actions: Action[]; narration?: string }
  | { kind: "chat"; reply: string }
  | { kind: "both"; actions: Action[]; reply: string; narration?: string };

// ---- ユーティリティ --------------------------------------------------------

const advNames = (dataset as any).cards.adventurers.map((a:any)=>a.name);
const supportNames = (dataset as any).cards.supports.map((s:any)=>s.name);
const equipNames = (dataset as any).cards.equipment.map((e:any)=>e.name);

function pickAttackAction(unitName:string){
  const card:any = (dataset as any).cards.adventurers.find((a:any)=>a.name===unitName);
  if (!card) return null;
  // 優先：type=attack / 次点：名前に「攻撃」「斬」「打」「突」が含まれる
  const byType = (card.actions||[]).find((x:any)=>x.type==="attack" || x.type==="attack_boss_only");
  if (byType) return byType.name;
  const byName = (card.actions||[]).find((x:any)=>/(攻撃|斬|打|突)/.test(x.name));
  return byName?.name || (card.actions?.[0]?.name ?? null);
}

function pickHealAction(unitName:string){
  const card:any = (dataset as any).cards.adventurers.find((a:any)=>a.name===unitName);
  if (!card) return null;
  const byType = (card.actions||[]).find((x:any)=>x.type==="heal");
  return byType?.name ?? null;
}

function normalize(s:string){
  return s.replace(/\s+/g,"").toLowerCase();
}

function includesAny(s:string, pats:RegExp[]){
  return pats.some(re=>re.test(s));
}

// ---- ルールベースNLU -------------------------------------------------------

export async function arbitrate(input: ArbiterIn): Promise<ArbiterOut> {
  const text = input.userUtterance.trim();

  // 1) ターン終了（ゆらぎ大量）
  const endTurnRE = /(ターン(終|終了|エンド)|エンド|endturn|ターン回す|ターン返す|ターン返しました|手番終わり)/i;
  if (endTurnRE.test(text)) {
    const actions: Action[] = [{ type: "end_turn" }];
    return { kind: "game", actions, narration: "あなたはターンを終了した。" };
  }

  // 2) 冒険者名＋攻撃／回復
  //   例) 「リオで攻撃」「セイで強攻撃」「ルゥナで回復 トウマ」
  const advNameRE = new RegExp("(" + advNames.map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|") + ")");
  const attackRE = new RegExp(advNameRE.source + "(?:で)?(攻撃|アタック|斬撃|殴る|突く|打つ|強攻撃)", "i");
  const healRE   = new RegExp(advNameRE.source + "(?:で)?(回復|ヒール)(?:([\\wぁ-んァ-ヶ一-龥]+))?", "i");

  const mAtk = text.match(attackRE);
  if (mAtk) {
    const unit = mAtk[1];
    const actName = pickAttackAction(unit);
    if (actName) {
      const actions: Action[] = [{ type: "use_action", unit, action: actName }];
      return { kind: "game", actions, narration: `${unit}が『${actName}』！` };
    }
  }

  const mHeal = text.match(healRE);
  if (mHeal) {
    const unit = mHeal[1];
    const targetMaybe = mHeal[2];
    const actName = pickHealAction(unit);
    const target = advNames.find(n=>targetMaybe && normalize(n).includes(normalize(targetMaybe))) || undefined;
    if (actName) {
      const actions: Action[] = [{ type: "use_action", unit, action: actName, target }];
      return { kind: "game", actions, narration: `${unit}が味方を回復。` };
    }
  }

  // 3) サポートカードを使う
  //   例) 「勇気のオーラをリオに」「魔力の加護をボスに」「古戦場をボス側に」
  const supportOrFieldRE = new RegExp("(" + [...supportNames, ...(dataset as any).cards.fields.map((f:any)=>f.name)]
    .map((n:string)=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|") + ")");
  const toWhoRE = new RegExp(supportOrFieldRE.source + "(?:を|を使って|を使う|を発動|貼る|設置)?(?:(?:を)?(" + advNameRE.source + ")に|ボスに|冒険者側に|ボス側に)?", "i");

  const mSup = text.match(toWhoRE);
  if (mSup) {
    const card = mSup[1];
    // フィールド？
    const isField = (dataset as any).cards.fields.some((f:any)=>f.name===card);
    if (isField) {
      const side = /ボス側/.test(text) ? "boss" : "adventurer";
      const actions: Action[] = [{ type:"play_field", card, side: side as any }];
      return { kind:"game", actions, narration:`フィールド『${card}』を${side==="boss"?"ボス":"冒険者"}側に配置。` };
    }
    // サポート（冒険者/ボスのどちらモードか判定）
    const mode = /ボス/.test(text) ? "boss" : "adventurer";
    const target = advNames.find(n=>text.includes(n));
    const actions: Action[] = [{ type:"play_support", card, mode: mode as any, target }];
    return { kind:"game", actions, narration:`サポート『${card}』を${mode==="boss"?"ボス":"冒険者"}用で使用。` };
  }

  // 4) 装備
  const equipRE = new RegExp("(" + equipNames.map((n:string)=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|") + ").*?(" + advNameRE.source + ")", "i");
  const mEq = text.match(equipRE);
  if (mEq) {
    const card = mEq[1]; const unit = mEq[2];
    const actions: Action[] = [{ type:"equip", card, unit }];
    return { kind:"game", actions, narration:`${unit}に装備『${card}』。` };
  }

  // 5) それ以外は会話扱い
  //    ここではペルソナに噛み合う短文返答テンプレを返す（LLMがあればそちらを利用）。
  const p = input.persona || "";
  let reply = "なるほど。";
  if (/勝気|挑発|強気/.test(p)) reply = "ふん、良い度胸だね。";
  else if (/冷徹|皮肉|辛辣/.test(p)) reply = "皮肉は好物でね。";
  else if (/礼儀|丁寧|穏やか/.test(p)) reply = "承知した。続けよう。";
  return { kind: "chat", reply };
}
