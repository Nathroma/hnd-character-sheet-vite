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

// todo : add an overload to calculate with the mastered level only if provided

export function statModifier(statValue: number, mastered?: boolean): number {
  const rawModifier = Math.floor(statValue / 2) - 5;

  // Si mastered n'est pas passé, retourne seulement rawModifier
  if (mastered === undefined) {
    return rawModifier;
  }

  // Si mastered est false ou true, applique la logique en conséquence
  if (mastered === false) {
    return rawModifier;
  } else {
    return rawModifier + proficiencyBonus.baseProficiency;
  }
}
