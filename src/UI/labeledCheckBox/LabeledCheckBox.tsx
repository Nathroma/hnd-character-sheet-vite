import React from "react";
import "./LabeledCheckBox.scss";

type LabeledCheckBoxProps = {
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

const LabeledCheckbox = ({ label, isChecked, onChange }:LabeledCheckBoxProps) => {

  const handleCheckboxChange = (event: { target: { checked: boolean; }; }) => {
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox-input"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default LabeledCheckbox;
