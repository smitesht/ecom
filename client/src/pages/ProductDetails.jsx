import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useCartContext } from "../context/CartContextProvider";
import SelectOption from "../components/utils/SelectOption";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartitem, setCartItem] = useState({});
  const [qty, setQty] = useState(1);

  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("http://localhost:8181/api/product/");
    axios
      .get("http://localhost:8181/api/product/" + id)
      .then((resp) => {
        setProduct(resp.data.message);
        //console.log(resp.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addProductToCart = () => {
    const item = { ...product, qty: qty };
    setCartItem(item);
    console.log(item);
    addToCart(item);
    navigate("/cart");
  };

  const OnSelectQty = (qty) => {
    setQty(qty);
  };

  const OnChangeQty = (e) => {
    console.log(e);
    setQty(parseInt(e.target.value));
  };

  const getProductDetails = (product) => {
    return (
      <div className="product-details-wrapper">
        <img className="product-det-image" src={product.image} />
        <section className="product-details">
          <h2 className="title">{product.title}</h2>
          <span className="category">{product.Category.name}</span>
          <div className="buy-qty">
            <SelectOption
              className="mxy1"
              defaultval={cartitem.qty}
              onSelect={OnSelectQty}
            />
            <button className="cta-buy" onClick={addProductToCart}>
              ADD TO CART
            </button>
          </div>
          <div className="prod-desc">{product.description}</div>
        </section>
      </div>
    );
  };

  return product !== null ? getProductDetails(product) : "";
};

export default ProductDetails;
