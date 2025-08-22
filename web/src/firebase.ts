// web/src/firebase.ts
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
} from "firebase/firestore";
import {
  getFunctions,
  connectFunctionsEmulator,
} from "firebase/functions";

// Viteの環境変数から設定を読む（.env に入れてね）
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Functions のリージョンはプロジェクトに合わせて（既定: asia-northeast1）
const REGION = (import.meta.env.VITE_FIREBASE_REGION as string) || "asia-northeast1";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app, REGION);

// ローカル開発でエミュレータを使う場合は .env に VITE_USE_EMULATORS=1 を入れてね
if (import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === "1") {
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(functions, "localhost", 5001);
}
