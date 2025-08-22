import React, { useEffect, useMemo, useState } from "react";
import { db, functions } from "../firebase";
import { onSnapshot, doc, collection, query, orderBy } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import "./app.css";

type GS = any;

function slug(name:string){ return name.toLowerCase().replace(/\s+/g,"-"); }
const CardBack = ({label}:{label:string}) => <div className="card back">{label}</div>;
const FaceCard = ({name,onClick}:{name:string; onClick?:()=>void})=>{
  const [err,setErr] = useState(false);
  const src = `/cards/${slug(name)}.jpg`;
  return !err ? (
    <img className="card img" src={src} onError={()=>setErr(true)} onClick={onClick}/>
  ) : (
    <div className="card" onClick={onClick}>{name}</div>
  );
};

function Pile({title, children}:{title:string; children:React.ReactNode}){
  return (
    <div className="pile">
      <div className="pile-title">{title}</div>
      <div className="pile-body">{children}</div>
    </div>
  );
}

function Board({state, onPick}:{state:GS; onPick:(info:any)=>void}){
  const opp = state?.p2||{};
  const me  = state?.p1||{};
  return (
    <div className="board-grid">
      {/* ---- 上段（B: 相手） ---- */}
      <div className="char-stand">B キャラ立ち絵</div>
      <Pile title="B 手札">
        {(opp.handCount? Array.from({length:opp.handCount}).map((_,i)=><CardBack key={i} label={`裏`}/>):[])}
      </Pile>
      <Pile title="B 山札"><CardBack label="山札"/></Pile>
      <Pile title="B 捨て札"><div className="stack-count">{opp.discard?.length||0}枚</div></Pile>
      <Pile title="B 冒険者フィールド">
        <div className="adv-row">
          {(opp.adv||[]).map((a:any)=>(
            <div key={a.id} className="adv-cell" onClick={()=>onPick({kind:"adv", side:"B", name:a.name})}>
              <div className="adv-name">{a.name}</div>
              <div className="adv-stat">HP {a.hp}/{a.maxHp}・AP {a.ap}/{a.maxAp}</div>
              {/* 装備束（枚数だけ） */}
              <div className="equip-stack">{(a.equipment||[]).length?`装備x${a.equipment.length}`:""}</div>
            </div>
          ))}
        </div>
      </Pile>
      <Pile title="B ボスカード">
        <div className="boss-box" onClick={()=>onPick({kind:"boss", side:"B", name:opp?.boss?.name})}>
          {opp?.boss?.name} / HP {opp?.boss?.hp}/{opp?.boss?.maxHp}
        </div>
      </Pile>
      <Pile title="B ボス側フィールド">{opp.fieldBoss? <FaceCard name={opp.fieldBoss} onClick={()=>onPick({kind:"field", side:"B-boss", name:opp.fieldBoss})}/> : <div className="empty">なし</div>}</Pile>
      <Pile title="B 冒険者側フィールド">{opp.fieldAdv? <FaceCard name={opp.fieldAdv} onClick={()=>onPick({kind:"field", side:"B-adv", name:opp.fieldAdv})}/> : <div className="empty">なし</div>}</Pile>

      {/* ---- 下段（A: 自分） ---- */}
      <Pile title="A 冒険者側フィールド">{me.fieldAdv? <FaceCard name={me.fieldAdv} onClick={()=>onPick({kind:"field", side:"A-adv", name:me.fieldAdv})}/> : <div className="empty">なし</div>}</Pile>
      <Pile title="A ボスカード">
        <div className="boss-box" onClick={()=>onPick({kind:"boss", side:"A", name:me?.boss?.name})}>
          {me?.boss?.name} / HP {me?.boss?.hp}/{me?.boss?.maxHp}
        </div>
      </Pile>
      <Pile title="A 冒険者フィールド">
        <div className="adv-row">
          {(me.adv||[]).map((a:any)=>(
            <div key={a.id} className="adv-cell" onClick={()=>onPick({kind:"adv", side:"A", name:a.name})}>
              <div className="adv-name">{a.name}</div>
              <div className="adv-stat">HP {a.hp}/{a.maxHp}・AP {a.ap}/{a.maxAp}</div>
              <div className="equip-stack">{(a.equipment||[]).length?`装備x${a.equipment.length}`:""}</div>
            </div>
          ))}
        </div>
      </Pile>
      <Pile title="A ボス側フィールド">{me.fieldBoss? <FaceCard name={me.fieldBoss} onClick={()=>onPick({kind:"field", side:"A-boss", name:me.fieldBoss})}/> : <div className="empty">なし</div>}</Pile>
      <Pile title="A 捨て札"><div className="stack-count">{me.discard?.length||0}枚</div></Pile>
      <Pile title="A 山札"><CardBack label="山札"/></Pile>
      <Pile title="A 手札">
        <div className="hand-row">
          {(me.hand||[]).map((nm:string)=><FaceCard key={nm} name={nm} onClick={()=>onPick({kind:"card", side:"A", name:nm})}/>)}
        </div>
      </Pile>
    </div>
  );
}

function RightPane({timeline, detail}:{timeline:any[]; detail:any}){
  return (
    <div className="right-pane">
      <div className="panel">
        <div className="panel-title">カード詳細</div>
        {!detail ? <div className="muted">カードやユニットをクリックすると詳細が出るのだ。</div> :
          <div>
            <div className="big">{detail.name}</div>
            <div className="small muted">{detail.kind} / {detail.side||"-"}</div>
          </div>}
      </div>
      <div className="panel grow">
        <div className="panel-title">ログ＆チャット</div>
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
  );
}

export default function App(){
  const [gameId, setGameId] = useState<string | null>(localStorage.getItem("gid"));
  const [state, setState] = useState<GS | null>(null);
  const [chat, setChat] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [detail, setDetail] = useState<any>(null);

  useEffect(()=>{ if (gameId) localStorage.setItem("gid", gameId); },[gameId]);

  useEffect(()=>{
    if (!gameId) return;
    const u1 = onSnapshot(doc(db, `games/${gameId}/public/state`), s=> setState(s.data() as any));
    const u2 = onSnapshot(query(collection(db, `games/${gameId}/chat`), orderBy("at","asc")), s=>{
      setChat(s.docs.map(d=>({id:d.id, ...d.data()})));
    });
    return ()=>{ u1(); u2(); };
  },[gameId]);

  const start = async ()=>{
    const fn = httpsCallable(functions, "startGameFn");
    const r:any = await fn({ aiPersona: "皮肉屋で冷徹。短文。", p2BossName: "魔王マルヴァス" });
    setGameId(r.data.gameId);
  };

  const send = async ()=>{
    if (!gameId || !input.trim()) return;
    const fn = httpsCallable(functions, "chatRouterFn");
    await fn({ gameId, text: input.trim() });
    setInput("");
  };

  const timeline = useMemo(()=>{
    const logs = (state?.log||[]).map((x:any)=>({ ...x, role:"log", at: x.at||0 }));
    return [...logs, ...chat].sort((a,b)=>(a.at||0)-(b.at||0));
  },[state,chat]);

  if (!gameId) {
    // ロビー簡易版（対戦相手は固定の例。将来ここをキャラ一覧に）
    return (
      <div className="lobby">
        <h1>AI対戦TCG</h1>
        <div className="section">
          <div className="section-title">対戦相手</div>
          <div className="cards">
            <div className="card sel">
              <div className="card-title">謎の宿敵</div>
              <div className="card-body">
                <div className="small">ボス：魔王マルヴァス</div>
                <div className="small text-dim">ペルソナ：皮肉屋で冷徹。短文。</div>
              </div>
            </div>
          </div>
        </div>
        <div className="center"><button className="primary" onClick={start}>対戦開始</button></div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="left">
        <Board state={state} onPick={setDetail}/>
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
      <RightPane timeline={timeline} detail={detail}/>
    </div>
  );
}
