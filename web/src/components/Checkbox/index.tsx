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
      <input name={name} type="checkbox" />
      <span className="checkmark"></span>
    </label>
    // <div className="checkbox">
    //   <input type="checkbox" name={name} />
    //   <label htmlFor={name}>{label}</label>
    // </div>
  );
};

export default Checkbox;
