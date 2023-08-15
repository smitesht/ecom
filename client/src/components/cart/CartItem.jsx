import React, { useState } from "react";
import "./Cart.css";
import SelectOption from "../utils/SelectOption";
import { useCartContext } from "../../context/CartContextProvider";

const CartItem = ({ cartitem }) => {
  const { addToCart } = useCartContext();
  const [cartItemQty, setCartItemQty] = useState(cartitem.qty);

  const OnSelectQty = (qty) => {
    setCartItemQty(qty);
    const updateCartItem = { ...cartitem, qty: qty };
    console.log(updateCartItem);
    addToCart(updateCartItem);
  };

  const addProductToCart = () => {
    const updateCartItem = { ...cartitem, qty: cartItemQty };
    console.log(updateCartItem);
    addToCart(updateCartItem);
  };

  return (
    <div className="cart-item-wrapper">
      <section className="cart-image-wrapper">
        <img className="cart-image" src={cartitem.image} />
      </section>

      <section className="cart-item-details">
        <span className="cart-title">{cartitem.title}</span>
        <span className="cart-price">Price: ${cartitem.price}</span>
        <div className="cart-select-wrapper">
          <SelectOption defaultval={cartItemQty} onSelect={OnSelectQty} />
          <button className="cart-update-qty" onClick={addProductToCart}>
            UPDATE
          </button>
          <span className="cart-item-total">
            Total: ${parseFloat((cartitem.price * cartItemQty).toFixed(2))}
          </span>
        </div>
      </section>
    </div>
  );
};

export default CartItem;
