import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const estore = window.localStorage.getItem("estore");
    console.log(estore);
    if (estore === null) {
      console.log(JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (cartitem) => {
    console.log(cartitem);
    const ci = cartItems.find((ci) => ci.id === cartitem.id);
    if (!ci) {
      setCartItems([...cartItems, cartitem]);
    } else {
      const cartitemlist = cartItems.map((ci) => {
        return ci.id === cartitem.id ? { ...ci, qty: cartitem.qty } : ci;
      });

      setCartItems([...cartitemlist]);
      const estore_cart = JSON.stringify(cartItems);
      console.log(estore_cart);
      window.localStorage.setItem("estore", estore_cart);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
