import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom";

import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

export default function App() {
  return (
    <>
      <nav>
        <NavLink id="form-link" to="/form">Form</NavLink> |{" "}
        <NavLink id="form-ref-link" to="/form-ref">FormRef</NavLink> |{" "}
        <NavLink  id="form-state-link" to="/form-state">FormState</NavLink>
      </nav>

      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/form-ref" component={FormRef} />
        <Route exact path="/form-state" component={FormState} />
      </Switch>
    </>
  )
}