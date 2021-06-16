import { Fragment } from "react";
import Navbar from "./Navbar";

export default function Home({ isAuth, setAuth }) {
  return <Navbar isAuth={isAuth} setAuth={setAuth}></Navbar>;
}
