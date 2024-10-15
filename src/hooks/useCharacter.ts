import { useState } from "react";
import { Character } from "../types/characterType";
import { StatType } from "../types/statType";

const defaultSubstats = {
  value: 0,
  modifier: 0,
  mastered: false,
};

const defaultCharacter: Character = {
  stats: {
    [StatType.FOR]: defaultSubstats,
    [StatType.DEX]: defaultSubstats,
    [StatType.CON]: defaultSubstats,
    [StatType.INT]: defaultSubstats,
    [StatType.WIS]: defaultSubstats,
    [StatType.CHA]: defaultSubstats,
  },
};

const useCharacter = () => {
  const [character, setCharacter] = useState<Character>(defaultCharacter);

  const setStatValue = (statName: StatType, value: number) => {};

  return {
    character: character,
    setStatValue: setStatValue,
  };
};

export default useCharacter;
