import React, { useState } from "react";
import { Link, useLocation } from "wouter";

export default function NavBar() {
  const [isNavBarShowing, setNavBarShowing] = useState(false);

  const toggleNavBar = () => {
    setNavBarShowing(!isNavBarShowing);
  };

  const [location] = useLocation();

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
              <li className="nav-item">
                <Link
                  href="/cart"
                  className={`nav-link ${location === "/cart" ? "active" : ""}`}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
