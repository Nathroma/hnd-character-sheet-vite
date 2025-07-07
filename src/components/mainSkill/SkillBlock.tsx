import { Character } from "@/types/characterType";
import { skillAttributes, skillNames, SkillType } from "@/types/skillType";
import StringNumberInput from "@/UI/stringNumberInput/StringNumberInput";
import { statModifier } from "@/utils/modifierUtils";
import React, { useEffect, useState } from "react";
import "./SkillBlock.scss";

type SecondarySkillProps = {
  character: Character;
  skillType: SkillType;
};

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
            master: <img src="/assets/icons/skillRadioBtn/check.svg" alt="check" />,
            expert: <img src="/assets/icons/skillRadioBtn/doubleCheck.svg" alt="doubleCheck" />,
            half: <img src="/assets/icons/skillRadioBtn/half.svg" alt="halfCheck" />,
            default: <img src="/assets/icons/skillRadioBtn/unselected.svg" alt="unselected" />,
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
