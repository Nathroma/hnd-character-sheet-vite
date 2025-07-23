export type SpellType = {
  id: number;
  name: string;
  description: string;
  level: SpellLevelType;
  incantationTime: string;
  duration: string;
  concentration: boolean,
  ritual: boolean,
  components: SpellComponentType[];
}

export enum SpellComponentType {
  Verbal = "Verbal",
  Somatic = "Somatic",
  Material = "Material",
}

export enum SpellLevelType {
  Cantrip = "Cantrip",
  LevelOne = "LevelOne",
  LevelTwo = "LevelTwo",
  LevelThree = "LevelThree",
  LevelFour = "LevelFour",
  LevelFive = "LevelFive",
  LevelSix = "LevelSix",
  LevelSeven = "LevelSeven",
  LevelEight = "LevelEight",
  LevelNine = "LevelNine",
}
