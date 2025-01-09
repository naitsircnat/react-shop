import React, { useState } from "react";
import "./styles.css";
import NavBar from "./NavBar.jsx";
import HomePage from "./HomePage.jsx";
import Products from "./Products.jsx";
import Register from "./Register.jsx";
import { Route, Switch } from "wouter";

export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={Products} />
        <Route path="/register" component={Register} />
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

/** 
TO DO
*/
