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
  [StatType.DEX]: "Dextérité",
  [StatType.CON]: "Constitution",
  [StatType.INT]: "Intelligence",
  [StatType.WIS]: "Sagesse",
  [StatType.CHA]: "Charisme",
};

export const statColors: Record<StatType, string> = {
  [StatType.FOR]: "#c12a32",
  [StatType.DEX]: "#F48E01",
  [StatType.CON]: "#2EB576",
  [StatType.INT]: "#00ADED",
  [StatType.WIS]: "#902E8C",
  [StatType.CHA]: "#EF7EB0",
};

export type Stat = {
  value: number;
  mastered: boolean;
};

export const defaultStat: Stat = {
  value: 0,
  mastered: false,
};
