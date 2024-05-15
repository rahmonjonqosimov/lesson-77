import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { addToHeart } from "../../redux/heartSlice";

const Product = ({ data, loading }) => {
  const heart = useSelector((s) => s.heart.value);
  const dispatch = useDispatch();
  console.log(heart);
  const card = data?.map((item) => (
    <div key={item.id} className="card">
      <div className="card__img">
        <Link to={`/product/${item.id}`}>
          <img src={item?.image} alt={item?.title} />
        </Link>
        <button className="heart">
          {heart?.some((el) => el.id !== item.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
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
        {loading ? <h1>Loading...</h1> : <div className="wrapper">{card}</div>}
      </div>
    </section>
  );
};

export default Product;
