import React, { useState, useEffect } from "react";
import { proficiencyBonus } from "../../../configs";

import NumberInput from "../../UI/numberInput/NumberInput";
import "./SkillBlock.scss";

type SecondarySkillProps = {
  skillName: string;
  attribute: string;
};

const iconPath = "/icons/skillRadioBtn/";

const SkillBlock = ({ skillName, attribute }: SecondarySkillProps) => {
  // Récupérer les valeurs initiales depuis le local storage ou définir des valeurs par défaut
  const getInitialRadioState = () => {
    const savedState = localStorage.getItem(`${skillName}_radioState`);
    return savedState ? JSON.parse(savedState) : 0;
  };

  const getInitialModValue = () => {
    const savedValue = localStorage.getItem(`${skillName}_modValue`);
    return savedValue ? JSON.parse(savedValue) : 0;
  };

  const [radioState, setRadioState] = useState(getInitialRadioState);
  const [modValue, setModValue] = useState(getInitialModValue);

  let actualProficiencyBonus: number = 0;

  // Sauvegarder les valeurs dans le local storage à chaque changement
  useEffect(() => {
    localStorage.setItem(`${skillName}_radioState`, JSON.stringify(radioState));
    localStorage.setItem(`${skillName}_modValue`, JSON.stringify(modValue));
  }, [radioState, modValue, skillName]);

  // Gérer le changement d'état des radio boutons
  const handleRadioClick = () => {
    setRadioState((prevState: any) => (prevState + 1) % 4);
  };

  // Appliquer la valeur du bonus de compétence en fonction de la sélection du radio bouton
  const getRadioIcon = () => {
    switch (radioState) {
      case 1:
        actualProficiencyBonus = proficiencyBonus.baseProficiency;
        return <img src={iconPath + "check.svg"} alt="check" />;
      case 2:
        actualProficiencyBonus = proficiencyBonus.baseProficiency * 2;
        return <img src={iconPath + "doubleCheck.svg"} alt="doubleCheck" />;
      case 3:
        actualProficiencyBonus = Math.floor(
          proficiencyBonus.baseProficiency / 2
        );
        return <img src={iconPath + "half.svg"} alt="halfCheck" />;
      default:
        actualProficiencyBonus = 0;
        return <img src={iconPath + "unselected.svg"} alt="unselected" />;
    }
  };

  // Mettre à jour la valeur du modificateur et ajouter le bonus de compétence
  // const handleStatChange = (e: { target: { value: any } }) => {
  //   let newValue = Number(e.target.value) + actualProficiencyBonus;
  //   if (newValue > 99) newValue = 99;
  //   if (newValue < 0) newValue = 0;
  //   setModValue(newValue);
  // };

  // Retourner la classe CSS en fonction de l'attribut
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
          value={modValue}
          placeholder="0"
          // onChange={(e) => handleStatChange(e)}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default SkillBlock;
