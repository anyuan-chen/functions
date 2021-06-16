import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isAuth }) {
  const dd = isAuth ? (
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li>
        <Link to="/login" class="text-decoration-none">
          {" "}
          <p class="dropdown-item text-decoration-none">My Account</p>{" "}
        </Link>
      </li>
      <li>
        <li>
          <Link to="/register" class="text-decoration-none">
            {" "}
            <p class="dropdown-item">Logout</p>{" "}
          </Link>
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
        <a class="navbar-brand">Functions</a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="text-decoration-none text-secondary">
                {" "}
                <a class="nav-link active" aria-current="page">
                  Home{" "}
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/explore" class="text-decoration-none text-secondary">
                {" "}
                <a class="nav-link active" aria-current="page">
                  Explore{" "}
                </a>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
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
