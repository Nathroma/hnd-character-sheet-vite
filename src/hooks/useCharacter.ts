import { useMemo, useState } from "react";
import { Character } from "../types/characterType";
import { defaultStat, StatType } from "../types/statType";

const defaultCharacter: Character = {
  stats: {
    [StatType.FOR]: defaultStat,
    [StatType.DEX]: defaultStat,
    [StatType.CON]: defaultStat,
    [StatType.INT]: defaultStat,
    [StatType.WIS]: defaultStat,
    [StatType.CHA]: defaultStat,
  },
};

const useCharacter = () => {
  const [character, setCharacter] = useState<Character>(defaultCharacter);

  const setStatValue = (statType: StatType, value: number) => {
    const newCharacter = {...character}
    newCharacter.stats[statType].value = value
    setCharacter(newCharacter)
  };

  const setStatMastered = (statType: StatType, mastered: boolean) => {
    const newCharacter = {...character}
    newCharacter.stats[statType].mastered = mastered
    setCharacter(newCharacter)
  };

  const getModifier = (statType: StatType): number => {
    const baseModifier = Math.floor(character.stats[statType].value / 2) - 5;
    const masteryBonus = character.stats[statType].mastered ? baseModifier : 0;
  
    return baseModifier + masteryBonus;
  }

  return useMemo(() => ({
    character: character,
    setStatValue: setStatValue,
    setStatMastered: setStatMastered
  }), [character, setStatValue, setStatMastered]);
};

export default useCharacter;
