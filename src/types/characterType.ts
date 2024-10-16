import { Stat, StatType } from "./statType";

export type Character = {
  stats: {
    [StatType.FOR]: Stat;
    [StatType.DEX]: Stat;
    [StatType.CON]: Stat;
    [StatType.INT]: Stat;
    [StatType.WIS]: Stat;
    [StatType.CHA]: Stat;
  };
};
