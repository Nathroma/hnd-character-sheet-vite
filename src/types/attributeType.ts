export enum AttributeType {
  proficiency = "proficiency",
  inspiration = "inspiration",
  perception = "perception",
  initiative = "initiative",
  speed = "speed",
  saveThrow = "saveThrow",
}

export type Attribute = {
  name: string;
  color: string;
  imgName: string;
};
