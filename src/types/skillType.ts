export enum SkillType {
  Acrobatics = "Acrobatics",
  Arcana = "Arcana",
  Athletics = "Athletics",
  Stealth = "Stealth",
  AnimalHandling = "AnimalHandling",
  SleightOfHand = "SleightOfHand",
  History = "History",
  Intimidation = "Intimidation",
  Investigation = "Investigation",
  Medicine = "Medicine",
  Nature = "Nature",
  Perception = "Perception",
  Insight = "Insight",
  Persuasion = "Persuasion",
  Religion = "Religion",
  Performance = "Performance",
  Deception = "Deception",
  Survival = "Survival",
}

export type Skill = {
  name: string;
  stat: string;
};
