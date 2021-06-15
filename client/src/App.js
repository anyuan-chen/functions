import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dashboard from "./components/dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            ></Route>
            <Route
              exact
              path="/register"
              render={(props) => <Register {...props} />}
            ></Route>
            <Route
              exact
              path="/dashboard"
              render={(props) => <Dashboard {...props} />}
            ></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
