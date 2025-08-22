// functions/src/rulepacks/dualraid/engine/types.ts

export type GameStatus = "active" | "ended";
export type Turn = "P1" | "P2";

export type Adventurer = {
  id: string;
  name: string;
  hp: number;
  maxHp: number;
  ap: number;
  maxAp: number;
  statuses: string[];
  equipment: string[];
};

export type PlayerSide = {
  boss: { id: string; name: string; hp: number; maxHp: number; };
  adv: Adventurer[];
  hand: string[];
  deck: string[];
  discard: string[];
  fieldAdv: string | null;
  fieldBoss: string | null;
};

export type FlagsPerSide = {
  supportUsed?: boolean;
};

export type RNGState = {
  seed: string;
  rollNo: number;
};

export type GameState = {
  seed: string;
  rng: RNGState;                      // ← 追加
  status: GameStatus;
  turn: Turn;
  p1: PlayerSide;
  p2: PlayerSide;
  log: any[];
  flags: { P1?: FlagsPerSide; P2?: FlagsPerSide };
};

/** 自然文→エンジンへ渡すアクション */
export type Action =
  | { type: "use_action"; unit: string; action: string; target?: string }
  | { type: "play_support"; card: string; mode: "adventurer" | "boss"; target?: string }
  | { type: "play_field"; card: string; side: "adventurer" | "boss" }
  | { type: "equip"; card: string; unit: string }
  | { type: "end_turn" };
