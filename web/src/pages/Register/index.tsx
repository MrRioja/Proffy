import React, { FormEvent, useState } from "react";

import "./styles.css";

import InputLogin from "../../components/InputLogin";

import logo from "../../assets/images/logo.svg";
import background from "../../assets/images/success-background.svg";
import back from "../../assets/images/icons/back.svg";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const token = await api.post("/register", {
        name,
        lastName,
        email,
        pass,
      });

      if (token) {
        history.push("/registered");
      }
    } catch (error) {
      alert(error);
    }
  }

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
          <p>Preencha os dados abaixo para começar.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <InputLogin
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Nome"
            name="nome"
          />
          <InputLogin
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Sobrenome"
            name="sobrenome"
          />
          <InputLogin
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="E-mail"
            name="email"
          />
          <InputLogin
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            label="Senha"
            name="senha"
          />
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
