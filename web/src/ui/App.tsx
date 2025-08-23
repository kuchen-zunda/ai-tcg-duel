import React, { useEffect, useMemo, useState } from "react";
import { db, functions } from "../firebase";
import { onSnapshot, doc, collection, query, orderBy } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import "./app.css";

type GS = any;

/* 画像ユーティリティ */
const slug = (s:string)=> s.toLowerCase().replace(/\s+/g,"-");
function CardFace({name,onClick}:{name:string;onClick?:()=>void}){
  const [err,setErr]=useState(false);
  const src = `/cards/${slug(name)}.jpg`;
  if (!err) return <img className="card img" src={src} onError={()=>setErr(true)} onClick={onClick} />;
  return <div className="card face" onClick={onClick}>{name}</div>;
}
function CardBack(){ return <div className="card back" />; }

/* 手札：重ね表示＋枚数バッジ */
function OverlapHand({
  cards, count, face=false, onPick,
}:{
  cards?: string[]; count: number; face?: boolean; onPick?: (name:string)=>void;
}){
  const shown = face ? (cards||[]).slice(0, Math.min(count,7)) : Array.from({length: Math.min(count,7)}, ()=>"");
  return (
    <div className="hand-stack">
      {shown.map((n,i)=>(
        <div key={i} className="hand-item" style={{ zIndex: 10+i, transform:`translateX(${i*-12}px)` }}>
          {face ? (n ? <CardFace name={n} onClick={()=>onPick && onPick(n)}/> : <div className="card face empty">空</div>)
                : <CardBack/>}
        </div>
      ))}
      <div className="badge">{count}</div>
    </div>
  );
}

/* ロビー：対戦相手選択 */
type Opponent = { id:string; name:string; persona:string; boss:string };
const OPP:Opponent[] = [
  { id:"rival",  name:"謎の宿敵",       persona:"皮肉屋で冷徹。短文。", boss:"魔王マルヴァス" },
  { id:"olivia", name:"剣士オリヴィア", persona:"勝気で挑発的。短文。", boss:"魔王マルヴァス" },
];
function Lobby({onStart}:{onStart:(opp:Opponent)=>void}){
  const [sel,setSel]=useState(OPP[0].id);
  return (
    <div className="lobby">
      <h1>AI 対戦 TCG</h1>
      <div className="section-title">対戦相手を選ぶ</div>
      <div className="opps">
        {OPP.map(o=>(
          <div key={o.id} className={`opp ${sel===o.id?"sel":""}`} onClick={()=>setSel(o.id)}>
            <div className="opp-name">{o.name}</div>
            <div className="opp-sub">ボス：{o.boss}</div>
            <div className="opp-sub dim">ペルソナ：{o.persona}</div>
          </div>
        ))}
      </div>
      <div className="center">
        <button className="primary" onClick={()=>onStart(OPP.find(x=>x.id===sel)!)}>対戦開始</button>
      </div>
    </div>
  );
}

/* 盤面（図面に合わせたグリッド） */
function Board({state,onPick}:{state:GS; onPick:(x:any)=>void}){
  const B = state?.p2||{};  // 相手
  const A = state?.p1||{};  // 自分
  const bHandCount = (B.handCount ?? (B.hand?.length||0));
  const aHandCount = (A.hand?.length||0);

  return (
    <div className="arena">
      {/* 上段：B 立ち絵＋手札（まとめて1領域） */}
      <div className="b-portrait">B キャラ立ち絵</div>
      <div className="b-hands"><OverlapHand count={bHandCount} face={false}/></div>

      {/* B 山札／捨て札 */}
      <div className="b-deck">
        <div className="pile-title">B 山札</div><CardBack/>
      </div>
      <div className="b-discard">
        <div className="pile-title">B 捨て札</div><div className="stack">{B.discard?.length||0}枚</div>
      </div>

      {/* B 冒険者4 */}
      {[0,1,2,3].map(i=>(
        <div key={i} className={`b-adv a${i+1}`} onClick={()=>onPick({kind:"adv",side:"B",name:B?.adv?.[i]?.name})}>
          {B?.adv?.[i] && <>
            <div className="adv-name">{B.adv[i].name}</div>
            <div className="adv-stat">HP {B.adv[i].hp}/{B.adv[i].maxHp}・AP {B.adv[i].ap}/{B.adv[i].maxAp}</div>
            <div className="equip">装備x{(B.adv[i].equipment||[]).length}</div>
          </>}
        </div>
      ))}

      {/* B ボス＆フィールド */}
      <div className="b-boss" onClick={()=>onPick({kind:"boss",side:"B",name:B?.boss?.name})}>
        <div className="boss-name">{B?.boss?.name||"ボス"}</div>
        <div className="boss-stat">HP {B?.boss?.hp}/{B?.boss?.maxHp}</div>
      </div>
      <div className="b-field-boss">
        <div className="pile-title">B ボス側フィールド</div>
        {B.fieldBoss ? <CardFace name={B.fieldBoss}/> : <div className="empty">なし</div>}
      </div>
      <div className="b-field-adv">
        <div className="pile-title">B 冒険者側フィールド</div>
        {B.fieldAdv ? <CardFace name={B.fieldAdv}/> : <div className="empty">なし</div>}
      </div>

      {/* A 冒険者側フィールド */}
      <div className="a-field-adv">
        <div className="pile-title">A 冒険者側フィールド</div>
        {A.fieldAdv ? <CardFace name={A.fieldAdv}/> : <div className="empty">なし</div>}
      </div>

      {/* A 冒険者4 */}
      {[0,1,2,3].map(i=>(
        <div key={i} className={`a-adv a${i+1}`} onClick={()=>onPick({kind:"adv",side:"A",name:A?.adv?.[i]?.name})}>
          {A?.adv?.[i] && <>
            <div className="adv-name">{A.adv[i].name}</div>
            <div className="adv-stat">HP {A.adv[i].hp}/{A.adv[i].maxHp}・AP {A.adv[i].ap}/{A.adv[i].maxAp}</div>
            <div className="equip">装備x{(A.adv[i].equipment||[]).length}</div>
          </>}
        </div>
      ))}

      {/* A ボス＆場 */}
      <div className="a-boss" onClick={()=>onPick({kind:"boss",side:"A",name:A?.boss?.name})}>
        <div className="boss-name">{A?.boss?.name||"ボス"}</div>
        <div className="boss-stat">HP {A?.boss?.hp}/{A?.boss?.maxHp}</div>
      </div>
      <div className="a-field-boss">
        <div className="pile-title">A ボス側フィールド</div>
        {A.fieldBoss ? <CardFace name={A.fieldBoss}/> : <div className="empty">なし</div>}
      </div>
      <div className="a-discard">
        <div className="pile-title">A 捨て札</div><div className="stack">{A.discard?.length||0}枚</div>
      </div>
      <div className="a-deck">
        <div className="pile-title">A 山札</div><CardBack/>
      </div>

      {/* A 手札（表、まとめて1領域） */}
      <div className="a-hand">
        <OverlapHand cards={A.hand||[]} count={aHandCount} face={true} onPick={(name)=>onPick({kind:"card",side:"A",name})}/>
      </div>
    </div>
  );
}

/* 右ペイン */
function RightPane({timeline, detail, onReset}:{timeline:any[]; detail:any; onReset:()=>void}){
  return (
    <div className="right">
      <div className="panel">
        <div className="panel-title">カード詳細</div>
        {!detail ? <div className="muted">カードやユニットをクリックすると詳細が出るよ。</div> :
          <div>
            <div className="big">{detail.name}</div>
            <div className="small muted">{detail.kind} / {detail.side||"-"}</div>
          </div>}
      </div>
      <div className="panel grow">
        <div className="panel-head">
          <div className="panel-title">ログ＆チャット</div>
          <button className="tiny" onClick={onReset}>新規対戦</button>
        </div>
        <div className="timeline">
          {timeline.map((m:any)=>(
            <div key={m.id||m.at||Math.random()} className="line">
              {m.role==="log"
                ? m.t==="boss_roll" ? <div>🎲 {m.actor}ボス({m.boss})：出目{m.die} → {m.action} {m.val??""}</div>
                : m.t==="action"   ? <div>▶ {m.actor}：{m.unit}『{m.name}』</div>
                : m.t==="support"  ? <div>🛎 {m.actor}：サポート『{m.card}』（{m.mode}）</div>
                : m.t==="field"    ? <div>🗺 フィールド『{m.card}』({m.side})</div>
                : m.t==="event"    ? <div>✨ イベント『{m.card}』</div>
                : m.t==="nlp"      ? <div className="muted small">（解析）{m.text}</div>
                : <div>{JSON.stringify(m)}</div>
              : <div><b>{m.role==="user"?"あなた":m.role==="opponent"?"相手":"システム"}：</b> {m.text}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App(){
  const [gameId, setGameId] = useState<string | null>(localStorage.getItem("gid"));
  const [state, setState] = useState<GS | null>(null);
  const [chat, setChat] = useState<any[]>([]);
  const [detail, setDetail] = useState<any>(null);
  const [input, setInput] = useState("");

  useEffect(()=>{ if (gameId) localStorage.setItem("gid", gameId); },[gameId]);

  useEffect(()=>{
    if (!gameId) return;
    const u1 = onSnapshot(doc(db, `games/${gameId}/public/state`), s=> setState(s.data() as any));
    const u2 = onSnapshot(query(collection(db, `games/${gameId}/chat`), orderBy("at","asc")), s=>{
      setChat(s.docs.map(d=>({id:d.id, ...d.data()})));
    });
    return ()=>{ u1(); u2(); };
  },[gameId]);

  const timeline = useMemo(()=>{
    const logs = (state?.log||[]).map((x:any)=>({ ...x, role:"log", at: x.at||0 }));
    return [...logs, ...chat].sort((a,b)=>(a.at||0)-(b.at||0));
  },[state,chat]);

  const start = async (opp:Opponent)=>{
    const fn = httpsCallable(functions,"startGameFn");
    const r:any = await fn({ aiPersona: opp.persona, p2BossName: opp.boss });
    setGameId(r.data.gameId);
  };
  const reset = ()=>{
    localStorage.removeItem("gid");
    setGameId(null);
    setState(null);
    setChat([]);
    setInput("");
  };
  const send = async ()=>{
    if (!input.trim() || !gameId) return;
    const fn = httpsCallable(functions,"chatRouterFn");
    await fn({ gameId, text: input.trim() });
    setInput("");
  };

  if (!gameId) return <Lobby onStart={start}/>;

  return (
    <div className="page">
      <div className="left">
        <Board state={state} onPick={setDetail}/>
        <div className="input-row">
          <input className="input" placeholder="自然文でOK（例：リオで攻撃／勇気のオーラをリオに／ターン終了）"
                 value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{ if (e.key==="Enter") send(); }}/>
          <button className="primary" onClick={send}>送信</button>
        </div>
      </div>
      <RightPane timeline={timeline} detail={detail} onReset={reset}/>
    </div>
  );
}
