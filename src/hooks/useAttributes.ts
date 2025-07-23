import { CharacterDatas } from '@/types/characterType';
import { DerivedValueType } from '@/types/derivedValueType';

const useAttributes = (characterDatas: CharacterDatas, setCharacter: (data: CharacterDatas) => void) => {
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

  return { setMaxHp, setCurrentHp, setTotalAc, getDerivedValue };
};

export default useAttributes;
