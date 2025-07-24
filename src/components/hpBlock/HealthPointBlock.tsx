import { Character } from '@/types/characterType';
import cx from 'classnames';
import React, { useState } from 'react';
import './HealthPointBlock.scss';

type HealthPointProps = {
  character: Character;
};

export const HealthPointBlock = ({ character }: HealthPointProps) => {
  const [tempHealthPoint, setTempHealthPoint] = useState(0);
  const [hitDiceCurrent, setHitDiceCurrent] = useState(3);
  const [hitDiceMax, setHitDiceMax] = useState(3);

  const currentHp = character.datas.attributes.healthPoint.current;
  const maxHp = character.datas.attributes.healthPoint.max;
  const hpPercentage = maxHp > 0 ? (currentHp / maxHp) * 100 : 0;
  const hitDicePercentage =
    hitDiceMax > 0 ? (hitDiceCurrent / hitDiceMax) * 100 : 0;

  return (
    <div className={cx('health-point-component')}>
      {/* Hit Points Bar */}
      <div className={cx('health-section')}>
        <div className={cx('health-label')}>HIT POINTS</div>
        <div className={cx('health-bar-container')}>
          <div className={cx('health-bar')}>
            <div
              className={cx('health-fill')}
              style={{ width: `${hpPercentage}%` }}
            >
              <span className={cx('health-text')}>
                <input
                  type="text"
                  className={cx('current-health')}
                  value={character.datas.attributes.healthPoint.current}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    character.setCurrentHp(parseInt(e.target.value))
                  }
                />
                <span className={cx('health-text')}>/</span>
                <input
                  type="text"
                  className={cx('max-health')}
                  value={character.datas.attributes.healthPoint.max}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    character.setMaxHp(parseInt(e.target.value))
                  }
                />
              </span>
            </div>
            <div className={cx('temp-health-section')}>
              <div className={cx('temp-bar-container')}>
                <div className={cx('temp-bar')}>
                  <div className={cx('temp-fill')}>
                    <span className={cx('health-text')}>{tempHealthPoint}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hit Dice Bar */}
      <div className={cx('hit-dice-section')}>
        <div className={cx('hit-dice-label')}>HIT DICE</div>
        <div className={cx('hit-dice-bar-container')}>
          <div className={cx('hit-dice-bar')}>
            <div
              className={cx('hit-dice-fill')}
              style={{ width: `${hitDicePercentage}%` }}
            >
              <span className={cx('health-text')}>
                {hitDiceCurrent} / {hitDiceMax}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
