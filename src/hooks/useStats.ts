import { StatType } from '@/types/statType';
import { CharacterDatas } from '@/types/characterType';

const useStats = (characterDatas: CharacterDatas, setCharacter: (data: CharacterDatas) => void) => {
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

  return { setStatValue, setStatMastered };
};

export default useStats;
