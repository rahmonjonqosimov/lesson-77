import React from "react";
import Cart from "../../components/cart/Cart";
import { useSelector } from "react-redux";

const ProductCard = () => {
  let data = useSelector((s) => s.cart.value);
  console.log(data);

  return (
    <>
      <Cart data={data} />
    </>
  );
};

export default ProductCard;
