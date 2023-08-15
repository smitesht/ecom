import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/` + product.id} className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <span className="category">{product.Category.name}</span>
      <span className="title">{product.title}</span>
      <span className="price-tag">${product.price}</span>
    </Link>
  );
};

export default Product;
