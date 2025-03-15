export enum AttributeType {
  proficiency = "proficiency",
  inspiration = "inspiration",
  perception = "perception",
  initiative = "initiative",
  speed = "speed",
  saveThrow = "saveThrow",
}

export const attributeTitles: Record<AttributeType, string> = {
  [AttributeType.proficiency]: "Maitrise",
  [AttributeType.inspiration]: "Inspiration",
  [AttributeType.perception]: "Perception",
  [AttributeType.initiative]: "Initiative",
  [AttributeType.speed]: "Vitesse",
  [AttributeType.saveThrow]: "DD sauv. de sort",
};

export const attributeColors: Record<AttributeType, string> = {
  [AttributeType.proficiency]: "#C58238",
  [AttributeType.inspiration]: "#669E44",
  [AttributeType.perception]: "#B03DAB",
  [AttributeType.initiative]: "#F48E01",
  [AttributeType.speed]: "#8B6143",
  [AttributeType.saveThrow]: "#981B81",
};

export const attributeImgNames: Record<AttributeType, string> = {
  [AttributeType.proficiency]: "proficiency",
  [AttributeType.inspiration]: "inspiration",
  [AttributeType.perception]: "perception",
  [AttributeType.initiative]: "initiative",
  [AttributeType.speed]: "speed",
  [AttributeType.saveThrow]: "save-throw",
};

export type Attribute = {
  value : number
};

export const newDefaultAttribute = (): Attribute => ({ value: 0 })