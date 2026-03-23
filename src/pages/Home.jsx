import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Banner />
    </>
  );
};

export default Home;