export enum SkillType {
  Acrobatie = "Acrobatie",
  Arcanes = "Arcanes",
  Athlétisme = "Athlétisme",
  Discrétion = "Discrétion",
  Dressage = "Dressage",
  Escamotage = "Escamotage",
  Histoire = "Histoire",
  Intimidation = "Intimidation",
  investigation = "investigation",
  Médecine = "Médecine",
  Nature = "Nature",
  Perception = "Perception",
  Perspicacité = "Perspicacité",
  Persuasion = "Persuasion",
  Religion = "Religion",
  Représentation = "Représentation",
  Supercherie = "Supercherie",
  Survie = "Survie",
}

export type Skill = {
  name: string;
  stat: string;
};
