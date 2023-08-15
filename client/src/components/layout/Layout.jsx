import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
