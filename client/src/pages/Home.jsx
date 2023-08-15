import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Product from "../components/product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8181/api/product")
      .then((resp) => {
        setProducts(resp.data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-wrapper">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Home;
