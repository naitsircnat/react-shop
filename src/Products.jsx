import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";
import { useFlashMessage } from "./FlashMessageStore.js";
import { useCart } from "./CartStore.js";
import { useLocation } from "wouter";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [, setLocation] = useLocation();
  const { showMessage } = useFlashMessage();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/api/products"
      );
      setProducts(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  const addToCartHandle = (product) => {
    addToCart({
      product_id: product.id,
      productName: product.name,
      price: product.price,
      imageUrl: product.image,
    });
    showMessage("Item added to cart!", "success");
    setLocation("/cart");
  };

  return (
    <>
      <div className="container mt-3">
        <h1>Products</h1>
        <div className="row">
          {products.map((product) => (
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
      </div>
    </>
  );
}
