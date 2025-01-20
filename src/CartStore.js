import { atom, useAtom } from "jotai";
import Immutable from "seamless-immutable";

const initialCart = Immutable([
  {
    product_id: 5,
    quantity: 10,
    productName: "Organic Green Tea",
    price: 12.99,
    imageUrl: "https://picsum.photos/id/225/300/200",
    description:
      "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste.",
  },
]);

export const cartAtom = atom(initialCart);

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const getCartTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex(
        (i) => i.product_id === product.product_id
      );

      if (existingItemIndex !== -1) {
        let newQuantity = cart[existingItemIndex].quantity + 1;

        return currentCart.setIn([existingItemIndex, "quantity"], newQuantity);
      } else {
        return currentCart.concat({ ...product, quantity: 1 });
      }
    });
  };

  const modifyQty = (productId, newQuantity) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex(
        (i) => productId === i.product_id
      );

      if (existingItemIndex !== -1) {
        if (newQuantity <= 0) {
          return currentCart.filter((i) => i.product_id != productId);
        } else {
          return currentCart.setIn(
            [existingItemIndex, "quantity"],
            newQuantity
          );
        }
      }
    });
  };

  /*
  - Add modifycart function with the custom hook
  - Add the button and relevant linkage to cart item
  */

  return {
    cart,
    getCartTotal,
    addToCart,
    modifyQty,
  };
};
