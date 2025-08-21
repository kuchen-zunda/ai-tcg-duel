import React, { useEffect, useRef, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously, onAuthStateChanged, User } from 'firebase/auth'
import { getFirestore, doc, onSnapshot } from 'firebase/firestore'
import { httpsCallable, getFunctions } from 'firebase/functions'
import cards from '../data/min_tcg_set' // ↓ 2-2 で追加するクライアント用定義（表示専用）

const firebaseConfig = {
  apiKey: "AIzaSyBFb_PhssH28TTsvFjJ5OKE90EdKRqhxJM",
  authDomain: "ai-tcg-duel.firebaseapp.com",
  projectId: "ai-tcg-duel",
  storageBucket: "ai-tcg-duel.firebasestorage.app",
  messagingSenderId: "1021020492185",
  appId: "1:1021020492185:web:fc6d9912bdf0de7f92c308",
  measurementId: "G-V34KKNBFMC"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app, 'asia-northeast1')

export default function App(){
  const [user, setUser] = useState<User|null>(null)
  const [gid, setGid]   = useState('')
  const [pub, setPub]   = useState<any>(null)
  const [priv, setPriv] = useState<any>(null)
  const [msgs, setMsgs] = useState<{from:'me'|'sys', text:string}[]>([])

  useEffect(()=>{ signInAnonymously(auth); return onAuthStateChanged(auth, u=> setUser(u)) }, [])
  useEffect(()=>{
    if (!gid) return
    const unsub1 = onSnapshot(doc(db, 'games', gid, 'public', 'state'), s => setPub(s.data()))
    let unsub2 = ()=>{}
    if (user) unsub2 = onSnapshot(doc(db, 'games', gid, 'private', user.uid), s => setPriv(s.data()))
    return ()=>{ unsub1(); unsub2(); }
  }, [gid, user])

  const start = async ()=>{
    const startGameFn = httpsCallable(functions, 'startGameFn')
    const res:any = await startGameFn({})
    setGid(res.data.gameId)
    setMsgs(m=>[...m, {from:'sys', text:`ゲーム開始（ID: ${res.data.gameId}）` }])
  }
  const act = async (intent:any)=>{
    if (!gid) return
    const applyIntentFn = httpsCallable(functions, 'applyIntentFn')
    await applyIntentFn({ gameId: gid, actor: 'P1', intent })
  }
  const sendLine = async (line:string)=>{
    setMsgs(m=>[...m, {from:'me', text:line}])
    try {
      const chatCmd = httpsCallable(functions, 'chatCommandFn')
      const r:any = await chatCmd({ gameId: gid, text: line })
      if (!r.data?.ok) {
        setMsgs(m=>[...m, {from:'sys', text: r.data?.ask || 'うまく解釈できなかったのだ…'}])
        return
      }
      setMsgs(m=>[...m, {from:'sys', text: `解釈: ${r.data.explain || JSON.stringify(r.data.intent)}（実行）`}])
      // Firestore購読で盤面が更新されるのを待つだけ
    } catch (e:any) {
      setMsgs(m=>[...m, {from:'sys', text: 'サーバエラー：'+(e.message||String(e))}])
    }
  }
  return (
    <div style={{fontFamily:'system-ui', padding:16, display:'grid', gap:12}}>
      <h1>Dual Raid TCG (Chat-Only)</h1>
      {!gid && <button onClick={start}>Start New Game (vs AI)</button>}
      {gid && <div style={{opacity:.7}}>Game: {gid}</div>}
      <div style={{display:'grid', gridTemplateColumns:'1.2fr .8fr', gap:16}}>
        <Board pub={pub} priv={priv} />
        <ChatPanel pub={pub} priv={priv} onSend={sendLine} messages={msgs}/>
      </div>
    </div>
  )
}

function Board({ pub, priv }:{ pub:any, priv:any }){
  if (!pub) return <div>待機中…</div>
  const me = pub.p1, opp = pub.p2
  const advDefs:any = cards.cards.adventurers
  const bossDefs:any = cards.cards.bosses

  // helper
  const actionsOf = (name:string)=> advDefs.find((x:any)=>x.name===name)?.actions || []
  const bossDice  = (name:string)=> bossDefs.find((b:any)=>b.name===name)?.dice_table || {}

  return (
    <div style={{display:'grid', gap:12}}>
      <section style={{display:'grid', gap:6}}>
        <h2 style={{margin:0}}>あなた</h2>
        <div>Boss: <b>{me?.boss.name}</b> HP {me?.boss.hp}/{me?.boss.maxHp}</div>
        <div style={{fontSize:12, opacity:.8}}>
          <div>≪ボス行動表≫</div>
          <ul>
            {Object.entries(bossDice(me?.boss.name)||{}).map(([eye, row]:any)=>(
              <li key={eye}>出目{eye}: {row.action} {row.value ?? ""}</li>
            ))}
          </ul>
        </div>

        <div style={{display:'grid', gap:8}}>
          {me?.adv?.map((a:any)=>(
            <div key={a.id} style={{border:'1px solid #ddd', borderRadius:10, padding:8, display:'grid', gap:6}}>
              <div><b>{a.name}</b> HP {a.hp}/{a.maxHp}  AP {a.ap}/{a.maxAp}  装備: {(a.equipment||[]).join(" / ")||"-"}</div>
              <div style={{fontSize:12, opacity:.9}}>
                行動：
                <ul>
                  {actionsOf(a.name).map((ac:any)=>(
                    <li key={ac.name}>{ac.name} {ac.cost_ap?`(AP${ac.cost_ap})`:""} {ac.damage?`/ DMG${ac.damage}`:""} {ac.heal?`/ HEAL${ac.heal}`:""}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 style={{margin:'12px 0 8px'}}>手札（{priv?.hand?.length||0}枚 / 山札{priv?.deckCount??0}）</h3>
          <div style={{fontSize:12, opacity:.9}}>{(priv?.hand||[]).join(" / ")||"(なし)"}</div>
        </div>
      </section>

      <section style={{display:'grid', gap:6}}>
        <h2 style={{margin:0}}>相手</h2>
        <div>Boss: <b>{opp?.boss.name}</b> HP {opp?.boss.hp}/{opp?.boss.maxHp}</div>
        <div style={{fontSize:12, opacity:.8}}>
          相手手札: {opp?.handCount??0} 枚 / 相手山札: {opp?.deckCount??0} 枚
        </div>
        <div style={{display:'grid', gap:8}}>
          {opp?.adv?.map((a:any)=>(
            <div key={a.id} style={{border:'1px dashed #ddd', borderRadius:10, padding:8, opacity:a.hp>0?1:0.5}}>
              <b>{a.name}</b> HP {a.hp}/{a.maxHp}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ChatPanel({ onSend, messages, pub, priv }:{
  onSend:(t:string)=>void,
  messages:{from:'me'|'sys', text:string}[],
  pub:any, priv:any
}){
  const [line,setLine] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  const help = [
    "例: 「リオで攻撃」/「ルゥナでヒール→リオ」/「装備 勇気のお守り→リオ」",
    "例: 「サポート 絆の記録 冒険者 リオ」/「フィールド 古戦場 ボス」/「イベント 血の契約」",
    "最後は「ターン終了」でボスのダイス→AI行動が進むよ"
  ]

  return (
    <div style={{border:'1px solid #ddd', borderRadius:12, padding:10, display:'grid', gridTemplateRows:'auto 1fr auto', height:560}}>
      <div style={{fontSize:12, opacity:.8}}>
        {help.map((h,i)=>(<div key={i}>{h}</div>))}
      </div>
      <div style={{overflowY:'auto', display:'grid', gap:6, padding:4}}>
        {messages.map((m,i)=>(
          <div key={i} style={{justifySelf: m.from==='me'?'end':'start', background:m.from==='me'?'#e8f7ff':'#f6f6f6', borderRadius:8, padding:'6px 8px'}}>{m.text}</div>
        ))}
        {/* 行動ログ（サーバ生成） */}
        <div style={{borderTop:'1px dashed #ddd', marginTop:8, paddingTop:8}}>
          <div style={{fontWeight:600, marginBottom:6}}>ログ</div>
          <ul style={{fontSize:12, lineHeight:1.5}}>
            {(pub?.log||[]).slice(-30).map((e:any,idx:number)=>{
              if (e.t==="act") return <li key={idx}>[{e.actor}] {e.unit} が「{e.action}」</li>
              if (e.t==="support") return <li key={idx}>[{e.actor}] サポート「{e.card}」({e.mode}) {e.target?`→ ${e.target}`:""}</li>
              if (e.t==="equip") return <li key={idx}>[{e.actor}] {e.unit} に装備「{e.card}」</li>
              if (e.t==="field") return <li key={idx}>[{e.actor}] フィールド「{e.card}」({e.side})</li>
              if (e.t==="event") return <li key={idx}>[{e.actor}] イベント「{e.card}」</li>
              if (e.t==="boss_roll") return <li key={idx}>[BOSS] {e.boss} ダイス{e.die} → {e.action} {e.val||""} {e.targets?.length?`(${e.targets.join(",")})`:""}</li>
              return <li key={idx}>{JSON.stringify(e)}</li>
            })}
          </ul>
        </div>
      </div>
      <form onSubmit={e=>{ e.preventDefault(); if(!line.trim()) return; onSend(line.trim()); setLine(''); ref.current?.focus(); }} style={{display:'flex', gap:8, marginTop:8}}>
        <input ref={ref} value={line} onChange={e=>setLine(e.target.value)} placeholder="ここに自然文で指示（例: リオで攻撃 / 装備 勇気のお守り→リオ / ターン終了）" style={{flex:1, padding:'8px 10px', borderRadius:8, border:'1px solid #ccc'}}/>
        <button>送信</button>
      </form>
    </div>
  )
}
