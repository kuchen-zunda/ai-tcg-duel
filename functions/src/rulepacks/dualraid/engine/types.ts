export type GameStatus = "active" | "p1_win" | "p2_win" | "draw";
export type Id = string;

export type Action =
  | { type: "use_action"; unit: string; action: string; target?: string }
  | { type: "play_support"; card: string; mode: "adventurer" | "boss"; target?: string }
  | { type: "play_field"; card: string; side: "adventurer" | "boss" }
  | { type: "equip"; card: string; unit: string }
  | { type: "play_event"; card: string }
  | { type: "end_turn" };

export interface Adventurer {
  id: Id;
  name: string;
  hp: number;
  maxHp: number;
  atk: number;
  ap: number;
  maxAp: number;
  statuses: string[];
  equipment: Id[];
}

export interface Boss {
  id: Id;
  name: string;
  hp: number;
  maxHp: number;
  stash?: {
    nextTurnDamageUp?: number;
    nextDiceMod?: number;
  };
}

export interface PlayerSide {
  boss: Boss;
  adv: Adventurer[];
  hand: Id[];
  deck: Id[];
  discard: Id[];
  fieldBoss?: Id | null;
  fieldAdv?: Id | null;
  flags: { supportUsedThisTurn: boolean };
}

export interface GameState {
  id: Id;
  turn: "P1"|"P2";
  phase: "draw"|"boss";            // ← プレイヤー手番 = "draw"、ボス解決 = "boss"
  status: GameStatus;
  p1: PlayerSide;
  p2: PlayerSide;
  rng: { seed: string; rollNo: number };
  log: any[];
  roundStarter: "P1"|"P2";         // ← 追加：このラウンドの先手
}
