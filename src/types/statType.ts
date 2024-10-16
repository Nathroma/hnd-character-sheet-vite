export enum StatType {
  FOR = "FOR",
  DEX = "DEX",
  CON = "CON",
  INT = "INT",
  WIS = "WIS",
  CHA = "CHA",
}

export const statNames: Record<StatType, string> = {
  [StatType.FOR]: "Force",
  [StatType.DEX]: "Force",
  [StatType.CON]: "",
  [StatType.INT]: "",
  [StatType.WIS]: "",
  [StatType.CHA]: ""
}

export const statColors: Record<StatType, string> = {
  [StatType.FOR]: "",
  [StatType.DEX]: "",
  [StatType.CON]: "",
  [StatType.INT]: "",
  [StatType.WIS]: "",
  [StatType.CHA]: ""
}

export type Stat = {
  value: number;
  mastered: boolean;
};

export const defaultStat: Stat = {
  value: 0,
  mastered: false
};
