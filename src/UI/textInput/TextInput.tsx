import "./TextInput.scss";
import React, { ChangeEventHandler } from "react";

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
    <div className="wrapper-text-input">
      {image}
      <div className="text-input-div">
        <label className="text-input-label">{label} :</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="text-input-field"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
