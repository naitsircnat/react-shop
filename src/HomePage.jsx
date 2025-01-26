import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get("featured.json");
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const genProductCards = () => {
    const productCards = [];

    for (let product of featuredProducts) {
      productCards.push(
        <div key={product.id} className="col-12 col-md-6 col-lg-3">
          <ProductCard
            imageUrl={product.image}
            price={product.price}
            productName={product.name}
            productDescript={product.description}
          />
        </div>
      );
    }

    return productCards;
  };

  return (
    <>
      {/* hero */}
      <header class="bg-primary text-white text-center py-5">
        <div class="container">
          <h1 class="display-4">Welcome to E-Shop</h1>
          <p class="lead">Discover amazing products at unbeatable prices!</p>
        </div>
      </header>
      {/* featured */}
      <section className="container my-5 px-lg-1">
        <h2>Featured Products</h2>

        <div className="row gy-3">{genProductCards()}</div>
      </section>

      {/* products */}
      <section className="container my-5 px-lg-1">
        <h2>Our Products</h2>

        <div className="row gy-3">
          {featuredProducts.map((product) => (
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
