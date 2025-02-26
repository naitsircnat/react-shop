import React, { useEffect, useState } from "react";
import "./styles.css";
import NavBar from "./NavBar.jsx";
import HomePage from "./HomePage.jsx";
import Products from "./Products.jsx";
import Register from "./Register.jsx";
import { Route, Switch } from "wouter";
import { useFlashMessage } from "./FlashMessageStore";
import ShoppingCart from "./ShoppingCart.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";

export default function App() {
  const { getMessage, clearMessage } = useFlashMessage();

  const flashMessage = getMessage();

  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [flashMessage]);

  return (
    <>
      <NavBar />
      {flashMessage.message && (
        <div
          className={`alert alert-${flashMessage.type} text-center flash-alert`}
          role="alert"
        >
          {flashMessage.message}
        </div>
      )}
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={Products} />
        <Route path="/register" component={Register} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
      {/* footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2025 The Artisan Cup. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
