import { useMemo } from 'react';
import { Character, CharacterDatas } from '@/types/characterType';
import { newDefaultStat, StatType } from '@/types/statType';
import useLocalStorage from './useLocalStorage';
import { newDefaultSkill, ProficiencyLevel, SkillType } from '@/types/skillType';
import { newDefaultProfileData, ProfileType } from '@/types/profileType';
import { ClassType } from '@/types/classType';
import { DerivedValueType } from '@/types/derivedValueType';
import { AttributesType, newDefaultAc, newDefaultHp } from '@/types/attributeType';
import { Equipment } from '@/types/itemType';
import { SpellType } from '@/types/spellType';

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
  spells: [],
};

const useCharacter = (): Character => {
  const [characterDatas, setCharacter] = useLocalStorage<CharacterDatas>('character', defaultCharacter);

  const setStatValue = (statType: StatType, value: number): void => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.stats[statType].value = value;
    setCharacter(newCharacterDatas);
  };

  const setStatMastered = (statType: StatType, mastered: boolean) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.stats[statType].mastered = mastered;
    setCharacter(newCharacterDatas);
  };

  const switchSkillProficiencyLevel = (skillType: SkillType) => {
    const newCharacterDatas = { ...characterDatas };
    const levels: ProficiencyLevel[] = [
      ProficiencyLevel.default,
      ProficiencyLevel.master,
      ProficiencyLevel.expert,
      ProficiencyLevel.half,
    ];

    const currentLevel = newCharacterDatas.skills[skillType].proficiencyLevel;
    const currentIndex = levels.indexOf(currentLevel);

    const nextIndex = (currentIndex + 1) % levels.length;
    newCharacterDatas.skills[skillType].proficiencyLevel = levels[nextIndex];
    setCharacter(newCharacterDatas);
  };

  const setClass = (newClass: ClassType) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.profileDatas.class = newClass;
    setCharacter(newCharacterDatas);
  };

  const setProfileData = (dataName: ProfileType, value: string | number) => {
    const newCharacterDatas = { ...characterDatas };
    
    if (dataName !== ProfileType.class) {
      newCharacterDatas.profileDatas[dataName].value = value;
    }
    setCharacter(newCharacterDatas);
  };

  const getDerivedValue = (dataName: DerivedValueType): number => {
    if (dataName === DerivedValueType.initiative) {
      return characterDatas.stats.DEX.value;
    }
    if (dataName === DerivedValueType.inspiration) {
      return 0;
    }
    if (dataName === DerivedValueType.perception) {
      return 10 + characterDatas.skills.perception.value;
    }
    if (dataName === DerivedValueType.proficiency) {
      return 3;
    }
    if (dataName === DerivedValueType.saveThrow) {
      return 0;
    }
    if (dataName === DerivedValueType.speed) {
      return 9;
    }
    return 0;
  };

  const setMaxHp = (value: number) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.attributes.healthPoint.max = value;
    setCharacter(newCharacterDatas);
  };

  const setCurrentHp = (value: number) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.attributes.healthPoint.current = value;
    setCharacter(newCharacterDatas);
  };

  const setTotalAc = (value: number) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.attributes.armorClass.total = value;
    setCharacter(newCharacterDatas);
  };

  const addEquipement = (equipement: Equipment) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.inventory.equipments.push(equipement);
    setCharacter(newCharacterDatas);
  };

  const editEquipement = (equipementId: number, equipement: Equipment) => {
    const newCharacterDatas = { ...characterDatas };
    const index = newCharacterDatas.inventory.equipments.findIndex(e => e.id === equipementId);
    if (index !== -1) {
      newCharacterDatas.inventory.equipments[index] = equipement;
      setCharacter(newCharacterDatas);
    }
  };

  const removeEquipement = (equipementId: number) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.inventory.equipments = newCharacterDatas.inventory.equipments.filter(equipement => equipement.id !== equipementId);
    setCharacter(newCharacterDatas);
  };

  const addSpell = (spell: SpellType) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.spells.push(spell);
    setCharacter(newCharacterDatas);
  };

  const editSpell = (spellId: number, spell: SpellType) => {
    const newCharacterDatas = { ...characterDatas };
    const index = newCharacterDatas.spells.findIndex(spell => spell.id === spellId);
    if (index !== -1) {
      newCharacterDatas.spells[index] = spell;
      setCharacter(newCharacterDatas);
    }
  };

  const removeSpell = (spellId: number) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.spells = newCharacterDatas.spells.filter(spell => spell.id !== spellId);
    setCharacter(newCharacterDatas);
  };


  return useMemo(
    () => ({
      datas: characterDatas,
      setStatValue: setStatValue,
      setStatMastered: setStatMastered,
      switchSkillProficiencyLevel: switchSkillProficiencyLevel,
      setClass: setClass,
      setProfileData: setProfileData,
      getDerivedValue: getDerivedValue,
      setMaxHp: setMaxHp,
      setCurrentHp: setCurrentHp,
      setTotalAc: setTotalAc,
      addEquipement: addEquipement,
      editEquipement: editEquipement,
      removeEquipement: removeEquipement,
      addSpell: addSpell,
      editSpell: editSpell,
      removeSpell: removeSpell,
    }),
    [
      characterDatas,
      setStatValue,
      setStatMastered,
      switchSkillProficiencyLevel,
      setClass,
      setProfileData,
      getDerivedValue,
      setMaxHp,
      setCurrentHp,
      setTotalAc,
      addEquipement,
      editEquipement,
      removeEquipement,
      addSpell,
      editSpell,
      removeSpell,
    ]
  );
};

export default useCharacter;
