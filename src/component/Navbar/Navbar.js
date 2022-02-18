import "./Navbar.css";

import React from "react";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-nav fixed-top">
        <div className="container-lg">
          <a className="navbar-brand" href="#">
            <svg
              className="svg-brand"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5zm6-8V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V6a2 2 0 0 1 2-2h5z" />
            </svg>{" "}
            Smart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page">
                  <Link
                    className="text-decoration-none text-secondary nav-li"
                    to="/"
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    className="text-secondary text-decoration-none nav-li"
                    to="/about"
                  >
                    About
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    className="text-secondary text-decoration-none nav-li"
                    to="/ourteams"
                  >
                    Our Team
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    className="text-secondary text-decoration-none nav-li"
                    to="/howitisworks"
                  >
                    How It's Works
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    className="text-secondary text-decoration-none nav-li"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    className="text-secondary text-decoration-none nav-li"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    className="text-secondary text-decoration-none nav-li"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </a>
              </li>
            </ul>

            <button className="btn btn-light btn-login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>{" "}
              Login
            </button>
            <button className="btn btn-primary">Sign-up</button>
          </div>
        </div>
      </nav>
    </>
  );
}
