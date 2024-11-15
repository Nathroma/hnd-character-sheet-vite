import React, { useEffect, useState } from "react";
import "./StatBlock.scss";

import NumberInput from "../../UI/numberInput/NumberInput";
import LabeledCheckBox from "../../UI/labeledCheckBox/LabeledCheckBox";
import { saveThrowModifier } from "../../utils/modifierUtils";

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
  getModifier: () => number;
};

const StatBlock = ({
  statTitle,
  color,
  imgName,
  stat,
  onStatChange,
  onMasteryChange,
  getModifier,
}: StatBlockProps) => {
  const imgPath = `src/assets/icons/statsLogos/${imgName}-logo.png`;
  const imgAlt = `Logo stats ${imgName}`;

  const [saveThrowValue, setSaveThrowValue] = useState(0);

  useEffect(() => {
    saveThrowModifier(stat.value, stat.mastered).then((value) =>
      setSaveThrowValue(value ?? 0)
    );
  });

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
            <NumberInput
              value={stat.value}
              onChange={(e: any) =>
                onStatChange(Math.max(0, Number(e.target.value)))
              }
              placeholder="10"
              className="stat-input"
            />
          </div>
        </div>
        <div className="proficiency-square" style={{ borderColor: color }}>
          <span className="mod-value">Valeur de mod.</span>
          <NumberInput
            value={getModifier()}
            placeholder="0"
            className="mod-input"
            readOnly={true}
          />
        </div>
        <div className="saving-square">
          <span className="save-value">Valeur de sauv.</span>
          <NumberInput
            value={saveThrowValue}
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
