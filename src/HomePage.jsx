import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";

export default function HomePage() {
  const [teas, setTeas] = useState([]);
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + "/api/products/coffee"
        );
        setCoffees(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCoffees();
  }, []);

  useEffect(() => {
    const fetchTeas = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + "/api/products/tea"
        );
        setTeas(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchTeas();
  }, []);

  return (
    <>
      {/* hero */}
      <section className="container-fluid" id="hero">
        <p className="display-3">The Artisan Cup</p>
      </section>
      {/* Coffees */}
      <section className="container my-5 px-lg-1">
        <h2>Our Coffees</h2>

        <div className="row gy-3">
          {coffees.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <ProductCard
                imageUrl={product.image}
                price={product.price}
                productName={product.name}
                productDescript={product.description}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Teas */}
      <section className="container my-5 px-lg-1">
        <h2>Our Teas</h2>

        <div className="row gy-3">
          {teas.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <ProductCard
                imageUrl={product.image}
                price={product.price}
                productName={product.name}
                productDescript={product.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
