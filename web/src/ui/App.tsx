import React, { useEffect, useMemo, useState } from "react";
import { db, functions } from "../firebase";
import { onSnapshot, doc, collection, query, orderBy } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import "./app.css";

type GS = any;

function slug(name:string){ return name.toLowerCase().replace(/\s+/g,"-"); }

function Thumb({name,onClick}:{name:string; onClick:()=>void}){
  const [err,setErr] = useState(false);
  const src = `/cards/${slug(name)}.jpg`;
  return (
    <div className="thumb" onClick={onClick} title={name}>
      {!err ? <img src={src} onError={()=>setErr(true)} /> : <div className="thumb-fallback">{name}</div>}
    </div>
  );
}

/** =====================
 *  ロビー（対戦相手だけ選ぶ）
 *  ===================== */
type Opponent = { id:string; name:string; persona:string; boss:string; deck?:string };

const RULEPACKS = [{ id: "dualraid", name: "Dual Raid（オリジナル）" }];

// 将来ここに「遊戯王」「ポケカ」用の対戦相手一覧を追加していけばOKなのだ
const OPPONENTS_DUALRAID: Opponent[] = [
  { id:"olivia", name:"剣士オリヴィア", persona:"勝気だが礼儀正しい剣士。短文で話す。", boss:"魔王マルヴァス", deck:"標準" },
  { id:"rival",  name:"謎の宿敵",       persona:"冷徹・皮肉多め。",                boss:"魔王マルヴァス", deck:"標準" },
];

function Lobby({onStart}:{onStart:(opt:{
  rulepack:string; opp:Opponent;
})=>void}){
  const [rp, setRp] = useState("dualraid");
  const [opp, setOpp] = useState<string>(OPPONENTS_DUALRAID[0].id);

  const opps = OPPONENTS_DUALRAID; // ルールパックに応じて入れ替える想定（今は1種）

  return (
    <div className="lobby">
      <h1>AI対戦TCG</h1>

      <div className="section">
        <div className="section-title">TCGを選ぶ</div>
        <div className="row">
          {RULEPACKS.map(x=>(
            <label key={x.id} className={`pill ${rp===x.id?"active":""}`}>
              <input type="radio" name="rp" checked={rp===x.id} onChange={()=>setRp(x.id)} />
              {x.name}
            </label>
          ))}
        </div>
        <div className="small text-dim">※ TCGを切り替えると、使用するデッキ・対戦相手のボスも切り替わる想定なのだ</div>
      </div>

      <div className="section">
        <div className="section-title">対戦相手を選ぶ</div>
        <div className="cards">
          {opps.map(c=>(
            <div key={c.id} className={`card ${opp===c.id?"sel":""}`} onClick={()=>setOpp(c.id)}>
              <div className="card-title">{c.name}</div>
              <div className="card-body">
                <div className="small">ボス：{c.boss}</div>
                {c.deck && <div className="small">デッキ：{c.deck}</div>}
                <div className="small text-dim">{c.persona}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="center">
        <button className="primary" onClick={()=>{
          const ai = opps.find(x=>x.id===opp)!;
          onStart({ rulepack: rp, opp: ai });
        }}>対戦開始</button>
      </div>
    </div>
  );
}

/** =====================
 *  対戦ルーム
 *  ===================== */
function Duel({gameId, onLeave}:{gameId:string; onLeave:()=>void}){
  const [state, setState] = useState<GS | null>(null);
  const [chat, setChat] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [detail, setDetail] = useState<{kind:"boss"|"adv"|"card"; name:string; side?:string} | null>(null);

  useEffect(()=>{
    const u1 = onSnapshot(doc(db, `games/${gameId}/public/state`), s=> setState(s.data() as any));
    const u2 = onSnapshot(query(collection(db, `games/${gameId}/chat`), orderBy("at","asc")), s=>{
      setChat(s.docs.map(d=>({id:d.id, ...d.data()})));
    });
    return ()=>{ u1(); u2(); }
  },[gameId]);

  const send = async ()=>{
    if (!input.trim()) return;
    const fn = httpsCallable(functions, "chatRouterFn");
    await fn({ gameId, text: input.trim() });
    setInput("");
  };

  const timeline = useMemo(()=>{
    const logs = (state?.log||[]).map((x:any)=>({ ...x, role:"log", at: x.at||0 }));
    return [...logs, ...chat].sort((a,b)=>(a.at||0)-(b.at||0));
  },[state,chat]);

  const myHand: string[] = state?.p1?.hand || [];

  return (
    <div className="duel">
      <div className="topbar">
        <div>Game: {gameId}</div>
        <div className="spacer" />
        <button onClick={onLeave}>ロビーへ戻る</button>
      </div>

      <div className="grid">
        {/* 盤面 */}
        <div className="board">
          {/* 相手 */}
          <div className="side">
            <div className="boss">
              相手ボス：{state?.p2?.boss?.name}　HP {state?.p2?.boss?.hp}/{state?.p2?.boss?.maxHp}
            </div>
            <div className="advs">
              {(state?.p2?.adv||[]).map((a:any)=>(
                <div key={a.id} className="adv" onClick={()=>setDetail({kind:"adv", name:a.name, side:"P2"})}>
                  <div className="adv-name">{a.name}</div>
                  <div className="adv-stat">HP {a.hp}/{a.maxHp}・AP {a.ap}/{a.maxAp}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 自分 */}
          <div className="side my">
            <div className="boss">
              自分ボス：{state?.p1?.boss?.name}　HP {state?.p1?.boss?.hp}/{state?.p1?.boss?.maxHp}
            </div>
            <div className="advs">
              {(state?.p1?.adv||[]).map((a:any)=>(
                <div key={a.id} className="adv" onClick={()=>setDetail({kind:"adv", name:a.name, side:"P1"})}>
                  <div className="adv-name">{a.name}</div>
                  <div className="adv-stat">HP {a.hp}/{a.maxHp}・AP {a.ap}/{a.maxAp}</div>
                </div>
              ))}
            </div>

            <div className="hand">
              <div className="hand-title">手札（{myHand.length}枚）</div>
              <div className="hand-row">
                {myHand.map((nm)=>(
                  <Thumb key={nm} name={nm} onClick={()=>setDetail({kind:"card", name:nm})} />
                ))}
              </div>
            </div>

            <div className="input-row">
              <input
                className="input"
                placeholder="自然文でOK（例：リオで攻撃／勇気のオーラをリオに／ターン終了）"
                value={input}
                onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>{ if (e.key==="Enter") send(); }}
              />
              <button className="primary" onClick={send}>送信</button>
            </div>
          </div>
        </div>

        {/* 右サイド：詳細 + タイムライン */}
        <div className="sidebar">
          <div className="panel">
            <div className="panel-title">詳細</div>
            {!detail && <div className="muted">カードやユニットをクリックすると詳細を表示するのだ。</div>}
            {detail && (
              <div>
                <div className="big">{detail.name}</div>
                <div className="muted">{detail.kind==="card" ? "カード" : `ユニット（${detail.side}）`}</div>
                <div className="muted small">（説明テキストは順次データ連携するのだ）</div>
              </div>
            )}
          </div>

          <div className="panel grow">
            <div className="panel-title">ログ / チャット</div>
            <div className="timeline">
              {timeline.map((m:any)=>(
                <div key={m.id||m.at||Math.random()} className="line">
                  {m.role==="log" ? (
                    m.t==="boss_roll" ? <div>🎲 {m.actor}ボス({m.boss})：出目{m.die} → {m.action} {m.val??""}</div>
                    : m.t==="action" ? <div>▶ {m.actor}：{m.unit}『{m.name}』</div>
                    : m.t==="support" ? <div>🛎 {m.actor}：サポート『{m.card}』（{m.mode}）</div>
                    : m.t==="field" ? <div>🗺 フィールド『{m.card}』({m.side})</div>
                    : m.t==="event" ? <div>✨ イベント『{m.card}』</div>
                    : m.t==="nlp" ? <div className="muted small">（解析）{m.text}</div>
                    : <div>{JSON.stringify(m)}</div>
                  ) : (
                    <div><b>{m.role==="user"?"あなた":m.role==="opponent"?"相手":"システム"}：</b> {m.text}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App(){
  const [gameId, setGameId] = useState<string | null>(localStorage.getItem("gid"));

  useEffect(()=>{ if (gameId) localStorage.setItem("gid", gameId); },[gameId]);

  const start = async ({rulepack, opp}:{rulepack:string; opp:Opponent;})=>{
    const fn = httpsCallable(functions, "startGameFn");
    const r:any = await fn({
      rulepack,
      // プレイヤー側はデフォルトを使用。相手だけキャラ指定。
      aiPersona: opp.persona,
      p2BossName: opp.boss,
    });
    setGameId(r.data.gameId);
  };

  if (!gameId) {
    return <Lobby onStart={start} />;
  }

  return <Duel gameId={gameId} onLeave={()=>{
    localStorage.removeItem("gid");
    setGameId(null);
  }} />;
}
