import React from "react";
import { Link } from "react-router-dom";
import logout from "../utils/authentication"

export default function Navbar({ isAuth, setAuth }) {
  const dd = isAuth ? (
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li>
        <Link to="/dashboard" class="text-decoration-none">
          {" "}
          <p class="dropdown-item text-decoration-none">My Account</p>{" "}
        </Link>
      </li>
      <li>
        <Link to="/add" class="text-decoration-none">
          {" "}
          <p class="dropdown-item text-decoration-none">Add A Function</p>{" "}
        </Link>
      </li>
      <li>
        <li>
          <button onClick={e => logout(e, setAuth)}class="dropdown-item">Logout</button>{" "}
        </li>
      </li>
    </ul>
  ) : (
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li>
        <Link to="/login" class="text-decoration-none">
          {" "}
          <p class="dropdown-item text-decoration-none">Login</p>{" "}
        </Link>
      </li>
      <li>
        <li>
          <Link to="/register" class="text-decoration-none">
            {" "}
            <p class="dropdown-item">Register</p>{" "}
          </Link>
        </li>
      </li>
    </ul>
  );

  return (
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <div class="container-fluid">
        <p class="navbar-brand">Functions</p>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="text-decoration-none text-secondary">
                {" "}
                <p class="nav-link active" aria-current="page">
                  Home{" "}
                </p>
              </Link>
            </li>
            <li class="nav-ite  m">
              <Link to="/explore" class="text-decoration-none text-secondary">
                {" "}
                <p class="nav-link active" aria-current="page">
                  Explore{" "}
                </p>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <p
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </p>
              {dd}
            </li>
          </ul>
        </div>

        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
