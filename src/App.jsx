import React from "react";
import "./styles.css";
import cardImage from "./assets/card-image.jpg";

export default function App() {
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
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={cardImage} className="card-img-top" />
              <div className="card-body">
                <h6>$18.99</h6>

                <h5 className="card-title">Golden Sunrise Blend</h5>
                <p className="card-text">
                  <p>
                    Awaken your senses with the Golden Sunrise Blend, a medium
                    roast crafted from 100% Arabica beans sourced from the
                    highlands of Colombia.
                  </p>
                </p>
                <a href="#" className="btn btn-success">
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={cardImage} className="card-img-top" />
              <div className="card-body">
                <h6>$18.99</h6>

                <h5 className="card-title">Golden Sunrise Blend</h5>
                <p className="card-text">
                  <p>
                    Awaken your senses with the Golden Sunrise Blend, a medium
                    roast crafted from 100% Arabica beans sourced from the
                    highlands of Colombia.
                  </p>
                </p>
                <a href="#" className="btn btn-success">
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={cardImage} className="card-img-top" />
              <div className="card-body">
                <h6>$18.99</h6>

                <h5 className="card-title">Golden Sunrise Blend</h5>
                <p className="card-text">
                  <p>
                    Awaken your senses with the Golden Sunrise Blend, a medium
                    roast crafted from 100% Arabica beans sourced from the
                    highlands of Colombia.
                  </p>
                </p>
                <a href="#" className="btn btn-success">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tea */}
      <section className="container my-5 px-lg-1">
        <h2>Our Tea Blends</h2>

        <div className="row gy-3">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={cardImage} className="card-img-top" />
              <div className="card-body">
                <h6>$18.99</h6>

                <h5 className="card-title">Golden Sunrise Blend</h5>
                <p className="card-text">
                  <p>
                    Awaken your senses with the Golden Sunrise Blend, a medium
                    roast crafted from 100% Arabica beans sourced from the
                    highlands of Colombia.
                  </p>
                </p>
                <a href="#" className="btn btn-success">
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={cardImage} className="card-img-top" />
              <div className="card-body">
                <h6>$18.99</h6>

                <h5 className="card-title">Golden Sunrise Blend</h5>
                <p className="card-text">
                  <p>
                    Awaken your senses with the Golden Sunrise Blend, a medium
                    roast crafted from 100% Arabica beans sourced from the
                    highlands of Colombia.
                  </p>
                </p>
                <a href="#" className="btn btn-success">
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
              <img src={cardImage} className="card-img-top" />
              <div className="card-body">
                <h6>$18.99</h6>

                <h5 className="card-title">Golden Sunrise Blend</h5>
                <p className="card-text">
                  <p>
                    Awaken your senses with the Golden Sunrise Blend, a medium
                    roast crafted from 100% Arabica beans sourced from the
                    highlands of Colombia.
                  </p>
                </p>
                <a href="#" className="btn btn-success">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
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
- toggle for nav bar
*/
