import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar"

export const Login = ({ isAuth, setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const body = { email, password };
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("logged in successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <Navbar isAuth = {isAuth} setAuth = {setAuth} ></Navbar>
      <h1 className="text-center my-5">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          onChange={(e) => onChange(e)}
          value={email}
          type="email"
          placeholder="email"
          name="email"
          className="form-control my-3"
        ></input>
        <input
          onChange={(e) => onChange(e)}
          value={password}
          type="password"
          placeholder="password"
          name="password"
          className="form-control my-3"
        ></input>
        <button type="submit" className="btn btn-success btn-block">
          Submit
        </button>
      </form>
      <Link to="/register">Register</Link>
    </Fragment>
  );
};
export default Login;
