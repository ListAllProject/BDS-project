import React from "react";
import "./App.scss";
import { Home } from "./page/home/home";
import "./assets/fontawesome-pro-5.13.0-web/css/all.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Forgotpassw } from "./page/authentication/forgotpassw/forgotpassw";
import { Login } from "./page/authentication/login/login";
import { Register } from "./page/authentication/register/register";
import { Index } from "./page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/forget-password">
          <Forgotpassw />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Register />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
