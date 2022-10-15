import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Footer from "./common/Footer";
import Header from "./common/Header";

export const Pages = ({ cartItems }) => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home cartItems={cartItems} />} />
          <Route exact path="/cart/:id" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
