import React from "react";
import "./Glass.css";
import img from "../../assets/images/about-tel.svg";

const Glass = () => {
  return (
    <section id="glass">
      <div className="container">
        <div className="glass">
          <div className="none"></div>
          <div className="glass__bg"></div>
          <div className="glass__content">
            <div className="glass__text">
              <h2>
                Shop Premium <br /> Tempered Glass in wholesale Price !
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.  9
              </p>
              <span>LKR : 29</span>
              <button>Shop Tempered Glass </button>
            </div>
            <img src={img} alt="Iphone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glass;
