import React from "react";
import { useState, useEffect } from "react";
import { proficiencyBonus } from "../../../configs";
import "./StatBlock.scss";

import NumberInput from "../../UI/numberInput/NumberInput";
import LabeledCheckBox from "../../UI/labeledCheckBox/LabeledCheckBox";

type StatBlockProps = {
  statTitle: string;
  color: string;
};

const StatBlock = ({ statTitle, color }: StatBlockProps) => {
  const statTicker = statTitle.substring(0, 3);

  const getInitialStatNumber = () => {
    const savedStat = localStorage.getItem(`${statTicker}_statNumber`);
    return savedStat ? JSON.parse(savedStat) : 0;
  };

  const getInitialIsChecked = () => {
    const savedChecked = localStorage.getItem(`${statTicker}_isChecked`);
    return savedChecked ? JSON.parse(savedChecked) : false;
  };

  const [modNumber, setModNumber] = useState(0);
  const [isChecked, setChecked] = useState(getInitialIsChecked);

  const imgPath = `src/assets/icons/statsLogos/${statTicker}-logo.png`;
  const imgAlt = `Logo stats ${statTicker}`;

  const handleStatChange = (e: { target: { value: any } }) => {
    let newValue = e.target.value;
    if (newValue.length > 2) {
      newValue = newValue.slice(0, 2);
    }
    if (newValue < 0) {
      newValue = 0;
    }
    setModNumber(newValue);
  };

  const proficiency = isChecked ? proficiencyBonus.baseProficiency : 0;
  const saveNumber = modNumber + proficiency;

  return (
    <div className="container">
      <div className="stat-element">
        <div className="stats-icon">
          <img src={imgPath} alt={imgAlt} />
        </div>
        <div className="stat-title">
          <span style={{ color: color }}>{statTitle}</span>
        </div>
        <div className="wrapper-stat-square">
          <div className="stat-square">
            <span className="stat-ticker" style={{ color: color }}>
              {statTicker}
            </span>
            <NumberInput
              value={modNumber}
              // onChange={(e: any) => handleStatChange(e)}
              onChange={handleStatChange}
              onBlur={() => setModNumber(Math.floor(Number(modNumber) / 2 - 5))}
              placeholder="10"
              className="stat-input"
            />
          </div>
        </div>
        <div className="proficiency-square" style={{ borderColor: color }}>
          <span className="mod-value">Valeur de mod.</span>
          <NumberInput
            value={modNumber}
            placeholder="0"
            className="mod-input"
            readOnly={true}
          />
        </div>
        <div className="saving-square">
          <span className="save-value">Valeur de sauv.</span>
          <NumberInput
            value={saveNumber}
            placeholder="0"
            className="save-input"
            readOnly={true}
          />
          <LabeledCheckBox
            label="Maitrise"
            onChange={() => setChecked((previous: boolean) => !previous)}
            isChecked={isChecked}
          />
        </div>
      </div>
    </div>
  );
};

export default StatBlock;
