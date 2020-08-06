import React from "react";

interface InputProps {
  label: string;
}
//18:32
const Input: React.FC<InputProps> = () => {
  return (
    <div className="input-block">
      <label htmlFor="name">Nome completo</label>
      <input type="text" id="name" />
    </div>
  );
};

export default Input;
