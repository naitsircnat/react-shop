import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";
import { useFlashMessage } from "./FlashMessageStore.js";
import { useCart } from "./CartStore.js";

export default function Products() {
  const [teas, setTeas] = useState([]);
  const [coffees, setCoffees] = useState([]);

  const { addToCart } = useCart();
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/api/products/coffee"
      );
      setCoffees(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/api/products/tea"
      );
      setTeas(response.data);
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
  };

  return (
    <>
      {/* hero */}
      <section className="container-fluid p-4" id="products-hero">
        <p className="display-2">Our Full Range</p>
      </section>

      <section>
        <div className="container mt-3">
          <h1>Coffees</h1>
          <div className="row gy-3">
            {coffees.map((product) => (
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
      </section>

      <section>
        <div className="container mt-3">
          <h1>Teas</h1>
          <div className="row gy-3">
            {teas.map((product) => (
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
      </section>
    </>
  );
}
