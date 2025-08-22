/// <reference types="vite/client" />

// 必要なら型を明示（任意のキーも許容される）
interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_REGION?: string;
  readonly VITE_USE_EMULATORS?: string; // "1" を想定
  // 他に使う VITE_ プレフィックスの環境変数があればここに足してOK
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
