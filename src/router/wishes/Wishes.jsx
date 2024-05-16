import React from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
const Wishes = () => {
  const wishes = useSelector((s) => s.heart.value);
  console.log(wishes);
  return (
    <>
      {wishes.length ? (
        <Product data={wishes} />
      ) : (
        <h1 style={{ textAlign: "center", margin: "30px 0" }}>
          Hozircha sevimlilar mavjud emas
        </h1>
      )}
    </>
  );
};

export default Wishes;
