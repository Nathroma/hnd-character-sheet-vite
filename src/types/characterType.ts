import { DerivedValueType } from './derivedValueType';
import { ClassType } from './classType';
import { profileData, ProfileType } from './profileType';
import { Skill, SkillType } from './skillType';
import { Stat, StatType } from './statType';
import { ArmorClass, AttributesType, HealthPoint } from './attributeType';
import { Equipment, Inventory } from './itemType';
import { SpellType } from './spellType';
import { ImportantItem, KnownCharacter } from './noteType';

export type CharacterDatas = {
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
  attributes: {
    [AttributesType.hp]: HealthPoint;
    [AttributesType.ac]: ArmorClass;
  };
  inventory: Inventory;
  spells: SpellType[];
  playerNotes: {
    note: string;
    knownCharacters: KnownCharacter[];
    ImportantItem: ImportantItem[];
  };
};

export type Character = {
  datas: CharacterDatas;
  getDerivedValue: (dataName: DerivedValueType) => number;
  // Hooks for stats
  setStatValue: (statType: StatType, value: number) => void;
  setStatMastered: (statType: StatType, mastered: boolean) => void;
  // Hooks for skills
  switchSkillProficiencyLevel: (skillType: SkillType) => void;
  // Hooks for profile
  setClass: (newClass: ClassType) => void;
  setProfileData: (dataName: ProfileType, value: string | number) => void;
  // Hooks for attributes
  setMaxHp: (value: number) => void;
  setCurrentHp: (value: number) => void;
  setTotalAc: (value: number) => void;
  // Hooks for equipments
  addEquipement: (equipement: Equipment) => void;
  editEquipement: (equipementId: number, equipement: Equipment) => void;
  removeEquipement: (equipementId: number) => void;
  // Hooks for spells
  addSpell: (spell: SpellType) => void;
  editSpell: (spellId: number, spell: SpellType) => void;
  removeSpell: (spellId: number) => void;
  updatePlayerNote: (note: string) => void;
};
