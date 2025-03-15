import { useMemo } from 'react';
import { Character } from '../types/characterType';
import { newDefaultStat, StatType } from '../types/statType';
import useLocalStorage from './useLocalStorage';
import { newDefaultSkill, ProficiencyLevel, SkillType } from '../types/skillType';
import { AttributeType, newDefaultAttribute } from '../types/attributeType';

const defaultCharacter: Character = {
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
    [AttributeType.initiative]: newDefaultAttribute(),
    [AttributeType.inspiration]: newDefaultAttribute(),
    [AttributeType.perception]: newDefaultAttribute(),
    [AttributeType.proficiency]: newDefaultAttribute(),
    [AttributeType.saveThrow]: newDefaultAttribute(),
    [AttributeType.speed]: newDefaultAttribute(),
  },
};

const useCharacter = () => {
  const [character, setCharacter] = useLocalStorage<Character>('character', defaultCharacter);

  const setStatValue = (statType: StatType, value: number) => {
    const newCharacter = { ...character };
    newCharacter.stats[statType].value = value;
    setCharacter(newCharacter);
  };

  const setStatMastered = (statType: StatType, mastered: boolean) => {
    const newCharacter = { ...character };
    newCharacter.stats[statType].mastered = mastered;
    setCharacter(newCharacter);
  };

  const switchSkillProficiencyLevel = (skillType: SkillType) => {
    const newCharacter = { ...character };
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

  const setAttributeValue = (attributeType: AttributeType, value: number) => {
    const newCharacter = { ...character };
    newCharacter.attributes[attributeType].value = value;
    setCharacter(newCharacter);
  };

  return useMemo(
    () => ({
      character: character,
      setStatValue: setStatValue,
      setStatMastered: setStatMastered,
      switchSkillProficiencyLevel: switchSkillProficiencyLevel,
      setAttributeValue: setAttributeValue
    }),
    [character, setStatValue, setStatMastered, switchSkillProficiencyLevel, setAttributeValue]
  );
};

export default useCharacter;
