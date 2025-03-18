import React from "react";
import "./AttributeBlock.scss";
import NumberInput from "@/UI/numberInput/NumberInput";
import { Character } from "@/types/characterType";
import { AttributeType } from "@/types/attributeType";

type SecondaryStatsProps = {
  character:Character
  attributeType:AttributeType
  attributeTitle: string;
  color: string;
  imgName: string;
  attributeValue: number
  onAttributeChange: (value: number) => void;
};

const AttributeBlock = ({
  character,
  attributeType,
  attributeTitle,
  color,
  imgName,
  attributeValue,
  onAttributeChange,
}: SecondaryStatsProps) => {
  const imgPath = `src/assets/icons/secondaryStatsLogos/${imgName}-logo.png`;
  const imgAlt = `Logo stats ${attributeTitle}`;

  return (
    <div className="wrapper-block">
      <div className="styled-shape" style={{ backgroundColor: color }}>
        <label className="stats-name">{attributeTitle}</label>
        <div className="input-background">
          <NumberInput
            className="number-input"
            value={attributeValue}
            onChange={(e:any) => onAttributeChange(e.target.value)}
          />
        </div>
      </div>
      <div className="circle" style={{ borderColor: color }}>
        <img className="stats-logo" src={imgPath} alt={imgAlt} />
      </div>
    </div>
  );
};

export default AttributeBlock;
