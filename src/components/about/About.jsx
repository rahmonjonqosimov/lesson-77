import React from "react";
import "./About.css";
import img from "../../assets/images/about.svg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <div className="hr"></div>
          <h4>about us</h4>

          <h2>
            If you’re looking for a Premium Quality Tempered Glass or Back-cover
            for your Device{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </p>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
