import { useMemo } from "react";
import { Character } from "../types/characterType";
import { newDefaultStat, StatType } from "../types/statType";
import useLocalStorage from "./useLocalStorage";

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
  const [character, setCharacter] = useLocalStorage<Character>("character", defaultCharacter);

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

  return useMemo(
    () => ({
      character: character,
      setStatValue: setStatValue,
      setStatMastered: setStatMastered,
    }),
    [character, setStatValue, setStatMastered]
  );
};

export default useCharacter;
