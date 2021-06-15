import { Fragment } from "react";

const Register = () => {
  return (
    <Fragment>
      <h1 className="text-center my-5">Register</h1>
      <input
        type="email"
        name="email"
        placeholder="email"
        className="form-control my-3"
      />
      <input
        type="text"
        name="name"
        placeholder="name"
        className="form-control my-3"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="form-control my-3"
      />
      <button className="btn btn-success btn-block">Submit</button>
    </Fragment>
  );
};
export default Register;
