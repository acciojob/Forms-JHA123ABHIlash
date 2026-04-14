import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom";

import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

export default function App() {
  return (
    
<>
      <nav>
        <NavLink to="/form">Form</NavLink> |{" "}
        <NavLink to="/formref">FormRef</NavLink> |{" "}
        <NavLink to="/formstate">FormState</NavLink>
      </nav>

      <Switch>
        <Route path="/form" component={Form} />
        <Route path="/formref" component={FormRef} />
        <Route path="/formstate" component={FormState} />
      </Switch>

    </>
  )
}