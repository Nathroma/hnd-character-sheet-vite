import PropTypes from "prop-types";
import "./MainAttribute.scss";
import NumberInput from "src/UI/numberInput/NumberInput";
import LabeledCheckBox from "../../UI/labeledCheckBox/LabeledCheckBox";
import { useState } from "react";

const StatBlock = ({ statTitle }) => {
  const [statNumber, setStatNumber] = useState(0);
  const [modNumber, setModNumber] = useState(0);
  const [saveNumber, setSaveNumber] = useState(0);
  const statTicker = statTitle.substring(0, 3);

  const imgPath = `src/assets/icons/statsLogos/${statTicker}-logo.png`;
  const imgAlt = `Logo stats ${statTitle}`;

  const handleStatChange = (e) => {
    let newValue = e.target.value;
    if (newValue.length > 2) {
      newValue = newValue.slice(0, 2);
    }
    if (newValue < 0) {
      newValue = 0;
    }
    setStatNumber(newValue);
  };

  const handleStatBlur = () => {
    setModNumber(Math.floor(statNumber / 2 - 5));
    setSaveNumber(Math.floor(statNumber / 2 - 5));
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      setModNumber(Math.floor(statNumber / 2 - 5));
      setSaveNumber(Math.floor(statNumber / 2 - 5));
    }
  };

  return (
    <div className="container">
      <div className="stat-element">
        <div className="wrapper-stat-square">
          <div className="stat-square">
            <span className="stat-ticker">{statTicker}</span>
            <span className="stat-title">{statTitle}</span>
            <NumberInput
              value={statNumber}
              onChange={(e) => handleStatChange(e)}
              onBlur={handleStatBlur}
              onKeyDown={handlePressEnter}
              placeholder="10"
              className="stat-input"
            />
          </div>
        </div>
        <div className="stats-icon">
          <img src={imgPath} alt={imgAlt} />
        </div>
        <div className="proficiency-square">
          <span className="mod-value">Valeur de mod.</span>
          <NumberInput
            value={modNumber}
            placeholder="0"
            className="mod-input"
            readOnly="true"
          />
        </div>
        <div className="saving-square">
          <span className="save-value">Valeur de sauv.</span>
          <NumberInput
            value={saveNumber}
            placeholder="0"
            className="save-input"
            readOnly="true"
          />
          <LabeledCheckBox label="Maitrise" />
        </div>
      </div>
    </div>
  );
};

StatBlock.propTypes = {
  statTitle: PropTypes.string.isRequired,
};

export default StatBlock;
