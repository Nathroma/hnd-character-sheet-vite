import { proficiencyBonus } from "../../configs";

export function statModifier(statValue: number): number;
export function statModifier(statValue: number, mastered: boolean): number;
export function statModifier(statValue: number, mastered: number): number;

export function statModifier(
  statValue: number,
  mastered?: boolean | number
): number {
  const rawModifier = Math.floor(statValue / 2) - 5;

  if (mastered === undefined) {
    return rawModifier;
  }

  if (typeof mastered === "boolean") {
    if (mastered === false) {
      return rawModifier;
    } else {
      return rawModifier + proficiencyBonus.baseProficiency;
    }
  }

  if (typeof mastered === "number") {
    if (mastered === 0) {
      return Math.floor(rawModifier);
    } else if (mastered === 1) {
      return Math.floor(rawModifier + proficiencyBonus.baseProficiency);
    } else if (mastered === 2) {
      return Math.floor(rawModifier + proficiencyBonus.baseProficiency * 2);
    } else if (mastered === 3) {
      return Math.floor(rawModifier + proficiencyBonus.baseProficiency / 2);
    }
  }

  throw new Error("Type inattendu pour le paramètre mastered.");
}
