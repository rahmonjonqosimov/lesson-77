import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.svg";
import { FiSearch } from "react-icons/fi";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
const Navbar = () => {
  const wishesCount = useSelector((s) => s.heart.value);
  const cartCount = useSelector((s) => s.cart.value);
  const [menu, setMenu] = useState(false);
  const navbarItem = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Shop All",
      url: "/shop",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "Login",
      url: "/login",
    },
  ];
  const link = navbarItem?.map((el) => (
    <li key={el.id}>
      <NavLink to={el.url}>{el.title}</NavLink>
    </li>
  ));
  return (
    <section id="navbar">
      <div className="container">
        <div className="navbar">
          <ul className={menu ? "menu__open" : ""}>
            {link}
            <li>
              <Link to={"/wishes"}>
                <FaRegHeart />
                <sup className="wishes__count">{wishesCount.length}</sup>
              </Link>
            </li>
            <li>
              <Link to={"/product-cart"}>
                <BsCart3 />
                <sup className="wishes__count">{cartCount.length}</sup>
              </Link>
            </li>
          </ul>
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
          <form className="navbar__serach" action="">
            <input type="search" placeholder="Search Product" />
            <button>
              <FiSearch />
            </button>
          </form>
          <div
            onClick={() => setMenu((p) => !p)}
            className={`menu ${menu ? "show" : ""}`}
          >
            <div className="menu__item"></div>
            <div className="menu__item"></div>
            <div className="menu__item"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
