import { createContext, useContext, useMemo, useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";

const CartContext = createContext();
import { initialProducts } from "../data/Product";

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const products = initialProducts;
  // Add item into the Cart
  const addToCart = (product) => {
    toast.success("Item was added to cart", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove Item from Cart
  const removeFromCart = (productId, removeAll = false) => {
       toast.success("Item was removed from cart", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === productId);

      if (!existingItem) return prev;

      if (removeAll || existingItem.quantity === 1) {
        return prev.filter((item) => item.id != productId);
      } else {
        return prev.map((item) =>
          item.id == productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  console.log(`my cart = `, cart);

  return (
    <>
      <CartContext.Provider
        value={{
          products,
          cart,
          addToCart,
          clearCart,
          removeFromCart,
          cartTotal,
          cartCount,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => useContext(CartContext);
