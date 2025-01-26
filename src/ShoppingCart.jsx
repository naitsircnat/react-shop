// import React from "react";
// import { useCart } from "./CartStore";

// const ShoppingCart = () => {
//   const { cart, getCartTotal, modifyQty, deleteItem } = useCart();

//   return (
//     <div className="container mt-4">
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="list-group">
//             {cart.map((item) => (
//               <li
//                 key={item.product_id}
//                 className="list-group-item d-flex justify-content-between align-items-center"
//               >
//                 <img src={item.imageUrl} />
//                 <div>
//                   <h5>{item.productName}</h5>
//                   <div className="d-flex align-items-center">
//                     <button
//                       className="btn btn-sm btn-secondary me-2"
//                       onClick={() => {
//                         modifyQty(item.product_id, item.quantity - 1);
//                       }}
//                     >
//                       -
//                     </button>

//                     <p className="mb-0">Quantity: {item.quantity}</p>
//                     <button
//                       className="btn btn-sm btn-secondary ms-2"
//                       onClick={() => {
//                         modifyQty(item.product_id, item.quantity + 1);
//                       }}
//                     >
//                       +
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm ms-2"
//                       onClick={() => {
//                         deleteItem(item.product_id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//                 <span>${(item.price * item.quantity).toFixed(2)}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-3 text-end">
//             <h4>Total: ${getCartTotal()}</h4>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;

import React from "react";
import { useCart } from "./CartStore";

export default function ShoppingCart() {
  const { cart, getCartTotal, modifyQuantity, removeFromCart } = useCart();
  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.product_id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <img src={item.imageUrl} />
                <div>
                  <h5>{item.productName}</h5>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() => {
                        modifyQuantity(item.product_id, item.quantity + 1);
                      }}
                    >
                      +
                    </button>

                    <p className="mb-0">Quantity: {item.quantity}</p>

                    <button
                      className="btn btn-sm btn-secondary ms-2"
                      onClick={() => {
                        modifyQuantity(item.product_id, item.quantity - 1);
                      }}
                    >
                      -
                    </button>

                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => {
                        removeFromCart(item.product_id);
                      }}
                    >
                      Delete
                    </button>
                  </div>

                  <p>Per Price: ${item.price}</p>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-end">
            <h4>Total:${getCartTotal()}</h4>
          </div>
        </>
      )}
    </div>
  );
}
