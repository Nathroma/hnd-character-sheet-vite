import { StatColors } from "./src/types/colorType";
import { StatType, Stat } from "./src/types/statType";
import { SkillType, Skill } from "./src/types/skillType";
import { AttributeType, Attribute } from "./src/types/attributeType";

type ProficiencyBonus = {
  baseProficiency: number;
};

export const color: { stats: StatColors } = {
  stats: {
    FOR: "#c12a32",
    DEX: "#F48E01",
    CON: "#2EB576",
    INT: "#00ADED",
    SAG: "#902E8C",
    CHA: "#EF7EB0",

    proficiencyField: "#C58238",
    inspirationField: "#669E44",
    passivePercField: "#B03DAB",
    initiativeField: "#F48E01",
    speedField: "#8B6143",
    ddSaveField: "#981B81",
  },
};

export const proficiencyBonus: ProficiencyBonus = {
  baseProficiency: 2,
};

export const statAssociations: Record<StatType, Stat> = {
  [StatType.FOR]: { name: "Force", color: color.stats.FOR },
  [StatType.DEX]: { name: "Dextérité", color: color.stats.DEX },
  [StatType.CON]: { name: "Constitution", color: color.stats.CON },
  [StatType.INT]: { name: "Intelligence", color: color.stats.INT },
  [StatType.WIS]: { name: "Sagesse", color: color.stats.SAG },
  [StatType.CHA]: { name: "Charisme", color: color.stats.CHA },
};

export const SkillAssociations: Record<SkillType, Skill> = {
  [SkillType.Acrobatics]: { name: "Acrobatie", stat: "DEX" },
  [SkillType.Arcana]: { name: "Arcanes", stat: "INT" },
  [SkillType.Athletics]: { name: "Athlétisme", stat: "FOR" },
  [SkillType.Stealth]: { name: "Discrétion", stat: "DEX" },
  [SkillType.AnimalHandling]: { name: "Dressage", stat: "SAG" },
  [SkillType.SleightOfHand]: { name: "Escamotage", stat: "DEX" },
  [SkillType.History]: { name: "Histoire", stat: "INT" },
  [SkillType.Intimidation]: { name: "Intimidation", stat: "CHA" },
  [SkillType.Investigation]: { name: "investigation", stat: "INT" },
  [SkillType.Medicine]: { name: "Médecine", stat: "SAG" },
  [SkillType.Nature]: { name: "Nature", stat: "INT" },
  [SkillType.Perception]: { name: "Perception", stat: "SAG" },
  [SkillType.Insight]: { name: "Perspicacité", stat: "SAG" },
  [SkillType.Persuasion]: { name: "Persuasion", stat: "CHA" },
  [SkillType.Religion]: { name: "Religion", stat: "INT" },
  [SkillType.Performance]: { name: "Représentation", stat: "CHA" },
  [SkillType.Deception]: { name: "Supercherie", stat: "CHA" },
  [SkillType.Survival]: { name: "Survie", stat: "SAG" },
};

export const AttributeAssociations: Record<AttributeType, Attribute> = {
  [AttributeType.proficiency]: {
    name: "Maitrise",
    color: color.stats.proficiencyField,
    imgName: "proficiency",
  },
  [AttributeType.inspiration]: {
    name: "Inspiration",
    color: color.stats.inspirationField,
    imgName: "inspiration",
  },
  [AttributeType.perception]: {
    name: "Perception",
    color: color.stats.passivePercField,
    imgName: "perception",
  },
  [AttributeType.initiative]: {
    name: "Initiative",
    color: color.stats.initiativeField,
    imgName: "initiative",
  },
  [AttributeType.speed]: {
    name: "Vitesse",
    color: color.stats.speedField,
    imgName: "speed",
  },
  [AttributeType.saveThrow]: {
    name: "DD jet de sauvegarde",
    color: color.stats.ddSaveField,
    imgName: "save-throw",
  },
};
