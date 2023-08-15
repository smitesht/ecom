import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useCartContext } from "../../context/CartContextProvider";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useCartContext();
  const [totalCartInfo, setTotalCartInfo] = useState({});

  useEffect(() => {
    const initialValue = 0;
    let totalQty = cartItems.reduce((curr, ci) => ci.qty + curr, 0);
    let totalPrice = cartItems.reduce(
      (curr, ci) => parseFloat((ci.qty * ci.price).toFixed(2)) + curr,
      0
    );

    const cartTotal = {
      totalQty: totalQty,
      totalPrice: totalPrice,
    };

    setTotalCartInfo(cartTotal);
  }, [cartItems]);

  return (
    <div className="cart-cotnainer">
      <div className="cart-header">
        <FaCartPlus className="cart-logo" />

        <span className="cart-summary">
          Total Qty: {totalCartInfo.totalQty}
          <span className="cart-summary-price">
            Total Amount:{" "}
            {totalCartInfo.totalPrice
              ? parseFloat(totalCartInfo.totalPrice.toFixed(2))
              : 0}
          </span>
        </span>
      </div>
      <div className="cart-wrapper">
        {cartItems.map((cart) => {
          return <CartItem key={cart.id} cartitem={cart} />;
        })}
      </div>
      <div className="cart-footer">
        <span>
          <FaArrowLeft />
          <Link className="conti-shopping" to="/">
            Continue Shopping
          </Link>
        </span>
        <Link className="btn-cta">Proceed To Checkin</Link>
      </div>
    </div>
  );
};

export default Cart;
