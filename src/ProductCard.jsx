import React from "react";
import { useJwt } from "./UserStore";
import { Link, useLocation } from "wouter";

export default function ProductCard(props) {
  const { getJwt } = useJwt();

  const isLoggedIn = getJwt() != null;

  const [location] = useLocation();
  const [, setLocation] = useLocation();

  return (
    <>
      <div className="card">
        <img src={props.imageUrl} className="card-img-top" />
        <div className="card-body">
          <h6>${props.price}</h6>

          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text">{props.productDescript}</p>
          <a
            href="#"
            className="btn btn-success"
            onClick={
              isLoggedIn
                ? () => {
                    props.handle();
                  }
                : () => {
                    setLocation("/login");
                  }
            }
          >
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
}
