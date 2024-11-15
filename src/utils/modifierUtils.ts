import { proficiencyBonus } from "../../configs";

export const skillModifier = async (rawValue: number, mastered: number) => {
  if (mastered === 0) {
    return Math.floor(rawValue);
  } else if (mastered === 1) {
    return Math.floor(rawValue + proficiencyBonus.baseProficiency);
  } else if (mastered === 2) {
    return Math.floor(rawValue + proficiencyBonus.baseProficiency * 2);
  } else if (mastered === 3) {
    return Math.floor(rawValue + proficiencyBonus.baseProficiency / 2);
  }

  return 0;
};

export const saveThrowModifier = async (
  rawValue: number,
  mastered: boolean
) => {
  if (mastered === false) {
    return Math.floor(rawValue);
  } else if (mastered === true) {
    return Math.floor(rawValue + proficiencyBonus.baseProficiency);
  }
};
