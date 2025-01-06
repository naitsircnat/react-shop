import React, { useState } from "react";
import "./styles.css";
import ProductCard from "./ProductCard.jsx";

export default function App() {
  const [isNavBarShowing, setNavBarShowing] = useState(false);

  const toggleNavBar = () => {
    setNavBarShowing(!isNavBarShowing);
  };

  return (
    <>
      {/* nav bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            The Artisan Cup
          </a>
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
          {/* edits */}
          <div
            className={`collapse navbar-collapse ${
              isNavBarShowing ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* hero */}
      <section className="container-fluid" id="hero">
        <p className="display-3">The Artisan Cup</p>
      </section>
      {/* coffee */}
      <section className="container my-5 px-lg-1">
        <h2>Our Coffee Blends</h2>

        <div className="row gy-3">
          <ProductCard
            imageUrl="card-image.jpg"
            price="18.99"
            productName="test"
            productDescript="hello"
          />
          <ProductCard
            imageUrl="card-image.jpg"
            price="18.99"
            productName="test"
            productDescript="hello"
          />
          <ProductCard
            imageUrl="card-image.jpg"
            price="18.99"
            productName="test"
            productDescript="hello"
          />
        </div>
      </section>

      {/* tea */}
      <section className="container my-5 px-lg-1">
        <h2>Our Tea Blends</h2>

        <div className="row gy-3">
          <ProductCard
            imageUrl="card-image.jpg"
            price="18.99"
            productName="test"
            productDescript="hello"
          />
          <ProductCard
            imageUrl="card-image.jpg"
            price="18.99"
            productName="test"
            productDescript="hello"
          />
          <ProductCard
            imageUrl="card-image.jpg"
            price="18.99"
            productName="test"
            productDescript="hello"
          />
        </div>
      </section>
      {/* footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2025 The Artisan Cup. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

/** 
TO DO
- toggle for nav bar using react-bootstrap
*/
