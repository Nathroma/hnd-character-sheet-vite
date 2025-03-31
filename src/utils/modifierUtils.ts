import { proficiencyBonus } from "../../configs";
import { ProficiencyLevel } from "../types/skillType";

export function statModifier(statValue: number): number;
export function statModifier(statValue: number, mastered: boolean): number;
export function statModifier(statValue: number, mastered: string): number;

export function statModifier(
  statValue: number,
  mastered?: boolean | string
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

  if (typeof mastered === "string") {
    if (mastered === ProficiencyLevel.default) {
      return Math.floor(rawModifier);
    } else if (mastered === ProficiencyLevel.master) {
      return Math.floor(rawModifier + proficiencyBonus.baseProficiency);
    } else if (mastered === ProficiencyLevel.expert) {
      return Math.floor(rawModifier + proficiencyBonus.baseProficiency * 2);
    } else if (mastered === ProficiencyLevel.half) {
      return Math.floor(rawModifier + proficiencyBonus.baseProficiency / 2);
    }
  }

  throw new Error("Type inattendu pour le paramètre mastered.");
}
