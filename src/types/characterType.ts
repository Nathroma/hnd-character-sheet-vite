import { StatType } from "./statType";

export type Substat = {
  value: number;
  modifier: number;
  mastered: boolean;
};

export type Character = {
  stats: {
    [StatType.FOR]: Substat;
    [StatType.DEX]: Substat;
    [StatType.CON]: Substat;
    [StatType.INT]: Substat;
    [StatType.WIS]: Substat;
    [StatType.CHA]: Substat;
  };
};
