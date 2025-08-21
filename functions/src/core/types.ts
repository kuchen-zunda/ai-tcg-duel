import type { GameState, Action } from "../engine/types.js";

// 今は dualraid 固定だが将来 "pokeca" | "ygo" などを足す
export type EngineId = "dualraid";

export type RouteKind = "game_action" | "chat" | "both" | "unknown";

export interface RouterResult {
  kind: RouteKind;
  // 盤面操作の計画（複数アクションも許容）
  actions?: Action[] | null;
  // 会話返答（相手AIの人格で）
  reply?: string | null;
  // 曖昧な時の質問
  ask?: string | null;
  // 解析の説明（デバッグ）
  explain?: string | null;
}

export interface EngineAdapter {
  engine: EngineId;

  /** LLM に渡すための“できること”の一覧を作る（合法語彙） */
  manifestForPrompt(gs: GameState, opts: { mySeat: "P1"|"P2"; myHand: string[] }):
    Promise<{
      units: string[];
      actionsByUnit: Record<string,string[]>;
      cardsByCategory: Record<"support"|"equipment"|"event"|"field", string[]>;
      hand: string[];
    }>;

  /** LLM が提案した actions を順番に検証 & 適用して次状態を返す */
  validateAndApply(gs: GameState, actor: "P1"|"P2", actions: Action[]): GameState;
}
