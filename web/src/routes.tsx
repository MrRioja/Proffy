import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import TeacherList from "./Pages/TeacherList";
import TeacherForm from "./Pages/TeacherForm";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Registered from "./Pages/Register/Registered";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/registered" component={Registered} />
      <Route path="/landing" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
