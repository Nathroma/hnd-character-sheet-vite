import React, { useState, useEffect } from "react";
import { skillModifier } from "../../utils/modifierUtils";

import NumberInput from "../../UI/numberInput/NumberInput";
import "./SkillBlock.scss";

type SecondarySkillProps = {
  skillName: string;
  attribute: string;
  stat: {
    value: number;
    mastered: boolean;
  };
};

const iconPath = "/icons/skillRadioBtn/";

const SkillBlock = ({ skillName, attribute, stat }: SecondarySkillProps) => {
  const getInitialRadioState = () => {
    const savedState = localStorage.getItem(`${skillName}_radioState`);
    return savedState ? JSON.parse(savedState) : 0;
  };

  const [radioState, setRadioState] = useState(getInitialRadioState);

  const [skillModValue, setSkillModValue] = useState(0);

  useEffect(() => {
    skillModifier(stat.value, radioState).then((value) =>
      setSkillModValue(value ?? 0)
    );

    localStorage.setItem(`${skillName}_radioState`, JSON.stringify(radioState));
  }, [radioState, skillName]);

  const handleRadioClick = () => {
    setRadioState((prevState: any) => (prevState + 1) % 4);
  };

  const getRadioIcon = () => {
    switch (radioState) {
      case 1:
        console.log(`Radio State : ${radioState}`);
        return <img src={iconPath + "check.svg"} alt="check" />;
      case 2:
        console.log(`Radio State : ${radioState}`);
        return <img src={iconPath + "doubleCheck.svg"} alt="doubleCheck" />;
      case 3:
        console.log(`Radio State : ${radioState}`);
        return <img src={iconPath + "half.svg"} alt="halfCheck" />;
      default:
        console.log(`Radio State : ${radioState}`);
        return <img src={iconPath + "unselected.svg"} alt="unselected" />;
    }
  };

  const getAttributeClass = () => {
    return attribute;
  };

  return (
    <div className="skill-component">
      <div className="wrapper-checkbox">
        <div className="radio-button" onClick={handleRadioClick}>
          {getRadioIcon()}
        </div>
        <span className="skill-name">{skillName}</span>
      </div>
      <div className="wrapper-input">
        <span className={`attribute-label ${getAttributeClass()}`}>
          {attribute}
        </span>
        <NumberInput
          value={skillModValue}
          placeholder="0"
          // onChange={(e) => handleStatChange(e)}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default SkillBlock;
