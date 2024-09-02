import "./LabeledCheckBox.scss"; // Assuming your styles are in a file named Checkbox.scss
import PropTypes from "prop-types";

const LabeledCheckbox = ({ label, isChecked, onChange }) => {
  const handleCheckboxChange = (event) => {
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

LabeledCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabeledCheckbox;
