import React, { useState } from "react";
import { useCart } from "./CartStore";
import axios from "axios";
import { useJwt } from "./UserStore";

const ShoppingCart = () => {
  const { cart, getCartTotal, modifyQuantity, removeFromCart } = useCart();

  const { getJwt } = useJwt();

  const checkoutHandle = async () => {
    console.log("Checkout button clicked");
    const jwt = getJwt();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/checkout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error in checking out", error);
      alert("Checkout failed. Please try again");
    }
  };

  /*
  - image
  - product name
  - Quantity and adjustments
  - Total Price
  - Delete button
  */

  return (
    <div className="container mt-4">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item, index) => (
              <div className="row text-center" key={index}>
                <div className="col-12 col-md-4 border p-2">
                  <img src={item.imageUrl} className="img-fluid" />
                </div>
                <div className="d-flex align-items-center justify-content-center col-12 col-md-2 border p-2">
                  {item.productName}
                </div>
                <div className="d-flex align-items-center justify-content-center col-12 col-md-2 border p-2">
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={() => {
                      modifyQuantity(item.product_id, item.quantity - 1);
                    }}
                  >
                    -
                  </button>

                  <p className="mb-0">Quantity: {item.quantity}</p>
                  <button
                    className="btn btn-sm btn-secondary ms-2"
                    onClick={() => {
                      modifyQuantity(item.product_id, item.quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-center col-12 col-md-2 border p-2">
                  {" "}
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => {
                      removeFromCart(item.product_id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-center col-12 col-md-2 border p-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </ul>
          <div className="mt-3 text-end">
            <h4>Total: ${getCartTotal()}</h4>
            <button
              className="btn btn-primary mt-2 mb-3"
              onClick={checkoutHandle}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
