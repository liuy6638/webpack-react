import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Index from "../components/index";
import Home from "../components/home";

const Routers = () => {
  return (
    <Router>
      <Index>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Index>
    </Router>
  )
}

export default Routers


