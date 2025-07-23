import cx from 'classnames';
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
} from "react";
import "./StringNumberInput.scss";

type NumberInputProps = {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
};

const StringNumberInput = ({
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

StringNumberInput.defaultProps = {
  placeholder: "10",
  readOnly: false,
};

export default StringNumberInput;
