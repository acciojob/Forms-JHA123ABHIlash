import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom";

import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

export default function App() {
  return (
    
<>
      <nav>
       <NavLink to="/form-link">Form</NavLink>
<NavLink to="/form-ref-link">FormRef</NavLink>
<NavLink to="/form-state-link">FormState</NavLink>
      </nav>

      <Switch>
        <Route path="/form-link" component={Form} />
        <Route path="/form-ref-link" component={FormRef} />
        <Route path="/form-state-link" component={FormState} />
      </Switch>

    </>
  )
}