import { Character } from '@/types/characterType';
import { derivedValueColors, derivedValueImgNames, derivedValueTitles, DerivedValueType } from '@/types/derivedValueType';
import NumberInput from '@/UI/numberInput/NumberInput';
import cx from 'classnames';
import React from 'react';
import './DerivedValueBlock.scss';

type DerivedValueProps = {
  character: Character;
  derivedValueType: DerivedValueType;
};

const DerivedValueBlock = ({ character, derivedValueType }: DerivedValueProps) => {
  const imgPath = `/assets/icons/secondaryStatsLogos/${derivedValueImgNames[derivedValueType]}-logo.png`;
  const imgAlt = `Logo stats ${derivedValueTitles[derivedValueType]}`;

  return (
    <div className={cx('wrapper-block')}>
      <div className={cx('styled-shape')} style={{ backgroundColor: derivedValueColors[derivedValueType] }}>
        <label className={cx('stats-name')}>{derivedValueTitles[derivedValueType]}</label>
        <div className="input-background">
          <NumberInput className="number-input" value={character.getDerivedValue(derivedValueType)} />
        </div>
      </div>
      <div className="circle" style={{ borderColor: derivedValueColors[derivedValueType] }}>
        <img className="stats-logo" src={imgPath} alt={imgAlt} />
      </div>
    </div>
  );
};

export default DerivedValueBlock;
