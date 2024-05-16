import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleHeart } from "../../redux/heartSlice";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";

const Product = ({ data }) => {
  const heart = useSelector((s) => s.heart.value);
  const products = useSelector((s) => s.cart.value);
  const dispatch = useDispatch();
  const card = data?.map((item) => (
    <div key={item?.id} className="card">
      <div className="card__img">
        <Link to={`/product/${item?.id}`}>
          <img src={item?.image} alt={item?.title} />
        </Link>
        <button onClick={() => dispatch(toggleHeart(item))} className="heart">
          {heart?.some((el) => el.id === item.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          className="cart"
          onClick={() => {
            dispatch(addToCart(item));

            if (products?.findIndex((el) => el.id == item.id) < 0) {
              return toast.success("Added to Cart ");
            }
          }}
        >
          {products?.some((el) => el.id === item.id) ? (
            <>
              {}
              <BsCart3 style={{ color: "#46A358" }} />
            </>
          ) : (
            <BsCart3 />
          )}
        </button>
      </div>
      <h3 title={item?.title} className="card__title">
        {item?.title}
      </h3>
      <p> $ {item?.price}</p>
    </div>
  ));
  return (
    <section id="product">
      <div className="container">
        <div className="wrapper">{card}</div>
      </div>
    </section>
  );
};

export default Product;
