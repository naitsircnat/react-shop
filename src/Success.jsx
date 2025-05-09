import { Link, useLocation } from "wouter";

export default function Success() {
  return (
    <>
      <div class="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>Your order is successful!</h1>
        <Link href="/">
          <button type="button" className="btn btn-success">
            {" "}
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}
