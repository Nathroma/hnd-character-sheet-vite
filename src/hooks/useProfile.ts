import { ProfileType } from '@/types/profileType';
import { CharacterDatas } from '@/types/characterType';
import { ClassType } from '@/types/classType';

const useProfile = (characterDatas: CharacterDatas, setCharacter: (data: CharacterDatas) => void) => {
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

  return { setClass, setProfileData };
};

export default useProfile;
