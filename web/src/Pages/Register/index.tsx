import React from "react";

import "./styles.css";

import InputLogin from "../../components/InputLogin";

import logo from "../../assets/images/logo.svg";
import background from "../../assets/images/success-background.svg";
import back from "../../assets/images/icons/back.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="leftside">
        <div className="previous-page">
          <Link to="/">
            <img src={back} alt="Voltar" />
          </Link>
        </div>

        <div className="title-group">
          <h1 className="title">Cadastro</h1>
          <p>Prencha os dados abaixo para começar.</p>
        </div>

        <form action="">
          <InputLogin label="Nome" name="nome"></InputLogin>
          <InputLogin label="Sobrenome" name="sobrenome"></InputLogin>
          <InputLogin label="E-mail" name="email"></InputLogin>
          <InputLogin label="Senha" name="senha"></InputLogin>
          <button type="submit">Concluir cadastro</button>
        </form>
      </div>

      <div className="rightside">
        <div className="container-background">
          <img src={background} alt="Background" />
        </div>

        <div className="logo">
          <img src={logo} alt="Logo" />
          <p>Sua plataforma de estudos onlines.</p>
        </div>
      </div>
    </>
  );
}

export default Register;
