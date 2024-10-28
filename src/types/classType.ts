export enum ClassType {
  barbarian = "barbarian",
  bard = "bard",
  clerc = "clerc",
  druid = "druid",
  wizard = "wizard",
  warrior = "warrior",
  magician = "magician",
  monk = "monk",
  paladin = "paladin",
  ranger = "ranger",
  rogue = "rogue",
  warlock = "warlock",
}

export const classNames: Record<ClassType, string> = {
  [ClassType.barbarian]: "Barbare",
  [ClassType.bard]: "Barde",
  [ClassType.clerc]: "Clerc",
  [ClassType.druid]: "Druide",
  [ClassType.wizard]: "Ensorceleur",
  [ClassType.warrior]: "Guerrier",
  [ClassType.magician]: "Magicien",
  [ClassType.monk]: "Moine",
  [ClassType.paladin]: "Paladin",
  [ClassType.ranger]: "Rodeur",
  [ClassType.rogue]: "Roublard",
  [ClassType.warlock]: "Sorcier"
}
