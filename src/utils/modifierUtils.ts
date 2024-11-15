import { proficiencyBonus } from "../../configs";

export const skillModifier = async (statValue: number, mastered: number) => {
    const rawModifier = Math.floor(statValue / 2) - 5;
  if (mastered === 0) {
    return Math.floor(rawModifier);
  } else if (mastered === 1) {
    return Math.floor(rawModifier + proficiencyBonus.baseProficiency);
  } else if (mastered === 2) {
    return Math.floor(rawModifier + proficiencyBonus.baseProficiency * 2);
  } else if (mastered === 3) {
    return Math.floor(rawModifier + proficiencyBonus.baseProficiency / 2);
  }

  return 0;
};

export const saveThrowModifier = async (
  statValue: number,
  mastered: boolean
) => {
    const rawModifier = Math.floor(statValue / 2) - 5;
  if (mastered === false) {
    return Math.floor(rawModifier);
  } else if (mastered === true) {
    return Math.floor(rawModifier + proficiencyBonus.baseProficiency);
  }
};
