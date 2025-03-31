import React, { useState } from "react";
import "./AttributeBlock.scss";
import NumberInput from "../../UI/numberInput/NumberInput";

type SecondaryStatsProps = {
  attributeTitle: string;
  color: string;
  imgName: string;
};

const AttributeBlock = ({
  attributeTitle,
  color,
  imgName,
}: SecondaryStatsProps) => {
  const [attributeValue, setModNumber] = useState(0);

  const imgPath = `src/assets/icons/secondaryStatsLogos/${imgName}-logo.png`;
  const imgAlt = `Logo stats ${attributeTitle}`;

  const handleChange = (e: { target: { value: any } }) => {
    let newValue = e.target.value;
    setModNumber(newValue);
  };

  return (
    <div className="wrapper-block">
      <div className="styled-shape" style={{ backgroundColor: color }}>
        <label className="stats-name">{attributeTitle}</label>
        <div className="input-background">
          <NumberInput
            className="number-input"
            value={attributeValue}
            onChange={(e) => handleChange(e)}
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
