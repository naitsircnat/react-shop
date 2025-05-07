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
import Success from "./Success.jsx";
import Footer from "./Footer.jsx";

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
        <Route path="/success" component={Success} />
      </Switch>
      {/* footer */}
      <Footer />
    </>
  );
}
