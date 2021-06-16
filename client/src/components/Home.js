import { Fragment } from "react";
import Navbar from "./Navbar";

export default function Home({ isAuth }) {
  return <Navbar isAuth={isAuth}></Navbar>;
}
