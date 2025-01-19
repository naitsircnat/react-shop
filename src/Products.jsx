import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/featured.json");
      setProducts(response.data);
    };

    getProducts();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <h1>Products</h1>
        <p>Product listing</p>
        <div className="row">
          {products.map((product) => (
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
      </div>
    </>
  );
}
