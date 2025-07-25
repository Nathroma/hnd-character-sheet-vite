import cx from 'classnames';
import React, {
    ChangeEventHandler,
    FocusEventHandler,
    KeyboardEventHandler,
} from "react";
import "./NumberInput.scss";

type NumberInputProps = {
  value: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
};

const NumberInput = ({
  value,
  onChange,
  onBlur,
  onKeyDown,
  placeholder,
  readOnly,
}: NumberInputProps) => {
  return (
    <div className={cx('number-input')}>
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

NumberInput.defaultProps = {
  placeholder: "10",
  readOnly: false,
};

export default NumberInput;
