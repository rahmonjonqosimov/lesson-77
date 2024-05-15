import React from "react";
import img from "../../assets/images/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero__text">
            <h2>Mobile</h2>
            <h1>Backcover Tempered Glass</h1>
            <button>Shop all !</button>
          </div>
          <img src={img} alt="Phone" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
