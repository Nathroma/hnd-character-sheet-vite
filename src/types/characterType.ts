import { Attribute, AttributeType } from './attributeType';
import { Skill, SkillType } from './skillType';
import { Stat, StatType } from './statType';

export type Character = {
  stats: {
    [StatType.FOR]: Stat;
    [StatType.DEX]: Stat;
    [StatType.CON]: Stat;
    [StatType.INT]: Stat;
    [StatType.WIS]: Stat;
    [StatType.CHA]: Stat;
  };
  skills: {
    [SkillType.acrobatics]: Skill;
    [SkillType.arcana]: Skill;
    [SkillType.athletics]: Skill;
    [SkillType.stealth]: Skill;
    [SkillType.animalHandling]: Skill;
    [SkillType.sleightOfHand]: Skill;
    [SkillType.history]: Skill;
    [SkillType.intimidation]: Skill;
    [SkillType.investigation]: Skill;
    [SkillType.medicine]: Skill;
    [SkillType.nature]: Skill;
    [SkillType.perception]: Skill;
    [SkillType.insight]: Skill;
    [SkillType.persuasion]: Skill;
    [SkillType.religion]: Skill;
    [SkillType.performance]: Skill;
    [SkillType.deception]: Skill;
    [SkillType.survival]: Skill;
  };
  attributes: {
    [AttributeType.initiative]: Attribute;
    [AttributeType.inspiration]: Attribute;
    [AttributeType.perception]: Attribute;
    [AttributeType.proficiency]: Attribute;
    [AttributeType.saveThrow]: Attribute;
    [AttributeType.speed]: Attribute;
  };
};
