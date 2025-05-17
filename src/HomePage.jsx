import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";
import { Link } from "wouter";
import { useFlashMessage } from "./FlashMessageStore.js";
import { useCart } from "./CartStore.js";

export default function HomePage() {
  const [featuredTeas, setFeaturedTeas] = useState([]);
  const [featuredCoffees, setFeaturedCoffees] = useState([]);

  const { addToCart } = useCart();
  const { showMessage } = useFlashMessage();

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + "/api/products/featured-coffee"
        );
        setFeaturedCoffees(response.data);
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
          import.meta.env.VITE_API_URL + "/api/products/featured-tea"
        );
        setFeaturedTeas(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchTeas();
  }, []);

  const addToCartHandle = (product) => {
    addToCart({
      product_id: product.id,
      productName: product.name,
      price: product.price,
      imageUrl: product.image,
    });
    showMessage("Item added to cart!", "success");
  };

  return (
    <>
      {/* hero */}
      <section className="container-fluid p-4" id="hero">
        <p className="display-1">The Artisan Cup</p>
        <p className="banner-lead lead">Brew Better Moments</p>
      </section>
      {/* Coffees */}
      <section className="container my-5 px-lg-1">
        <h2>Featured Coffees</h2>

        <div className="row gy-3">
          {featuredCoffees.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <ProductCard
                imageUrl={product.image}
                price={product.price}
                productName={product.name}
                productDescript={product.description}
                handle={() => {
                  addToCartHandle(product);
                }}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Teas */}
      <section className="container my-5 px-lg-1">
        <h2>Featured Teas</h2>

        <div className="row gy-3">
          {featuredTeas.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <ProductCard
                imageUrl={product.image}
                price={product.price}
                productName={product.name}
                productDescript={product.description}
                handle={() => {
                  addToCartHandle(product);
                }}
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
                  freshness. Expect fast and reliable shipping designed to
                  preserve every aroma and note.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" class="container-fluid mt-5 p-4">
        <h2 className="display-5">Find Your Perfect Brew</h2>
        <p className="lead">
          Whether you're craving bold coffee or soothing tea, explore our
          curated collection and discover your new daily ritual.
        </p>
        <Link href="products">
          <button type="button" className="btn btn-success">
            {" "}
            Shop All Drinks
          </button>
        </Link>
      </section>
    </>
  );
}
