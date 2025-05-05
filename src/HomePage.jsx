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
        <h2>Featured Coffees</h2>

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
        <h2>Featured Teas</h2>

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

      {/* Why us */}
      <section className="container my-5">
        <h2>Why Customers Love Us</h2>

        <div id="usps" className="row gy-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src="home/curated.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Curated Brews, Crafted for You</h5>
                <p className="card-text">
                  We handpick premium coffee beans and artisan tea leaves from
                  around the world, ensuring every cup delivers unforgettable
                  flavor and character.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src="home/quality.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Quality Without Compromise</h5>
                <p className="card-text">
                  No additives, no shortcuts. Just ethically sourced,
                  small-batch blends made with passion and purpose — so you can
                  sip with confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="card">
              <img src="home/delivery.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Fresh to Your Doorstep</h5>
                <p className="card-text">
                  From roast to delivery, our blends reach you at peak
                  freshness. Expect fast, reliable shipping and packaging
                  designed to preserve every aroma and note.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
