import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";

export default function HomePage() {
  // const [featuredProducts, setFeaturedProducts] = useState([]);

  const [teas, setTeas] = useState([]);

  // useEffect(() => {
  //   const fetchFeaturedProducts = async () => {
  //     try {
  //       const response = await axios.get("featured.json");
  //       setFeaturedProducts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchFeaturedProducts();
  // }, []);

  useEffect(() => {
    const fetchTeas = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + "/api/products/tea"
        );
        setTeas(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchTeas();
  }, []);

  // const genProductCards = () => {
  //   const productCards = [];

  //   for (let product of featuredProducts) {
  //     productCards.push(
  //       <div key={product.id} className="col-12 col-md-6 col-lg-3">
  //         <ProductCard
  //           imageUrl={product.image}
  //           price={product.price}
  //           productName={product.name}
  //           productDescript={product.description}
  //         />
  //       </div>
  //     );
  //   }

  //   return productCards;
  // };

  return (
    <>
      {/* hero */}
      <section className="container-fluid" id="hero">
        <p className="display-3">The Artisan Cup</p>
      </section>
      {/* Coffees */}
      <section className="container my-5 px-lg-1">
        <h2>Our Coffees</h2>

        {/* <div className="row gy-3">{genProductCards()}</div> */}
      </section>

      {/* Teas */}
      <section className="container my-5 px-lg-1">
        <h2>Our Teas</h2>

        <div className="row gy-3">
          {/* {console.log(teas)}; */}
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
