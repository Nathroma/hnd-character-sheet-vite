import PropTypes from "prop-types";
import "./NumberInput.scss";

const NumberInput = ({ value, onChange, onBlur, onKeyDown, placeholder, readOnly }) => {
  return (
    <div className="number-input">
      <input
        type="number"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
};

NumberInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
};

NumberInput.defaultProps = {
  placeholder: "10",
  readOnly: false,
};

export default NumberInput;
