import { atom, useAtom } from "jotai";
import Immutable from "seamless-immutable";
import { useJwt } from "./UserStore.js";
import axios from "axios";
import { useEffect } from "react";

const initialCart = Immutable([]);

export const cartAtom = atom(initialCart);

export const cartLoadAtom = atom(false);

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [isLoading, setIsLoading] = useAtom(cartLoadAtom);
  const { getJwt } = useJwt();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setIsLoading(true);

    const token = getJwt();

    try {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "api/cart/",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setCart(Immutable(response.data));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCart = async (updatedCart) => {
    setIsLoading(true);
    const token = getJwt();

    try {
      const updatedCartItems = cart.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
      }));

      await axios.put(
        import.meta.env.VITE_API_URL + "/api/cart",
        updatedCartItems,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {
      console.error("Error updating cart: ", error);
    } finally {
      setIsLoading(false);
    }
  };

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

        const modifiedCart = currentCart.setIn(
          [existingItemIndex, "quantity"],
          newQuantity
        );

        updateCart(modifiedCart);

        return modifiedCart;
      } else {
        const modifiedCart = currentCart.concat({ ...product, quantity: 1 });

        updateCart(modifiedCart);
        return modifiedCart;
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
          const modifiedCart = currentCart.filter(
            (i) => i.product_id !== productId
          );

          updateCart(modifiedCart);
          return modifiedCart;
        } else {
          const modifiedCart = currentCart.setIn(
            [existingItemIndex, "quantity"],
            newQuantity
          );
          updateCart(modifiedCart);
          return modifiedCart;
        }
      }
    });
  };

  const deleteItem = (productId) => {
    setCart((currentCart) => {
      const modifiedCart = currentCart.filter(
        (item) => item.product_id !== productId
      );

      updateCart(modifiedCart);
      return modifiedCart;
    });
  };

  return {
    cart,
    getCartTotal,
    addToCart,
    modifyQty,
    deleteItem,
  };
};
