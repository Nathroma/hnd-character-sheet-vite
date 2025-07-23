import { Character } from '@/types/characterType';
import { statColors, statNames, StatType } from '@/types/statType';
import LabeledCheckBox from '@/UI/labeledCheckBox/LabeledCheckBox';
import NumberInput from '@/UI/numberInput/NumberInput';
import StringNumberInput from '@/UI/stringNumberInput/StringNumberInput';
import { statModifier } from '@/utils/modifierUtils';
import cx from 'classnames';
import React from 'react';
import './StatBlock.scss';

type StatBlockProps = {
  character: Character;
  statType: StatType;
};

const StatBlock = ({ character, statType }: StatBlockProps) => {
  const imgPath = `/assets/icons/statsLogos/${statType}-logo.png`;
  const imgAlt = `Logo stats ${statType}`;

  const displayValue = (
    character.datas.stats[statType].value !== null ? character.datas.stats[statType].value : ''
  ).toString();

  const handleValueChange = (inputValue: string) => {
    const finalValue: number = parseInt(inputValue);
    // if stat.value === null && finalValue === 0, set stat.value to null
    character.setStatValue(statType, finalValue!);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('stat-element')}>
        <div className={cx('stats-icon')}>
          <img src={imgPath} alt={imgAlt} />
        </div>
        <div className={cx('stat-title')}>
          <span style={{ color: statColors[statType] }}>{statNames[statType]}</span>
        </div>
        <div className={cx('wrapper-stat-square')}>
          <div className={cx('stat-square')}>
            <span className={cx('stat-ticker')} style={{ color: statColors[statType] }}>
              {statNames[statType].substring(0, 3)}
            </span>
            <StringNumberInput
              value={displayValue}
              onChange={(e: any) => handleValueChange(e.target.value)}
              placeholder="10"
              className={cx('stat-input')}
            />
          </div>
        </div>
        <div className={cx('proficiency-square')} style={{ borderColor: statColors[statType] }}>
          <span className={cx('mod-value')}>Valeur de mod.</span>
          <NumberInput
            value={statModifier(character.datas.stats[statType].value)}
            placeholder="0"
            className={cx('mod-input')}
            readOnly={true}
          />
        </div>
        <div className={cx('saving-square')}>
          <span className={cx('save-value')}>Valeur de sauv.</span>
          <NumberInput
            value={statModifier(
              character.datas.stats[statType].value,
              2,
              character.datas.stats[statType].mastered
            )}
            placeholder="0"
            className={cx('mod-input')}
            readOnly={true}
          />
          <LabeledCheckBox
            label="Maitrise"
            onChange={() => character.setStatMastered(statType, !character.datas.stats[statType].mastered)}
            isChecked={character.datas.stats[statType].mastered}
          />
        </div>
      </div>
    </div>
  );
};

export default StatBlock;
