import { Character } from '@/types/characterType';
import cx from 'classnames';
import React, { useState } from 'react';
import './AcBlock.scss';

type ArmorClassProps = {
  character: Character;
};

const ArmorClassBlock = ({ character }: ArmorClassProps) => {
  const [tempHealthPoint, setTempHealthPoint] = useState(0);

  return (
    <div className={cx('armor-class-component')}>
      <div className={cx('armor-title')}>
        <strong>Classe d'armure :</strong>
      </div>
      <div className={cx('armor-block')}>
        <input
          type="text"
          className={cx('total-ac')}
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
