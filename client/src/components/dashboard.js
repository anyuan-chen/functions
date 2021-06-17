import { Fragment, useState, useEffect} from "react";
import Navbar from "../components/Navbar"
import logout from "../utils/authentication"

export const Dashboard = ({ isAuth, setAuth }) => {
  const [name, setName] = useState("");
  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/name", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json()
      console.log(parseRes)
      setName(parseRes.user_name)
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getName();
  }, []);
  return (
    <Fragment>
      <Navbar isAuth = {isAuth} setAuth={setAuth}></Navbar>
      <h1>Dashbaord {name}</h1>
      <button onClick={e => logout(e, setAuth)}className="btn btn-primary">Logout</button>
    </Fragment>
  );
};
export default Dashboard;
