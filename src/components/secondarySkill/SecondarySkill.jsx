import React, { useState } from "react";
import "./SecondarySkill.scss";

const iconPath = "/icons/skillRadioBtn/";

const SecondarySkill = ({ skillName, attribute }) => {
  const [radioState, setRadioState] = useState(0);

  const handleRadioClick = () => {
    setRadioState((prevState) => (prevState + 1) % 4);
  };

  const getRadioIcon = () => {
    switch (radioState) {
      case 1:
        return <img src={iconPath + "check.svg"} alt="check" />;
      case 2:
        return <img src={iconPath + "doubleCheck.svg"} alt="doubleCheck" />;
      case 3:
        return <img src={iconPath + "half.svg"} alt="halfCheck" />;
      default:
        return <img src={iconPath + "unselected.svg"} alt="unselected" />;
    }
  };

  const getAttributeClass = () => {
    switch (attribute) {
      case "STR":
        return "red";
      case "DEX":
        return "orange";
      case "CON":
        return "yellow";
      case "INT":
        return "blue";
      case "WIS":
        return "green";
      case "CHA":
        return "purple";
      default:
        return "";
    }
  };

  return (
    <div className="skill-component">
      <div className="radio-button" onClick={handleRadioClick}>
        {getRadioIcon()}
      </div>
      <span className="skill-name">{skillName}</span>
      <span className={`attribute-label ${getAttributeClass()}`}>
        {attribute}
      </span>
      <input
        type="text"
        className="skill-input"
        maxLength="2"
        defaultValue={0}
      />
    </div>
  );
};

export default SecondarySkill;
