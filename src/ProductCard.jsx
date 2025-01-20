import React from "react";

export default function ProductCard(props) {
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
            onClick={() => {
              props.handle();
            }}
          >
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
}
