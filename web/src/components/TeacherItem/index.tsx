import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/55336456?s=460&u=5c069015e77af211dceee02f6a3388c5453ed53a&v=4"
          alt="Luiz Rioja"
        />
        <div>
          <strong>Luiz Rioja</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Aficionado pelas ciências exatas
        <br />
        <br />
        Apaixonado por álgebra, física quântica e geometria analítica.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 70,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
