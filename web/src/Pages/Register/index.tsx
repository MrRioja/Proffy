import React from "react";

import "./styles.css";

import Input from "../../components/Input";

import logo from "../../assets/images/logo.svg";
import background from "../../assets/images/success-background.svg";
import back from "../../assets/images/icons/back.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="leftside">
        <Link to="/" className="back">
          <img src={back} alt="Voltar" />
        </Link>

        <h1>Cadastro</h1>
        <p>Prencha os dados abaixo para começar.</p>

        <form action="">
          <Input label="Nome" name="nome"></Input>
          <Input label="Sobrenome" name="sobrenome"></Input>
          <Input label="E-mail" name="email"></Input>
          <Input label="Senha" name="senha"></Input>
          <button type="submit">Concluir cadastro</button>
        </form>
      </div>

      <div className="rightside">
        <div className="background-container">
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
