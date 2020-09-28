import React from "react";

import Input from "../../components/InputLogin";

import "./styles.css";
import background from "../../assets/images/success-background.svg";
import heart from "../../assets/images/icons/purple-heart.svg";
import logo from "../../assets/images/logo.svg";
import Checkbox from "../../components/Checkbox";
import { Link } from "react-router-dom";

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
          <Input label="E-mail" name="E-mail" type="text" />
          <Input label="Senha" name="Senha" type="password" />
          <div className="password">
            <Checkbox label="Lembrar-me" name="remember" />
            <a href="">Esqueci minha senha</a>
          </div>
          <Link to="/" className="entrar">
            Entrar
          </Link>
        </div>

        <div className="footer">
          <div className="register">
            <span>Não tem conta?</span>
            <Link to="/register">Cadastre-se</Link>
          </div>
          <span>
            É de graça
            <img src={heart} alt="Coração" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
