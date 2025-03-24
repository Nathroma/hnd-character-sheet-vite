export enum DerivedValueType {
  proficiency = "proficiency",
  inspiration = "inspiration",
  perception = "perception",
  initiative = "initiative",
  speed = "speed",
  saveThrow = "saveThrow",
}

export const derivedValueTitles: Record<DerivedValueType, string> = {
  [DerivedValueType.proficiency]: "Maitrise",
  [DerivedValueType.inspiration]: "Inspiration",
  [DerivedValueType.perception]: "Perception",
  [DerivedValueType.initiative]: "Initiative",
  [DerivedValueType.speed]: "Vitesse",
  [DerivedValueType.saveThrow]: "DD sauv. de sort",
};

export const derivedValueColors: Record<DerivedValueType, string> = {
  [DerivedValueType.proficiency]: "#C58238",
  [DerivedValueType.inspiration]: "#669E44",
  [DerivedValueType.perception]: "#B03DAB",
  [DerivedValueType.initiative]: "#F48E01",
  [DerivedValueType.speed]: "#8B6143",
  [DerivedValueType.saveThrow]: "#981B81",
};

export const derivedValueImgNames: Record<DerivedValueType, string> = {
  [DerivedValueType.proficiency]: "proficiency",
  [DerivedValueType.inspiration]: "inspiration",
  [DerivedValueType.perception]: "perception",
  [DerivedValueType.initiative]: "initiative",
  [DerivedValueType.speed]: "speed",
  [DerivedValueType.saveThrow]: "save-throw",
};
