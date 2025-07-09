import cx from 'classnames';
import React, { ChangeEventHandler } from "react";
import "./TextInput.scss";

type TextInputProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className: string;
  image?: React.ReactNode;
};

const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
  image,
}: TextInputProps) => {
  return (
    <div className={cx('wrapper-text-input')}>
      {image}
      <div className={cx('text-input-div')}>
        <label className={cx('text-input-label')}>{label} :</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={cx('text-input-field')}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
