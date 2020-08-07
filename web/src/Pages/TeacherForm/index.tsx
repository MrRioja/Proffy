import React from "react";
import PageHeader from "../../components/PageHeader";
//57"
import "./styles.css";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "História", label: "História" },
              { value: "Geografia", label: "Geografia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Química", label: "Química" },
              { value: "Educação física", label: "Educação física" },
              { value: "Educação artística", label: "Educação artística" },
              { value: "Filosofia", label: "Filosofia" },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>
          <div className="schedule-item">
            <Select
              name="week_day"
              label="Dia da semana"
              options={[
                { label: "0", value: "Domingo" },
                { label: "1", value: "Segunda-feira" },
                { label: "2", value: "Terça-feira" },
                { label: "3", value: "Quarta-feira" },
                { label: "4", value: "Quinta-feira" },
                { label: "5", value: "Sexta-feira" },
                { label: "6", value: "Sábado" },
              ]}
            />

            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
