import { Character } from '@/types/characterType';
import cx from 'classnames';
import React, { useState } from 'react';
import './HpBlock.scss';

type HealthPointProps = {
  character: Character;
};

const HealthPointBlock = ({ character }: HealthPointProps) => {
  const [tempHealthPoint, setTempHealthPoint] = useState(0);

  return (
    <div className={cx('health-point-component')}>
      <div className={cx('health-title')}>
        <strong>Santé :</strong>
      </div>
      <div className={cx('health-block')}>
        <input
          type="text"
          className={cx('current-health')}
          value={character.datas.attributes.healthPoint.current}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            character.setCurrentHp(parseInt(e.target.value))
          }
        />
        <input
          type="text"
          className={cx('max-health')}
          value={character.datas.attributes.healthPoint.max}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => character.setMaxHp(parseInt(e.target.value))}
        />
        <input
          type="text"
          className={cx('temp-health')}
          value={tempHealthPoint}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTempHealthPoint(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default HealthPointBlock;
