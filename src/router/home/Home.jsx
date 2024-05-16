import React from "react";
import Hero from "../../components/hero/Hero";
import { useGetProductsQuery } from "../../redux/productsApi";
import Product from "../../components/product/Product";
import About from "../../components/about/About";
import Glass from "../../components/glass/Glass";
import WhatFor from "../../components/what-for/WhatFor";
import Loading from "../../components/loading/Loading";
const Home = () => {
  const { data, isLoading } = useGetProductsQuery();
  console.log(data);
  return (
    <>
      <Hero />
      {isLoading ? <Loading /> : <Product data={data} />}
      <About />
      <Glass />
      <WhatFor />
    </>
  );
};

export default Home;
