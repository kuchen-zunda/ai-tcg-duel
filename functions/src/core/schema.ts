export type DecideResult =
  | { kind: "game"; actions: any[]; narration?: string }
  | { kind: "chat"; reply: string }
  | { kind: "both"; actions: any[]; reply: string; narration?: string }
  | { kind: "unknown"; ask: string };

export type ArbiterInput = {
  rulepack: string;
  persona: string;
  stateSummary: string;
  manifest: {
    units: string[];
    actionsByUnit: Record<string,string[]>;
    cardsByCategory: Record<"support"|"equipment"|"event"|"field", string[]>;
    hand: string[];
  };
  rulebookExcerpt: string;
  userUtterance: string;
};
