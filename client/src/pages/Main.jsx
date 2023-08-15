import React from "react";
import "./Main.css";
import { Outlet, Routes, Route } from "react-router-dom";
import Product from "../components/product/Product";
import CartPage from "./CartPage";
//import CartPage from "./pages/CartPage";

const Main = () => {
  return (
    <main className="main-container">
      <Outlet />
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
};

export default Main;
