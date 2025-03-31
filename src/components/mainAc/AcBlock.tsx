import React, { useState } from 'react';
import './AcBlock.scss';
import { Character } from '@/types/characterType';

type ArmorClassProps = {
  character: Character;
};

const ArmorClassBlock = ({ character }: ArmorClassProps) => {
  const [tempHealthPoint, setTempHealthPoint] = useState(0);

  return (
    <div className="armor-class-component">
      <div className="armor-title">
        <strong>Classe d'armure :</strong>
      </div>
      <div className="armor-block">
        <input
          type="text"
          className="total-ac"
          value={character.datas.attributes.armorClass.total}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            character.setTotalAc(parseInt(e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default ArmorClassBlock;
