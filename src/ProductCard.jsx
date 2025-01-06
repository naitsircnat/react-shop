import React from "react";

export default function ProductCard(props) {
  const buttonHandler = () => {
    alert("Button clicked");
  };
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card">
          <img src={props.imageUrl} className="card-img-top" />
          <div className="card-body">
            <h6>${props.price}</h6>

            <h5 className="card-title">{props.productName}</h5>
            <p className="card-text">
              <p>{props.productDescript}</p>
            </p>
            <a href="#" className="btn btn-success" onClick={buttonHandler}>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
