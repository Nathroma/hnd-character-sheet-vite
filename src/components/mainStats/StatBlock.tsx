import React from 'react';
import './StatBlock.scss';
import NumberInput from '@/UI/numberInput/NumberInput';
import StringNumberInput from '@/UI/stringNumberInput/StringNumberInput';
import LabeledCheckBox from '@/UI/labeledCheckBox/LabeledCheckBox';
import { statModifier } from '@/utils/modifierUtils';
import { statColors, statNames, StatType } from '@/types/statType';
import { Character } from '@/types/characterType';

type StatBlockProps = {
  character:Character
  statType:StatType
  onStatChange: (value: number) => void;
  onMasteryChange: (mastered: boolean) => void;
};

const StatBlock = ({
  character,
  statType,
  onStatChange,
  onMasteryChange,
}: StatBlockProps) => {
  const imgPath = `src/assets/icons/statsLogos/${statType}-logo.png`;
  const imgAlt = `Logo stats ${statType}`;

  const displayValue = (character.stats[statType].value !== null ? character.stats[statType].value : '').toString();

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
          <span style={{ color: statColors[statType] }}>{statNames[statType]}</span>
        </div>
        <div className="wrapper-stat-square">
          <div className="stat-square">
            <span className="stat-ticker" style={{ color: statColors[statType] }}>
              {statNames[statType].substring(0, 3)}
            </span>
            <StringNumberInput
              value={displayValue}
              onChange={(e: any) => handleValueChange(e.target.value)}
              placeholder="10"
              className="stat-input"
            />
          </div>
        </div>
        <div className="proficiency-square" style={{ borderColor: statColors[statType] }}>
          <span className="mod-value">Valeur de mod.</span>
          <NumberInput
            value={statModifier(character.stats[statType].value)}
            placeholder="0"
            className="mod-input"
            readOnly={true}
          />
        </div>
        <div className="saving-square">
          <span className="save-value">Valeur de sauv.</span>
          <NumberInput
            value={statModifier(character.stats[statType].value, character.attributes.proficiency.value, character.stats[statType].mastered)}
            placeholder="0"
            className="mod-input"
            readOnly={true}
          />
          <LabeledCheckBox
            label="Maitrise"
            onChange={() => onMasteryChange(!character.stats[statType].mastered)}
            isChecked={character.stats[statType].mastered}
          />
        </div>
      </div>
    </div>
  );
};

export default StatBlock;
