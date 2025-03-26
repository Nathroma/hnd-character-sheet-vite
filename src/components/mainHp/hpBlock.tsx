import React, { useState } from 'react';
import './HpBlock.scss';
import { Character } from '@/types/characterType';

type HealthPointProps = {
  character: Character;
};

const HealthPointBlock = ({ character }: HealthPointProps) => {
  const [tempHealthPoint, setTempHealthPoint] = useState(0);

  return (
    <div className="health-point-component">
      <div className="health-title">
        <strong>Santé :</strong>
      </div>
      <div className="health-block">
        <input
          type="text"
          className="current-health"
          value={character.datas.attributes.healthPoint.current}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            character.setCurrentHp(parseInt(e.target.value))
          }
        />
        <input
          type="text"
          className="max-health"
          value={character.datas.attributes.healthPoint.max}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => character.setMaxHp(parseInt(e.target.value))}
        />
        <input
          type="text"
          className="temp-health"
          value={tempHealthPoint}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTempHealthPoint(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default HealthPointBlock;
