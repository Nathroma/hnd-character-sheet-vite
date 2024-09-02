import PropTypes from "prop-types";
import "./TextInput.scss";

const NumberInput = ({ label, value, onChange, placeholder, image }) => {
  const image = image || null;

  return (
    <div className="wrapper-text-input">
      {image}
      <div className="text-input-div">
        <label className="text-input-label">{label} :</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-input-field"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

TextInputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.func.isRequired,
  image: PropTypes.any.isRequired,
};

export default NumberInput;
