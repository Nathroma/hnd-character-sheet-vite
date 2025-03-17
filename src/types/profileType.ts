import { ClassType } from './classType';

export enum ProfileType {
  name = 'name',
  race = 'race',
  class = 'class',
  alignement = 'alignement',
  history = 'history',
  level = 'level',
  experience = 'experience',
}

export const ProfileNames: Record<ProfileType, string> = {
  [ProfileType.name]: 'Nom',
  [ProfileType.race]: 'Race',
  [ProfileType.class]: 'Classe',
  [ProfileType.alignement]: 'Alignement',
  [ProfileType.history]: 'Historique',
  [ProfileType.level]: 'Niveau',
  [ProfileType.experience]: 'Experience',
};

// export type ProfileData = {
//   firstname: string;
//   lastname: string;
//   race: string;
//   height: string;
//   class: ClassType;
//   alignement: string;
//   history: string;
//   level: number;
//   experience: number;
// };

export type profileData = {
  value: number | string | null;
};

export const newDefaultProfileData = (): profileData => ({ value: null });
