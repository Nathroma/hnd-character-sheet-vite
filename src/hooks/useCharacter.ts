import { useMemo, useState } from "react";
import { Character } from "../types/characterType";
import { newDefaultStat, StatType } from "../types/statType";

const defaultCharacter: Character = {
  stats: {
    [StatType.FOR]: newDefaultStat(),
    [StatType.DEX]: newDefaultStat(),
    [StatType.CON]: newDefaultStat(),
    [StatType.INT]: newDefaultStat(),
    [StatType.WIS]: newDefaultStat(),
    [StatType.CHA]: newDefaultStat(),
  },
};

const useCharacter = () => {
  const [character, setCharacter] = useState<Character>(defaultCharacter);

  const setStatValue = (statType: StatType, value: number | null) => {
    const newCharacter = { ...character };
    newCharacter.stats[statType].value = value;
    setCharacter(newCharacter);
  };

  const setStatMastered = (statType: StatType, mastered: boolean) => {
    const newCharacter = { ...character };
    newCharacter.stats[statType].mastered = mastered;
    setCharacter(newCharacter);
  };

  const getModifier = (statType: StatType): number  => {
    if (character.stats[statType].value !== null) {
      return Math.floor(character.stats[statType].value / 2) - 5;
    }
    return 0;
  };

  return useMemo(
    () => ({
      character: character,
      setStatValue: setStatValue,
      setStatMastered: setStatMastered,
      getModifier: getModifier,
    }),
    [character, setStatValue, setStatMastered, getModifier]
  );
};

export default useCharacter;
