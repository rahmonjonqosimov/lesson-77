import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FiSearch } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
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
          <ul className={menu ? "menu__open" : ""}>{link}</ul>
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
