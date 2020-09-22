import React from "react";

import Input from "../../components/Input";

import "./styles.css";
import background from "../../assets/images/success-background.svg";
import logo from "../../assets/images/logo.svg";

function Login() {
  return (
    <div className="page">
      <div className="left-side">
        <div className="container-background">
          <img src={background} alt="Background" />
        </div>

        <div className="logo">
          <img src={logo} alt="Logo" />
          <p>Sua plataforma de estudos onlines.</p>
        </div>
      </div>

      <div className="right-side">
        <div className="form">
          <h1>Fazer login</h1>
          <Input label="E-mail" name="E-mail" />
          <Input label="Senha" name="Senha" />
        </div>
      </div>
    </div>
  );
}

export default Login;
