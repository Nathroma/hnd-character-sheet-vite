import { useMemo } from 'react';
import { Character, CharacterAttributes } from '@/types/characterType';
import { newDefaultStat, StatType } from '@/types/statType';
import useLocalStorage from './useLocalStorage';
import { newDefaultSkill, ProficiencyLevel, SkillType } from '@/types/skillType';
import { newDefaultProfileData, ProfileType } from '@/types/profileType';
import { ClassType } from '@/types/classType';
import { DerivedValueType } from '@/types/derivedValueType';

const defaultCharacter: CharacterAttributes = {
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
};

const useCharacter = (): Character => {
  const [characterDatas, setCharacter] = useLocalStorage<CharacterAttributes>('character', defaultCharacter);

  const setStatValue = (statType: StatType, value: number): void => {
    const newCharacter = { ...characterDatas };
    newCharacter.stats[statType].value = value;
    setCharacter(newCharacter);
  };

  const setStatMastered = (statType: StatType, mastered: boolean) => {
    const newCharacter = { ...characterDatas };
    newCharacter.stats[statType].mastered = mastered;
    setCharacter(newCharacter);
  };

  const switchSkillProficiencyLevel = (skillType: SkillType) => {
    const newCharacter = { ...characterDatas };
    const levels: ProficiencyLevel[] = [
      ProficiencyLevel.default,
      ProficiencyLevel.master,
      ProficiencyLevel.expert,
      ProficiencyLevel.half,
    ];

    const currentLevel = newCharacter.skills[skillType].proficiencyLevel;
    const currentIndex = levels.indexOf(currentLevel);

    const nextIndex = (currentIndex + 1) % levels.length;
    newCharacter.skills[skillType].proficiencyLevel = levels[nextIndex];
    setCharacter(newCharacter);
  };

  const setClass = (newClass: ClassType) => {
    const newCharacter = { ...characterDatas };
    newCharacter.profileDatas.class = newClass;
    setCharacter(newCharacter);
  };

  const setProfileData = (dataName: ProfileType, value: string | number) => {
    const newCharacter = { ...characterDatas };
    if (dataName !== ProfileType.class) {
      newCharacter.profileDatas[dataName].value = value;
    }
    setCharacter(newCharacter);
  };
  
  const setCharacterProfileData = (dataName: ProfileType, value: string | number) => {
    const newCharacter = { ...characterDatas };
    if (dataName !== ProfileType.class) {
      newCharacter.profileDatas[dataName].value = value;
    }

    setCharacter(newCharacter);
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


  return useMemo(
    () => ({
      attributes: characterDatas,
      setStatValue: setStatValue,
      setStatMastered: setStatMastered,
      switchSkillProficiencyLevel: switchSkillProficiencyLevel,
      setClass: setClass,
      setProfileData: setProfileData,
      getDerivedValue: getDerivedValue,
    }),
    [
      characterDatas,
      setStatValue,
      setStatMastered,
      switchSkillProficiencyLevel,
      setClass,
      setProfileData,
      getDerivedValue,
    ]
  );
};

export default useCharacter;
