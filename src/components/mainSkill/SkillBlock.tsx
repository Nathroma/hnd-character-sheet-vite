import React, { useState, useEffect } from 'react';
import { statModifier } from '@/utils/modifierUtils';
import StringNumberInput from '@/UI/stringNumberInput/StringNumberInput';
import './SkillBlock.scss';
import { ProficiencyLevel, skillAttributes, skillNames, SkillType } from '@/types/skillType';
import { Character } from '@/types/characterType';

type SecondarySkillProps = {
  character: Character;
  skillType: SkillType;
};

const iconPath = './src/assets/icons/skillRadioBtn/';

const SkillBlock = ({ character, skillType }: SecondarySkillProps) => {
  const [skillModValue, setSkillModValue] = useState('');

  useEffect(() => {
    const modifier = statModifier(
      character.datas.stats[skillAttributes[skillType]].value,
      2,
      character.datas.skills[skillType].proficiencyLevel
    );
    const finalValue = modifier > -5 ? modifier.toString() : '';
    setSkillModValue(finalValue);
  });

  return (
    <div className="skill-component">
      <div className="wrapper-checkbox">
        <div className="radio-button" onClick={() => character.switchSkillProficiencyLevel(skillType)}>
          {{
            master: <img src={iconPath + 'check.svg'} alt="check" />,
            expert: <img src={iconPath + 'doubleCheck.svg'} alt="doubleCheck" />,
            half: <img src={iconPath + 'half.svg'} alt="halfCheck" />,
            default: <img src={iconPath + 'unselected.svg'} alt="unselected" />,
          }[character.datas.skills[skillType].proficiencyLevel]}
        </div>
        <span className="skill-name">{skillNames[skillType]}</span>
      </div>
      <div className="wrapper-input">
        <span className={`attribute-label ${skillAttributes[skillType]}`}>{skillAttributes[skillType]}</span>
        <StringNumberInput value={skillModValue} placeholder="0" readOnly={true} />
      </div>
    </div>
  );
};

export default SkillBlock;
