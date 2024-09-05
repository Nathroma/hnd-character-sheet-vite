import { useState } from "react";
import { Character, StatName } from "./types";

const defaultSubstats = {
  value: 0,
  modifier: 0,
  mastered: false,
};

const defaultCharacter: Character = {
  stats: {
    [StatName.FOR]: defaultSubstats,
    [StatName.DEX]: defaultSubstats,
    [StatName.CON]: defaultSubstats,
    [StatName.INT]: defaultSubstats,
    [StatName.CHA]: defaultSubstats,
    [StatName.SAG]: defaultSubstats,
  },
};

const useCharacter = () => {
  const [character, setCharacter] = useState<Character>(defaultCharacter);

  const setStatValue = (statName: StatName, value: number) => {

  };

  return {
    character: character,
    setStatValue: setStatValue
  };
};

export default useCharacter;
