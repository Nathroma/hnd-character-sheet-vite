import { StatType } from "./statType";

export enum SkillType {
  acrobatics = "acrobatics",
  arcana = "arcana",
  athletics = "athletics",
  stealth = "stealth",
  animalHandling = "animalHandling",
  sleightOfHand = "sleightOfHand",
  history = "history",
  intimidation = "intimidation",
  investigation = "investigation",
  medicine = "medicine",
  nature = "nature",
  perception = "perception",
  insight = "insight",
  persuasion = "persuasion",
  religion = "religion",
  performance = "performance",
  deception = "deception",
  survival = "survival",
}

export const skillNames: Record<SkillType, string> = {
  [SkillType.acrobatics]: "Acrobatie",
  [SkillType.arcana]: "Arcane",
  [SkillType.athletics]: "Athletisme",
  [SkillType.stealth]: "Discrétion",
  [SkillType.animalHandling]: "Dréssage",
  [SkillType.sleightOfHand]: "Escamotage",
  [SkillType.history]: "Histoire",
  [SkillType.intimidation]: "Intimidation",
  [SkillType.investigation]: "Investigation",
  [SkillType.medicine]: "Médicine",
  [SkillType.nature]: "Naure",
  [SkillType.perception]: "Perception",
  [SkillType.insight]: "Perspicacité",
  [SkillType.persuasion]: "Persuasion",
  [SkillType.religion]: "Religion",
  [SkillType.performance]: "Représentation",
  [SkillType.deception]: "Supercherie",
  [SkillType.survival]: "Survie",
};

export const skillAttributes: Record<SkillType, StatType> = {
  [SkillType.acrobatics]: StatType.DEX,
  [SkillType.arcana]: StatType.INT,
  [SkillType.athletics]: StatType.FOR,
  [SkillType.stealth]: StatType.DEX,
  [SkillType.animalHandling]: StatType.WIS,
  [SkillType.sleightOfHand]: StatType.DEX,
  [SkillType.history]: StatType.INT,
  [SkillType.intimidation]: StatType.WIS,
  [SkillType.investigation]: StatType.INT,
  [SkillType.medicine]: StatType.WIS,
  [SkillType.nature]: StatType.INT,
  [SkillType.perception]: StatType.WIS,
  [SkillType.insight]: StatType.WIS,
  [SkillType.persuasion]: StatType.CHA,
  [SkillType.religion]: StatType.INT,
  [SkillType.performance]: StatType.CHA,
  [SkillType.deception]: StatType.CHA,
  [SkillType.survival]: StatType.WIS,
};

export enum ProficiencyLevel {
  default = "default",
  master = "master",
  expert = "expert",
  half = "half",
}

export type Skill = {
  value: number;
  proficiencyLevel: ProficiencyLevel;
};

export const newDefaultSkill = (): Skill => ({ value: 0, proficiencyLevel: ProficiencyLevel.default });
