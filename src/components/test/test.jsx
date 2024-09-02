import PropTypes from "prop-types";
import "./test.scss";
import NumberInput from "src/UI/numberInput/NumberInput";
import { useState } from "react";

const TestBlock = ({ statTitle }) => {
  const [statNumber, setStatNumber] = useState(0);
  const [modNumber, setModNumber] = useState(0);
  const [saveNumber, setSaveNumber] = useState(0);
  const statTicker = statTitle.substring(0, 3) + ".";

  const handleStatChange = (e) => {
    let newValue = e.target.value;
    if (newValue.length > 2) {
      newValue = newValue.slice(0, 2);
    }
    if (newValue < 0) {
      newValue = 0;
    }
    setStatNumber(newValue);
    setModNumber(newValue / 2 - 5);
    setSaveNumber(newValue / 2 - 5);
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
            placeholder="10"
            className="stat-input"
          />
          </div>
        </div>
        
        <div className="stats-icon"></div>
        <div className="proficiency-square">
          <span className="mod-value">Valeur de mod.</span>
          <NumberInput
            value={modNumber}
            onChange={onchange}
            placeholder="10"
            className="mod-input"
          />
        </div>
        <div className="saving-square">
          <span className="save-value">Valeur de sauv.</span>
          <NumberInput
            value={saveNumber}
            onChange={onchange}
            placeholder="10"
            className="save-input"
          />
        </div>
      </div>
    </div>
  );
};

TestBlock.propTypes = {
  statTitle: PropTypes.string.isRequired,
};

export default TestBlock;
