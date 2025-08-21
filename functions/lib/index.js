import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onCall } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";
import { REGION } from "./config.js";
import dataset from "./data/min_tcg_set.js";
import { applyIntent, startGame } from "./engine/reducer.js";
import { aiTakeTurn } from "./engine/ai.js";
// Admin SDK (v12) — モジュラーAPI
initializeApp();
const db = getFirestore();
db.settings({ ignoreUndefinedProperties: true });
setGlobalOptions({ region: REGION });
function sanitizePublic(gs) {
    const clone = JSON.parse(JSON.stringify(gs));
    delete clone.p1.hand;
    delete clone.p2.hand;
    delete clone.p1.deck;
    delete clone.p2.deck;
    return clone;
}
function projectForPlayer(gs, who) {
    const side = who === "P1" ? gs.p1 : gs.p2;
    return { hand: side.hand, deckCount: side.deck.length };
}
export const startGameFn = onCall(async (_req) => {
    const boss1 = dataset.cards.bosses[0].name;
    const boss2 = dataset.cards.bosses[1].name;
    const seed = Math.random().toString(36).slice(2);
    const gs = startGame(seed, boss1, boss2);
    const gid = gs.id;
    const refI = db.doc(`games/${gid}/internal/state`);
    const refP = db.doc(`games/${gid}/public/state`);
    const p1p = db.doc(`games/${gid}/private/P1`);
    const p2p = db.doc(`games/${gid}/private/P2`);
    await db.runTransaction(async (tx) => {
        tx.set(refI, gs);
        tx.set(refP, sanitizePublic(gs));
        tx.set(p1p, projectForPlayer(gs, "P1"));
        tx.set(p2p, projectForPlayer(gs, "P2"));
    });
    return { ok: true, gameId: gid };
});
export const applyIntentFn = onCall(async (req) => {
    const { gameId, actor, intent } = req.data;
    const refI = db.doc(`games/${gameId}/internal/state`);
    const refP = db.doc(`games/${gameId}/public/state`);
    const p1p = db.doc(`games/${gameId}/private/P1`);
    const p2p = db.doc(`games/${gameId}/private/P2`);
    let shouldAIMove = false;
    await db.runTransaction(async (tx) => {
        const snap = await tx.get(refI);
        if (!snap.exists)
            throw new Error("game_not_found");
        const gs = snap.data();
        const after = applyIntent(gs, actor, intent);
        shouldAIMove = after.turn === "P2";
        tx.set(refI, after);
        tx.set(refP, sanitizePublic(after));
        tx.set(p1p, projectForPlayer(after, "P1"));
        tx.set(p2p, projectForPlayer(after, "P2"));
    });
    if (shouldAIMove) {
        await db.runTransaction(async (tx) => {
            const snap = await tx.get(refI);
            if (!snap.exists)
                return;
            const gs = snap.data();
            const after = aiTakeTurn(gs, "P2");
            tx.set(refI, after);
            tx.set(refP, sanitizePublic(after));
            tx.set(p1p, projectForPlayer(after, "P1"));
            tx.set(p2p, projectForPlayer(after, "P2"));
        });
    }
    return { ok: true };
});
