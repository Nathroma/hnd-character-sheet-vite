import { SkillType, ProficiencyLevel } from '@/types/skillType';
import { CharacterDatas } from '@/types/characterType';

const useSkills = (characterDatas: CharacterDatas, setCharacter: (data: CharacterDatas) => void) => {
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

  return { switchSkillProficiencyLevel };
};

export default useSkills;
