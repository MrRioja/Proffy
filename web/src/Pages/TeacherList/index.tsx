import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <form id="search-teachers">
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

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
