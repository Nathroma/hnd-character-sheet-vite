import { useMemo } from 'react';
import { Character, CharacterDatas } from '@/types/characterType';
import { newDefaultStat, StatType } from '@/types/statType';
import useLocalStorage from './useLocalStorage';
import { newDefaultSkill, SkillType } from '@/types/skillType';
import { newDefaultProfileData, ProfileType } from '@/types/profileType';
import { AttributesType, newDefaultAc, newDefaultHp } from '@/types/attributeType';
import useStats from './useStats';
import useSkills from './useSkills';
import useProfile from './useProfile';
import useAttributes from './useAttributes';
import useEquipment from './useEquipments';
import useSpell from './useSpell';
import usePlayerNote from './usePlayerNote';

const defaultCharacter: CharacterDatas = {
  profileDatas: {
    [ProfileType.name]: newDefaultProfileData(),
    [ProfileType.race]: newDefaultProfileData(),
    [ProfileType.class]: null,
    [ProfileType.alignement]: newDefaultProfileData(),
    [ProfileType.history]: newDefaultProfileData(),
    [ProfileType.level]: newDefaultProfileData(),
    [ProfileType.experience]: newDefaultProfileData(),
  },
  stats: {
    [StatType.FOR]: newDefaultStat(),
    [StatType.DEX]: newDefaultStat(),
    [StatType.CON]: newDefaultStat(),
    [StatType.INT]: newDefaultStat(),
    [StatType.WIS]: newDefaultStat(),
    [StatType.CHA]: newDefaultStat(),
  },
  skills: {
    [SkillType.acrobatics]: newDefaultSkill(),
    [SkillType.arcana]: newDefaultSkill(),
    [SkillType.athletics]: newDefaultSkill(),
    [SkillType.stealth]: newDefaultSkill(),
    [SkillType.animalHandling]: newDefaultSkill(),
    [SkillType.sleightOfHand]: newDefaultSkill(),
    [SkillType.history]: newDefaultSkill(),
    [SkillType.intimidation]: newDefaultSkill(),
    [SkillType.investigation]: newDefaultSkill(),
    [SkillType.medicine]: newDefaultSkill(),
    [SkillType.nature]: newDefaultSkill(),
    [SkillType.perception]: newDefaultSkill(),
    [SkillType.insight]: newDefaultSkill(),
    [SkillType.persuasion]: newDefaultSkill(),
    [SkillType.religion]: newDefaultSkill(),
    [SkillType.performance]: newDefaultSkill(),
    [SkillType.deception]: newDefaultSkill(),
    [SkillType.survival]: newDefaultSkill(),
  },
  attributes: {
    [AttributesType.hp]: newDefaultHp(),
    [AttributesType.ac]: newDefaultAc(),
  },
  inventory: {
    equipments: [],
  },
  playerNotes: {
    note: '',
    knownCharacters: [],
    ImportantItem: [],
  },
  spells: [],
};

const useCharacter = (): Character => {
  const [characterDatas, setCharacter] = useLocalStorage<CharacterDatas>('character', defaultCharacter);

  const stats = useStats(characterDatas, setCharacter);
  const skills = useSkills(characterDatas, setCharacter);
  const profile = useProfile(characterDatas, setCharacter);
  const attributes = useAttributes(characterDatas, setCharacter);
  const equipments = useEquipment(characterDatas, setCharacter);
  const spells = useSpell(characterDatas, setCharacter);
  const playerNote = usePlayerNote(characterDatas, setCharacter);

  return useMemo(
    () => ({
      datas: characterDatas,
      ...stats,
      ...skills,
      ...profile,
      ...attributes,
      ...equipments,
      ...spells,
      ...playerNote,
    }),
    [
      characterDatas,
      stats,
      skills,
      profile,
      attributes,
      equipments,
      spells,
      playerNote,
    ]
  );
};

export default useCharacter;
