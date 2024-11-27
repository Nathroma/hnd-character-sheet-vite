import React, { useEffect, useState } from "react";
import "./StatBlock.scss";

import NumberInput from "../../UI/numberInput/NumberInput";
import StringNumberInput from "../../UI/stringNumberInput/StringNumberInput";
import LabeledCheckBox from "../../UI/labeledCheckBox/LabeledCheckBox";
import { statModifier } from "../../utils/modifierUtils";

type StatBlockProps = {
  statTitle: string;
  color: string;
  imgName: string;
  stat: {
    value: number;
    mastered: boolean;
  };
  onStatChange: (value: number) => void;
  onMasteryChange: (mastered: boolean) => void;
};

const StatBlock = ({
  statTitle,
  color,
  imgName,
  stat,
  onStatChange,
  onMasteryChange,
}: StatBlockProps) => {
  const imgPath = `src/assets/icons/statsLogos/${imgName}-logo.png`;
  const imgAlt = `Logo stats ${imgName}`;

  const displayValue = (stat.value !== null ? stat.value : "").toString();

  const handleValueChange = (inputValue: string) => {
    const finalValue: number = parseInt(inputValue);
    // if stat.value === null && finalValue === 0, set stat.value to null
    onStatChange(finalValue!);
  };

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
              {statTitle.substring(0, 3)}
            </span>
            <StringNumberInput
              value={displayValue}
              onChange={(e: any) => handleValueChange(e.target.value)}
              placeholder="10"
              className="stat-input"
            />
          </div>
        </div>
        <div className="proficiency-square" style={{ borderColor: color }}>
          <span className="mod-value">Valeur de mod.</span>
          <NumberInput
            value={statModifier(stat.value)}
            placeholder="0"
            className="mod-input"
            readOnly={true}
          />
        </div>
        <div className="saving-square">
          <span className="save-value">Valeur de sauv.</span>
          <NumberInput
            value={statModifier(stat.value, stat.mastered)}
            placeholder="0"
            className="mod-input"
            readOnly={true}
          />
          <LabeledCheckBox
            label="Maitrise"
            onChange={() => onMasteryChange(!stat.mastered)}
            isChecked={stat.mastered}
          />
        </div>
      </div>
    </div>
  );
};

export default StatBlock;
