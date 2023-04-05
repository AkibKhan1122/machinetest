import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
// import About from "../Pages/About";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import Cart from "../components/Cart";
import NotFound from "../Pages/NotFound";
import Footer from "./Footer";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
