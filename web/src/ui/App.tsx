import React, { useEffect, useMemo, useRef, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously, onAuthStateChanged, User } from 'firebase/auth'
import { getFirestore, doc, collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { httpsCallable, getFunctions } from 'firebase/functions'
import cards from '../data/min_tcg_set'

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

type ChatMsg = { role:'user'|'opponent'|'system', text:string, at:number }

export default function App(){
  const [user, setUser] = useState<User|null>(null)
  const [authReady, setAuthReady] = useState(false)
  const [gid, setGid]   = useState('')
  const [pub, setPub]   = useState<any>(null)
  const [priv, setPriv] = useState<any>(null)
  const [chat, setChat] = useState<ChatMsg[]>([])

  // 匿名サインイン → 完了後に購読できるようフラグを立てる
  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u)
      setAuthReady(true)
    })
    signInAnonymously(auth).catch(console.error)
    return unsub
  }, [])

  // 盤面（public / private）購読
  useEffect(()=>{
    if (!gid || !authReady) return
    const unsubPub = onSnapshot(doc(db, 'games', gid, 'public', 'state'), s => setPub(s.data()))
    let unsubPriv = () => {}
    if (user) {
      unsubPriv = onSnapshot(doc(db, 'games', gid, 'private', user.uid), s => setPriv(s.data()))
    }
    return ()=>{ unsubPub(); unsubPriv(); }
  }, [gid, authReady, user])

  // チャット購読
  useEffect(()=>{
    if (!gid) return
    const q = query(collection(db, 'games', gid, 'chat'), orderBy('at', 'asc'))
    const unsub = onSnapshot(q, snap => setChat(snap.docs.map(d=> d.data() as ChatMsg)))
    return ()=> unsub()
  }, [gid])

  const start = async ()=>{
    const startGameFn = httpsCallable(functions, 'startGameFn')
    const res:any = await startGameFn({})
    setGid(res.data.gameId)
  }

  const sendLine = async (line:string)=>{
    if (!gid) return
    const chatFn = httpsCallable(functions, 'chatRouterFn')
    await chatFn({ gameId: gid, text: line })
    // 送信・返信は購読で流れてくる
  }

  return (
    <div style={{fontFamily:'system-ui', height:'100vh', display:'grid', gridTemplateRows:'auto 1fr', gap:8}}>
      <header style={{padding:'8px 12px', borderBottom:'1px solid #e5e5e5', display:'flex', alignItems:'center', gap:12}}>
        <b>Dual Raid TCG</b>
        {!gid && <button disabled={!authReady} onClick={start}>Start New Game (vs AI)</button>}
        {gid && <span style={{opacity:.7}}>Game: {gid}</span>}
      </header>

      <main style={{display:'grid', gridTemplateColumns:'1fr 360px', gap:10, padding:10}}>
        <Battlefield pub={pub} priv={priv}/>
        <RightPane pub={pub} chat={chat} onSend={sendLine}/>
      </main>
    </div>
  )
}

function RightPane({ pub, chat, onSend }:{ pub:any, chat:ChatMsg[], onSend:(t:string)=>void }){
  const [line,setLine] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  return (
    <div style={{display:'grid', gridTemplateRows:'1fr auto auto', gap:8}}>
      <LogPanel pub={pub}/>
      <div style={{borderTop:'1px dashed #ddd', paddingTop:8, fontSize:12, color:'#555'}}>
        例）「リオで攻撃」「ルゥナでヒール→リオ」「勇気のお守り→リオ」「絆の記録 使う」「フィールド 古戦場 ボス」「ターン返します」
      </div>
      <div style={{border:'1px solid #ddd', borderRadius:10, padding:8, display:'grid', gridTemplateRows:'1fr auto', height:220}}>
        <div style={{overflowY:'auto', display:'grid', gap:6}}>
          {chat.map((m,i)=>(
            <div key={i}
              style={{
                justifySelf: m.role==='user'?'end':'start',
                background: m.role==='user' ? '#e8f7ff' : m.role==='opponent' ? '#f6f6f6' : '#fff5d6',
                borderRadius:8, padding:'6px 8px', fontSize:13
              }}>
              {m.text}
            </div>
          ))}
        </div>
        <form onSubmit={e=>{ e.preventDefault(); if(!line.trim()) return; onSend(line.trim()); setLine(''); ref.current?.focus(); }} style={{display:'flex', gap:8, marginTop:8}}>
          <input ref={ref} value={line} onChange={e=>setLine(e.target.value)} placeholder="ここに自然文で指示" style={{flex:1, padding:'8px 10px', borderRadius:8, border:'1px solid #ccc'}}/>
          <button>送信</button>
        </form>
      </div>
    </div>
  )
}

function LogPanel({ pub }:{ pub:any }){
  return (
    <div style={{border:'1px solid #ddd', borderRadius:10, padding:10, overflowY:'auto'}}>
      <div style={{fontWeight:600, marginBottom:6}}>ログ</div>
      <ul style={{fontSize:12, lineHeight:1.5, margin:0, paddingLeft:18}}>
        {(pub?.log||[]).slice(-50).map((e:any,idx:number)=>{
          if (e.t==="nlp")        return <li key={idx}>[parse] {e.text} → {Array.isArray(e.parsed)?`${e.parsed.length} actions`:(e.parsed?.type||'')}</li>
          if (e.t==="act")        return <li key={idx}>[{e.actor}] {e.unit} が「{e.action}」</li>
          if (e.t==="support")    return <li key={idx}>[{e.actor}] サポート「{e.card}」({e.mode}) {e.target?`→ ${e.target}`:""}</li>
          if (e.t==="equip")      return <li key={idx}>[{e.actor}] {e.unit} に装備「{e.card}」</li>
          if (e.t==="field")      return <li key={idx}>[{e.actor}] フィールド「{e.card}」({e.side})</li>
          if (e.t==="event")      return <li key={idx}>[{e.actor}] イベント「{e.card}」</li>
          if (e.t==="boss_roll")  return <li key={idx}>[BOSS] {e.boss} ダイス{e.die} → {e.action} {e.val||""} {e.targets?.length?`(${e.targets.join(",")})`:""}</li>
          return <li key={idx}>{JSON.stringify(e)}</li>
        })}
      </ul>
    </div>
  )
}

function Battlefield({ pub, priv }:{ pub:any, priv:any }){
  if (!pub) return <div style={{opacity:.7}}>待機中…</div>
  const defs:any = cards.cards
  const me = pub.p1, opp = pub.p2

  const advDef = (name:string)=> defs.adventurers.find((x:any)=>x.name===name)
  const bossDef = (name:string)=> defs.bosses.find((x:any)=>x.name===name)

  return (
    <div style={{display:'grid', gridTemplateRows:'1fr 1fr', gap:10}}>
      {/* 奥：相手 */}
      <Row side="opponent" boss={opp?.boss} adv={opp?.adv} handCount={opp?.handCount} deckCount={opp?.deckCount} advDef={advDef} bossDef={bossDef}/>
      {/* 手前：自分 */}
      <Row side="me" boss={me?.boss} adv={me?.adv} hand={priv?.hand||[]} handCount={(priv?.hand||[]).length} deckCount={priv?.deckCount} advDef={advDef} bossDef={bossDef}/>
    </div>
  )
}

function Row({ side, boss, adv, hand, handCount, deckCount, advDef, bossDef }:{
  side:'me'|'opponent',
  boss:any, adv:any[], hand?:string[], handCount?:number, deckCount?:number,
  advDef:(n:string)=>any, bossDef:(n:string)=>any
}){
  const isMe = side==='me'
  return (
    <div style={{display:'grid', gridTemplateRows:'auto auto', gap:6}}>
      {/* Boss line */}
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <CardImage name={boss?.name} type="boss" hp={boss?.hp} maxHp={boss?.maxHp}/>
        <div style={{fontSize:12, opacity:.9}}>
          <div><b>{isMe?'あなた':'相手'}</b> のボス：{boss?.name} HP {boss?.hp}/{boss?.maxHp}</div>
          <DiceTable name={boss?.name} bossDef={bossDef}/>
        </div>
        <div style={{marginLeft:'auto', fontSize:12, opacity:.8}}>
          手札 {handCount ?? 0} / 山札 {deckCount ?? 0}
        </div>
      </div>

      {/* Adventurers line */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:10}}>
        {adv?.map((a:any)=>(
          <div key={a.id} style={{display:'grid', gridTemplateRows:'auto auto', gap:6, opacity:a.hp>0?1:0.6}}>
            <CardImage name={a.name} type="adv" hp={a.hp} maxHp={a.maxHp} ap={a.ap} maxAp={a.maxAp}/>
            <ActionList name={a.name} advDef={advDef}/>
          </div>
        ))}
      </div>

      {/* 手札（自分だけ表示） */}
      {isMe && (
        <div style={{fontSize:12, opacity:.9}}>
          手札：{(hand||[]).join(" / ") || "(なし)"}（{hand?.length||0}枚）
        </div>
      )}
    </div>
  )
}

function DiceTable({ name, bossDef }:{ name:string, bossDef:(n:string)=>any }){
  const table = (bossDef(name)?.dice_table) || {}
  const entries = Object.entries(table)
  if (!entries.length) return null
  return (
    <div>≪ボス行動表≫
      <ul style={{margin:'4px 0', paddingLeft:18}}>
        {entries.map(([eye,row]:any)=>(
          <li key={eye}>出目{eye}: {row.action} {row.value ?? ""}</li>
        ))}
      </ul>
    </div>
  )
}

function ActionList({ name, advDef }:{ name:string, advDef:(n:string)=>any }){
  const actions = (advDef(name)?.actions)||[]
  if (!actions.length) return null
  return (
    <div style={{fontSize:12}}>
      行動：
      <ul style={{margin:'4px 0', paddingLeft:18}}>
        {actions.map((ac:any)=>(
          <li key={ac.name}>{ac.name} {ac.cost_ap?`(AP${ac.cost_ap})`:""} {ac.damage?`/ DMG${ac.damage}`:""} {ac.heal?`/ HEAL${ac.heal}`:""}</li>
        ))}
      </ul>
    </div>
  )
}

function slugify(name:string){ return name.replace(/[^\w\u3040-\u30ff\u4e00-\u9faf]/g,'') }
function imgPath(type:'adv'|'boss', name:string){
  const s = slugify(name)
  return `/assets/cards/${type}_${s}.png`
}
function CardImage({ name, type, hp, maxHp, ap, maxAp }:{ name:string, type:'adv'|'boss', hp:number, maxHp:number, ap?:number, maxAp?:number }){
  const url = useMemo(()=> imgPath(type, name), [type,name])
  const style:React.CSSProperties = {
    width: 160, height: 220, borderRadius: 12,
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover', backgroundPosition:'center',
    border: '1px solid #ddd', position:'relative'
  }
  const overlay:React.CSSProperties = { position:'absolute', left:8, right:8, bottom:8, display:'flex', justifyContent:'space-between', fontSize:12, color:'#fff', textShadow:'0 1px 2px rgba(0,0,0,.9)' }
  return (
    <div style={style} title={name} onErrorCapture={(e)=>{ (e.currentTarget as HTMLDivElement).style.background='linear-gradient(135deg,#eee,#ddd)' }}>
      <div style={{position:'absolute', top:8, left:8, right:8, fontWeight:700, fontSize:12, color:'#fff', textShadow:'0 1px 2px rgba(0,0,0,.9)'}}>{name}</div>
      <div style={overlay}>
        <span>HP {hp}/{maxHp}</span>
        {typeof ap==='number' && typeof maxAp==='number' && <span>AP {ap}/{maxAp}</span>}
      </div>
    </div>
  )
}
