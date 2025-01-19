import { atom, useAtom } from "jotai";

const initialCart = [
  {
    id: 1,
    product_id: 1,
    quantity: 10,
    productName: "Organic Green Tea",
    price: 12.99,
    imageUrl: "https://picsum.photos/id/225/300/200",
    description:
      "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste.",
  },
];

export const cartAtom = atom(initialCart);

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const getCartTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return {
    cart,
    getCartTotal,
  };
};
