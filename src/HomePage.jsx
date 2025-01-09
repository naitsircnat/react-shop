import React from "react";
import ProductCard from "./ProductCard.jsx";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
