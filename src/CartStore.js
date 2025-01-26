import { atom, useAtom } from "jotai";
import Immutable from "seamless-immutable";
import { useEffect, useRef } from "react";
import { useJwt } from "./UserStore";
import axios from "axios";

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
    const jwt = getJwt();
    setIsLoading(true);
    try {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/api/cart",
        {
          headers: {
            Authorization: "Bearer " + jwt,
          },
        }
      );
      setCart(Immutable(response.data));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCart = async (updatedCart) => {
    const jwt = getJwt();
    setIsLoading(true);
    try {
      console.log("UpdatedCart:", updatedCart);

      const updatedCartItems = updatedCart.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
      }));

      console.log("UpdatedCartItems:", updatedCartItems);

      await axios.put(
        import.meta.env.VITE_API_URL + "/api/cart",
        updatedCartItems,
        {
          headers: {
            Authorization: "Bearer " + jwt,
          },
        }
      );
    } catch (e) {
      console.error("Error updating cart:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const getCartTotal = () => {
    let total = 0;
    for (let c of cart) {
      total += c.price * c.quantity;
    }
    return total.toFixed(2);
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItemIndex = cart.findIndex(
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
        const modifiedCart = currentCart.concat({
          ...product,
          quantity: 1,
        });
        updateCart(modifiedCart);
        return modifiedCart;
      }
    });
  };

  const modifyQuantity = (product_id, quantity) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex(
        (i) => i.product_id === product_id
      );

      if (quantity > 0) {
        const modifiedCart = currentCart.setIn(
          [existingItemIndex, "quantity"],
          quantity
        );
        updateCart(modifiedCart);
        return modifiedCart;
      } else {
        const modifiedCart = currentCart.filter(
          (cartItem) => cartItem.product_id != product_id
        );
        updateCart(modifiedCart);
        return modifiedCart;
      }
    });
  };

  const removeFromCart = (product_id) => {
    setCart((currentCart) => {
      const modifiedCart = currentCart.filter(
        (cartItem) => cartItem.product_id != product_id
      );
      updateCart(modifiedCart);
      return modifiedCart;
    });
  };

  return {
    cart,
    getCartTotal,
    addToCart,
    modifyQuantity,
    removeFromCart,
  };
};
