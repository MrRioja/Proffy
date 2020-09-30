import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Checkbox: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <label className="container-checkbox">
      {label}
      <input name={name} type="checkbox" {...rest} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
