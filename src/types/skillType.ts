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

export type Skill = {
  name: string;
  relatedStat: StatType;
};
