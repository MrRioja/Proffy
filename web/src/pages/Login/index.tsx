import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import Input from "../../components/InputLogin";
import Checkbox from "../../components/Checkbox";

import "./styles.css";
import logo from "../../assets/images/logo.svg";
import heart from "../../assets/images/icons/purple-heart.svg";
import background from "../../assets/images/success-background.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const history = useHistory();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    api
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        const { id, name, lastname, email } = response.data.user;
        const token = response.data.token;
        console.log({ id, name, lastname, email, token });

        history.push("/landing");
      })
      .catch(() => {
        alert("Erro ao realizar login");
      });
  }

  function handleRemember() {
    setRemember(!remember);
  }

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
        <form onSubmit={handleLogin} className="form">
          <h1>Fazer login</h1>
          <Input
            required
            label="E-mail"
            name="E-mail"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            required
            label="Senha"
            name="Senha"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="password">
            <Checkbox
              label="Lembrar-me"
              name="remember"
              checked={remember}
              onChange={handleRemember}
            />
            <a href="/reset-pass">Esqueci minha senha</a>
          </div>
          <button className="entrar" type="submit">
            Entrar
          </button>
        </form>

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
