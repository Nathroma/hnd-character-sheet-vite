import React from "react";
import "./AttributeBlock.scss";
import NumberInput from "@/UI/numberInput/NumberInput";
import { Character } from "@/types/characterType";
import { attributeColors, attributeImgNames, attributeTitles, AttributeType } from "@/types/attributeType";

type SecondaryStatsProps = {
  character:Character
  attributeType:AttributeType
  onAttributeChange: (value: number) => void;
};

const AttributeBlock = ({
  character,
  attributeType,
  onAttributeChange,
}: SecondaryStatsProps) => {
  const imgPath = `src/assets/icons/secondaryStatsLogos/${attributeImgNames[attributeType]}-logo.png`;
  const imgAlt = `Logo stats ${attributeTitles[attributeType]}`;

  return (
    <div className="wrapper-block">
      <div className="styled-shape" style={{ backgroundColor: attributeColors[attributeType] }}>
        <label className="stats-name">{attributeTitles[attributeType]}</label>
        <div className="input-background">
          <NumberInput
            className="number-input"
            value={character.attributes[attributeType].value}
            onChange={(e:any) => onAttributeChange(e.target.value)}
          />
        </div>
      </div>
      <div className="circle" style={{ borderColor: attributeColors[attributeType] }}>
        <img className="stats-logo" src={imgPath} alt={imgAlt} />
      </div>
    </div>
  );
};

export default AttributeBlock;
