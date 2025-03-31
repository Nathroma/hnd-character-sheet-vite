import { useMemo } from 'react';
import { Character, CharacterDatas } from '@/types/characterType';
import { newDefaultStat, StatType } from '@/types/statType';
import useLocalStorage from './useLocalStorage';
import { newDefaultSkill, ProficiencyLevel, SkillType } from '@/types/skillType';
import { newDefaultProfileData, ProfileType } from '@/types/profileType';
import { ClassType } from '@/types/classType';
import { DerivedValueType } from '@/types/derivedValueType';
import { AttributesType, newDefaultAc, newDefaultHp } from '@/types/attributeType';

const defaultCharacter: CharacterDatas = {
  profileDatas: {
    [ProfileType.name]: newDefaultProfileData(),
    [ProfileType.race]: newDefaultProfileData(),
    [ProfileType.class]: null,
    [ProfileType.alignement]: newDefaultProfileData(),
    [ProfileType.history]: newDefaultProfileData(),
    [ProfileType.level]: newDefaultProfileData(),
    [ProfileType.experience]: newDefaultProfileData(),
  },
  stats: {
    [StatType.FOR]: newDefaultStat(),
    [StatType.DEX]: newDefaultStat(),
    [StatType.CON]: newDefaultStat(),
    [StatType.INT]: newDefaultStat(),
    [StatType.WIS]: newDefaultStat(),
    [StatType.CHA]: newDefaultStat(),
  },
  skills: {
    [SkillType.acrobatics]: newDefaultSkill(),
    [SkillType.arcana]: newDefaultSkill(),
    [SkillType.athletics]: newDefaultSkill(),
    [SkillType.stealth]: newDefaultSkill(),
    [SkillType.animalHandling]: newDefaultSkill(),
    [SkillType.sleightOfHand]: newDefaultSkill(),
    [SkillType.history]: newDefaultSkill(),
    [SkillType.intimidation]: newDefaultSkill(),
    [SkillType.investigation]: newDefaultSkill(),
    [SkillType.medicine]: newDefaultSkill(),
    [SkillType.nature]: newDefaultSkill(),
    [SkillType.perception]: newDefaultSkill(),
    [SkillType.insight]: newDefaultSkill(),
    [SkillType.persuasion]: newDefaultSkill(),
    [SkillType.religion]: newDefaultSkill(),
    [SkillType.performance]: newDefaultSkill(),
    [SkillType.deception]: newDefaultSkill(),
    [SkillType.survival]: newDefaultSkill(),
  },
  attributes: {
    [AttributesType.hp]: newDefaultHp(),
    [AttributesType.ac]: newDefaultAc(),
  },
};

const useCharacter = (): Character => {
  const [characterDatas, setCharacter] = useLocalStorage<CharacterDatas>('character', defaultCharacter);

  const setStatValue = (statType: StatType, value: number): void => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.stats[statType].value = value;
    setCharacter(newCharacterDatas);
  };

  const setStatMastered = (statType: StatType, mastered: boolean) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.stats[statType].mastered = mastered;
    setCharacter(newCharacterDatas);
  };

  const switchSkillProficiencyLevel = (skillType: SkillType) => {
    const newCharacterDatas = { ...characterDatas };
    const levels: ProficiencyLevel[] = [
      ProficiencyLevel.default,
      ProficiencyLevel.master,
      ProficiencyLevel.expert,
      ProficiencyLevel.half,
    ];

    const currentLevel = newCharacterDatas.skills[skillType].proficiencyLevel;
    const currentIndex = levels.indexOf(currentLevel);

    const nextIndex = (currentIndex + 1) % levels.length;
    newCharacterDatas.skills[skillType].proficiencyLevel = levels[nextIndex];
    setCharacter(newCharacterDatas);
  };

  const setClass = (newClass: ClassType) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.profileDatas.class = newClass;
    setCharacter(newCharacterDatas);
  };

  const setProfileData = (dataName: ProfileType, value: string | number) => {
    const newCharacterDatas = { ...characterDatas };
    if (dataName !== ProfileType.class) {
      newCharacterDatas.profileDatas[dataName].value = value;
    }
    setCharacter(newCharacterDatas);
  };

  const getDerivedValue = (dataName: DerivedValueType): number => {
    if (dataName === DerivedValueType.initiative) {
      return characterDatas.stats.DEX.value;
    }
    if (dataName === DerivedValueType.inspiration) {
      return 0;
    }
    if (dataName === DerivedValueType.perception) {
      return 10 + characterDatas.skills.perception.value;
    }
    if (dataName === DerivedValueType.proficiency) {
      return 3;
    }
    if (dataName === DerivedValueType.saveThrow) {
      return 0;
    }
    if (dataName === DerivedValueType.speed) {
      return 9;
    }
    return 0;
  };

  const setMaxHp = (value: number) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.attributes.healthPoint.max = value;
    setCharacter(newCharacterDatas);
  };

  const setCurrentHp = (value: number) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.attributes.healthPoint.current = value;
    setCharacter(newCharacterDatas);
  };

  const setTotalAc = (value: number) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.attributes.armorClass.total = value;
    setCharacter(newCharacterDatas);
  };

  return useMemo(
    () => ({
      datas: characterDatas,
      setStatValue: setStatValue,
      setStatMastered: setStatMastered,
      switchSkillProficiencyLevel: switchSkillProficiencyLevel,
      setClass: setClass,
      setProfileData: setProfileData,
      getDerivedValue: getDerivedValue,
      setMaxHp: setMaxHp,
      setCurrentHp: setCurrentHp,
      setTotalAc: setTotalAc,
    }),
    [
      characterDatas,
      setStatValue,
      setStatMastered,
      switchSkillProficiencyLevel,
      setClass,
      setProfileData,
      getDerivedValue,
      setMaxHp,
      setCurrentHp,
      setTotalAc,
    ]
  );
};

export default useCharacter;
