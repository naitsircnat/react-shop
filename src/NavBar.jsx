import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useJwt } from "./UserStore";

export default function NavBar() {
  const [isNavBarShowing, setNavBarShowing] = useState(false);

  const toggleNavBar = () => {
    setNavBarShowing(!isNavBarShowing);
  };

  const [location] = useLocation();

  const { clearJwt } = useJwt();
  const { getJwt } = useJwt();

  const isLoggedIn = getJwt() != null;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            The Artisan Cup
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavBar}
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavBarShowing ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location === "/" ? "active" : ""}`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location === "/products" ? "active" : ""
                  }`}
                  href="/products"
                >
                  Products
                </Link>
              </li>
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location === "/register" ? "active" : ""
                    }`}
                    href="/register"
                  >
                    Register
                  </Link>
                </li>
              )}
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location === "/login" ? "active" : ""
                    }`}
                    href="/login"
                  >
                    Log In
                  </Link>
                </li>
              )}

              {isLoggedIn && (
                <li className="nav-item">
                  <Link
                    href="/profile"
                    className={`nav-link ${
                      location === "/profile" ? "active" : ""
                    }`}
                  >
                    Profile
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link
                  href="/cart"
                  className={`nav-link ${location === "/cart" ? "active" : ""}`}
                >
                  Cart
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={clearJwt}
                  >
                    Log Out
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
