import React from "react";
import Banner from "../../components/banner/Banner";
import Blog from "../../components/blog/Blog";
import Card from "../../components/Hero/Card";
import Hero from "../../components/Hero/Hero";
import Price from "../../components/price/Price";
import Product from "../../components/product/Product";
import Testimonial from "../../components/testimonial/Testimonial";
import TopProduct from "../../components/top/TopProduct";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Price />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
