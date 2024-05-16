import React from "react";
import { useSelector } from "react-redux";
import CartSlice from "../../redux/cartSlice";
import Cart from "../../components/cart/Cart";

const ProductCard = () => {
  let data = useSelector((s) => s.cart.value);

  return (
    <>
      <Cart data={data} />
    </>
  );
};

export default ProductCard;
