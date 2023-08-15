import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header-wrapper">
      <Link to="/" className="brand">
        eStore
      </Link>
      <nav className="navbar">
        <Link to="/cart" className="shopping-cart">
          <FaShoppingCart />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
