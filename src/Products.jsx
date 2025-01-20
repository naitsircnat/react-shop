import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";
import { flashMessageAtom, useFlashMessage } from "./FlashMessageStore.js";
import { cartAtom, useCart } from "./CartStore.js";
import { useLocation } from "wouter";

/*
- import required components for flashMessage, cart atom and wouter; x
- Create button handle for add to cart
- Add prop variable to card component 
*/

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/featured.json");
      setProducts(response.data);
    };

    getProducts();
  }, []);

  const addToCartHandle = () => {
    addToCart({
      product_id: product.id,
      productName: product.name,
      price: product.price,
      imageUrl: product.image,
      description: product.description,
    });
  };

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
                handle={addToCartHandle()}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
