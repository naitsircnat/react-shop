import React, { useState } from "react";
import "./styles.css";
import ProductCard from "./ProductCard.jsx";
import NavBar from "./NavBar.jsx";
import MainPage from "./MainPage.jsx";

export default function App() {
  // const [isNavBarShowing, setNavBarShowing] = useState(false);

  // const toggleNavBar = () => {
  //   setNavBarShowing(!isNavBarShowing);
  // };

  return (
    <>
      {/* nav bar */}

      <NavBar />

      {/* main page */}
      {/* <section className="container-fluid" id="hero">
        <p className="display-3">The Artisan Cup</p>
      </section>
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
      </section> */}

      <MainPage />
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
