import { Attribute, AttributeType } from './attributeType';
import { ClassType } from './classType';
import { profileData, ProfileType } from './profileType';
import { Skill, SkillType } from './skillType';
import { Stat, StatType } from './statType';

export type CharacterAttributes = {
  profileDatas: {
    [ProfileType.name]: profileData;
    [ProfileType.race]: profileData;
    [ProfileType.class]: ClassType | null;
    [ProfileType.alignement]: profileData;
    [ProfileType.history]: profileData;
    [ProfileType.level]: profileData;
    [ProfileType.experience]: profileData;
  };
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
};

export type Character = {
  attributes: CharacterAttributes;
  setStatValue: (statType: StatType, value: number) => void;
  setStatMastered: (statType: StatType, mastered: boolean) => void;
  switchSkillProficiencyLevel: (skillType: SkillType) => void;
  setClass: (newClass: ClassType) => void;
  setProfileData: (dataName: ProfileType, value: string | number) => void;
};