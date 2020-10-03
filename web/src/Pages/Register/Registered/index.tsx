import React from "react";

import "./styles.css";
import bg from "../../../assets/images/success-background.svg";
import success from "../../../assets/images/icons/success-check-icon.svg";
import { Link } from "react-router-dom";

function Registered() {
  return (
    <div className="container-registered">
      <img src={bg} alt="Background" />

      <div>
        <img src={success} alt="Success" />
        <h1>Cadastro concluído</h1>
        <p>
          Agora você faz parte da plataforma da Proffy. Tenha uma ótima
          experiência.
        </p>
      </div>

      <Link to="/">Fazer login</Link>
    </div>
  );
}

export default Registered;
