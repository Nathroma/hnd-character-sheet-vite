export enum StatName {
  FOR = "FOR",
  DEX = "DEX",
  CON = "CON",
  INT = "INT",
  SAG = "SAG",
  CHA = "CHA",
}

export type Skill = {
  name: string;
  substatName: StatName;
};

export type Substat = {
  value: number;
  modifier: number;
  mastered: boolean;
};

export type Character = {
  stats: {
    [StatName.FOR]: Substat;
    [StatName.DEX]: Substat;
    [StatName.CON]: Substat;
    [StatName.INT]: Substat;
    [StatName.SAG]: Substat;
    [StatName.CHA]: Substat;
  };
};
