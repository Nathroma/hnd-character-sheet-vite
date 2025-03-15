import { ProficiencyLevel } from '../types/skillType';

export function statModifier(statValue: number, proficiencyBonus?: number): number;
export function statModifier(statValue: number, proficiencyBonus?: number, mastered?: boolean): number;
export function statModifier(statValue: number, proficiencyBonus?: number, mastered?: string): number;

export function statModifier(
  statValue: number,
  proficiencyBonus: number = 0,
  mastered?: boolean | string
): number {
  const rawModifier: number = Math.floor(statValue / 2) - 5;
  const formattedProficiencyBonus: number =
    typeof proficiencyBonus === 'string' ? Number(proficiencyBonus) : proficiencyBonus ?? 0;

  if (mastered === undefined) {
    return rawModifier;
  }

  if (typeof mastered === 'boolean') {
    if (mastered === false) {
      return rawModifier;
    } else {
      return rawModifier + formattedProficiencyBonus;
    }
  }

  if (typeof mastered === 'string') {
    if (mastered === ProficiencyLevel.default) {
      return Math.floor(rawModifier);
    } else if (mastered === ProficiencyLevel.master) {
      return Math.floor(rawModifier + formattedProficiencyBonus);
    } else if (mastered === ProficiencyLevel.expert) {
      return Math.floor(rawModifier + formattedProficiencyBonus * 2);
    } else if (mastered === ProficiencyLevel.half) {
      return Math.floor(rawModifier + formattedProficiencyBonus / 2);
    }
  }

  throw new Error('Type inattendu pour le paramètre mastered.');
}
