import React, { InputHTMLAttributes } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, ...rest }) => {
  return (
    <>
      <div className="input-group">
        <input type={type} id={name} {...rest} />
        <label htmlFor={name}>{label}</label>
      </div>
    </>
  );
};

export default Input;
