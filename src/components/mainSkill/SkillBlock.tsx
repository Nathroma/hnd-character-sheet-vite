import React, { useState, useEffect } from "react";
import { statModifier } from "@/utils/modifierUtils";
import StringNumberInput from "@/UI/stringNumberInput/StringNumberInput";
import "./SkillBlock.scss";
import { ProficiencyLevel } from "@/types/skillType";

type SecondarySkillProps = {
  skillName: string;
  attribute: string;
  stat: {
    value: number;
    mastered: boolean;
  };
  proficiencyLevel: string;
  proficiencyBonus: number;
  onProficiencyChange: () => void;
};

const iconPath = "/icons/skillRadioBtn/";

const SkillBlock = ({ skillName, attribute, stat, proficiencyLevel, proficiencyBonus, onProficiencyChange}: SecondarySkillProps) => {

  const [skillModValue, setSkillModValue] = useState("");

  useEffect(() => {
    const modifier = statModifier(stat.value, proficiencyBonus, proficiencyLevel)
    const finalValue = modifier > -5 ? modifier.toString() : "";
    setSkillModValue(finalValue)
  });

  const getRadioIcon = () => {
    switch (proficiencyLevel) {
      case ProficiencyLevel.master:
        return <img src={iconPath + "check.svg"} alt="check" />;
      case ProficiencyLevel.expert:
        return <img src={iconPath + "doubleCheck.svg"} alt="doubleCheck" />;
      case ProficiencyLevel.half:
        return <img src={iconPath + "half.svg"} alt="halfCheck" />;
      default:
        return <img src={iconPath + "unselected.svg"} alt="unselected" />;
    }
  };

  const getAttributeClass = () => {
    return attribute;
  };

  return (
    <div className="skill-component">
      <div className="wrapper-checkbox">
        <div className="radio-button" onClick={() => onProficiencyChange()}>
          {getRadioIcon()}
        </div>
        <span className="skill-name">{skillName}</span>
      </div>
      <div className="wrapper-input">
        <span className={`attribute-label ${getAttributeClass()}`}>
          {attribute}
        </span>
        <StringNumberInput value={skillModValue} placeholder="0" readOnly={true} />
      </div>
    </div>
  );
};

export default SkillBlock;
