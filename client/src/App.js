import { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import { toast, toastify } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Home from "./components/Home";

toast.configure()

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  async function isAuth(){
    try {
      const response = await fetch ("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: {token : localStorage.token}
      })
      const parseRes = await response.json()
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
      console.log(parseRes)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    isAuth()
  }, [])
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }
  console.log(isAuthenticated)
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route
                exact 
                path = "/" 
                render={(props) => 
                  <Home {...props} isAuth = {isAuthenticated}>
              
                  </Home>}>
            </Route>
            <Route
              exact
              path="/login"
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth = {setAuth}/>
                ) : (
                  <Redirect to="/dashboard"></Redirect>
                )
              }
            ></Route>
            <Route
              exact
              path="/register"
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} setAuth = {setAuth} />
                ) : (
                  <Redirect to="/dashboard"></Redirect>
                )
              }
            ></Route>
            <Route
              exact
              path="/dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth = {setAuth}/>
                ) : (
                  <Redirect to="login"></Redirect>
                )
              }
            ></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
