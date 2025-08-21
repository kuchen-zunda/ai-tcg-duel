import React, { useEffect, useMemo, useRef, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously, onAuthStateChanged, User } from 'firebase/auth'
import { getFirestore, doc, onSnapshot } from 'firebase/firestore'
import { httpsCallable, getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: 'REPLACE_ME',
  authDomain: 'REPLACE_ME.firebaseapp.com',
  projectId: 'REPLACE_ME',
  appId: 'REPLACE_ME'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
// ★ 東京リージョンを明示するのだ
const functions = getFunctions(app, 'asia-northeast1')

export default function App(){
  const [user, setUser] = useState<User|null>(null)
  const [gid, setGid]   = useState('')
  const [pub, setPub]   = useState<any>(null)
  const [priv, setPriv] = useState<any>(null)
  const [msgs, setMsgs] = useState<{from:'me'|'sys', text:string}[]>([])

  useEffect(()=>{
    signInAnonymously(auth)
    return onAuthStateChanged(auth, u=> setUser(u))
  }, [])

  // ゲーム購読
  useEffect(()=>{
    if (!gid) return
    const unsub1 = onSnapshot(doc(db, 'games', gid, 'public', 'state'), s => setPub(s.data()))
    let unsub2 = ()=>{}
    if (user) {
      unsub2 = onSnapshot(doc(db, 'games', gid, 'private', user.uid), s => setPriv(s.data()))
    }
    return ()=>{ unsub1(); unsub2(); }
  }, [gid, user])

  const start = async ()=>{
    const startGameFn = httpsCallable(functions, 'startGameFn')
    const res:any = await startGameFn({})
    setGid(res.data.gameId)
    setMsgs(m=>[...m, {from:'sys', text:`ゲーム開始なのだ（ID: ${res.data.gameId}）` }])
  }

  const act = async (intent:any)=>{
    if (!gid) return
    const applyIntentFn = httpsCallable(functions, 'applyIntentFn')
    await applyIntentFn({ gameId: gid, actor: 'P1', intent })
  }

  const nlp = httpsCallable(functions, 'nlpIntentFn');

  return (
    <div style={{fontFamily:'system-ui', padding:16, display:'grid', gap:12}}>
      <h1>Dual Raid TCG (Firebase)</h1>
      {!gid && <button onClick={start}>Start New Game (vs AI)</button>}
      {gid && <div style={{opacity:.7}}>Game: {gid}</div>}

      <div style={{display:'grid', gridTemplateColumns:'1.2fr .8fr', gap:16}}>
        <Board pub={pub} priv={priv} onAct={act} />
        <Chat onSend={async (line)=>{
          setMsgs(m=>[...m, {from:'me', text:line}])
          try {
            const r:any = await nlp({ gameId: gid, text: line });
            const { ok, intent, ask, explain } = r.data || {};
            if (!ok) { setMsgs(m=>[...m, {from:'sys', text: ask || 'うまく解釈できないのだ…'}]); return; }
            setMsgs(m=>[...m, {from:'sys', text: `解釈: ${explain || JSON.stringify(intent)}（実行するのだ）`}]);
            await act(intent);
          } catch (e:any) {
            setMsgs(m=>[...m, {from:'sys', text:'NLPエラー：'+(e.message||String(e))}])
          }
        }} messages={msgs}/>
      </div>
    </div>
  )
}

function Board({ pub, priv, onAct }:{ pub:any, priv:any, onAct:(i:any)=>void }){
  if (!pub) return <div>待機中なのだ…</div>
  const me = pub.p1, opp = pub.p2
  return (
    <div style={{display:'grid', gap:12}}>
      <section style={{display:'grid', gap:6}}>
        <h2 style={{margin:0}}>あなた</h2>
        <div>Boss: <b>{me?.boss.name}</b> HP {me?.boss.hp}/{me?.boss.maxHp}</div>
        <div style={{display:'grid', gap:8}}>
          {me?.adv?.map((a:any)=>(
            <div key={a.id} style={{border:'1px solid #ddd', borderRadius:10, padding:8, display:'grid', gap:6}}>
              <div><b>{a.name}</b> HP {a.hp}/{a.maxHp}  AP {a.ap}/{a.maxAp}</div>
              <div style={{display:'flex', gap:8}}>
                <button onClick={()=>onAct({ type:'use_action', unit:a.name, action:'攻撃' })} disabled={a.hp<=0}>攻撃</button>
                <button onClick={()=>onAct({ type:'use_action', unit:a.name, action:'ヒール', target: me.adv[0]?.name })} disabled={a.hp<=0}>（試）ヒール→{me.adv[0]?.name}</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{margin:'12px 0 8px'}}>手札</h3>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            {priv?.hand?.map((c:string, i:number)=>(
              <button key={i} onClick={()=>onAct({ type:'play_support', card:c, mode:'adventurer', target: me?.adv?.[0]?.name })}>{c}</button>
            ))}
          </div>
          <div style={{opacity:.7, marginTop:4}}>山札：{priv?.deckCount??0}枚</div>
        </div>
        <button onClick={()=>onAct({ type:'end_turn' })} style={{marginTop:8}}>ターン終了</button>
      </section>

      <section style={{display:'grid', gap:6}}>
        <h2 style={{margin:0}}>相手</h2>
        <div>Boss: <b>{opp?.boss.name}</b> HP {opp?.boss.hp}/{opp?.boss.maxHp}</div>
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

function Chat({ onSend, messages }:{ onSend:(t:string)=>void, messages:{from:'me'|'sys',text:string}[] }){
  const [line,setLine] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  return (
    <div style={{border:'1px solid #ddd', borderRadius:12, padding:10, display:'grid', gridTemplateRows:'1fr auto', height:480}}>
      <div style={{overflowY:'auto', display:'grid', gap:6, padding:4}}>
        {messages.map((m,i)=>(
          <div key={i} style={{justifySelf: m.from==='me'?'end':'start', background:m.from==='me'?'#e8f7ff':'#f6f6f6', borderRadius:8, padding:'6px 8px'}}>
            {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={e=>{ e.preventDefault(); if(!line.trim()) return; onSend(line.trim()); setLine(''); ref.current?.focus(); }} style={{display:'flex', gap:8, marginTop:8}}>
        <input ref={ref} value={line} onChange={e=>setLine(e.target.value)} placeholder="例：攻撃 リオ / ヒール ルゥナ→リオ / サポート 絆の記録 冒険者 リオ / ターン終了" style={{flex:1, padding:'8px 10px', borderRadius:8, border:'1px solid #ccc'}}/>
        <button>送信</button>
      </form>
    </div>
  )
}

// ===== 簡易パーサ（日本語・英語どちらでもOK最小形） =====
function parseIntent(line:string, pub:any, priv:any){
  const norm = line.replace(/\s+/g,' ').trim()

  // ターン終了
  if (/^(end|ターン終了|終了)$/i.test(norm)) return { type:'end_turn' }

  // 攻撃 unit
  let m = norm.match(/^(attack|攻撃)\s+(\S+)/i)
  if (m) return { type:'use_action', unit:m[2], action:'攻撃' }

  // ヒール healer->target
  m = norm.match(/^(heal|ヒール)\s+(\S+)\s*(->|→)\s*(\S+)/i)
  if (m) return { type:'use_action', unit:m[2], action:'ヒール', target:m[4] }

  // サポート card 冒険者|ボス [target]
  m = norm.match(/^(support|サポート)\s+(\S+)(?:\s+(adventurer|ally|冒険者|boss|ボス))?(?:\s+(\S+))?$/i)
  if (m) {
    const mode = /boss|ボス/i.test(m[3]||'') ? 'boss' : 'adventurer'
    const target = m[4]
    return { type:'play_support', card:m[2], mode, target }
  }

  return null
}
