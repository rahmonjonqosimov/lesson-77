import React from "react";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { useGetProductsQuery } from "../../redux/productsApi";
import Product from "../../components/product/Product";
import About from "../../components/about/About";
import Glass from "../../components/glass/Glass";
import WhatFor from "../../components/what-for/WhatFor";
import Loading from "../../components/loading/Loading";
const Home = () => {
  const { data, isLoading } = useGetProductsQuery();
  console.log(isLoading);
  console.log(data);
  return (
    <>
      <Hero />
      {isLoading ? <Loading /> : <Product data={data} loading={isLoading} />}
      <About />
      <Glass />
      <WhatFor />
    </>
  );
};

export default Home;
