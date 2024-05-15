import React from "react";
import "./WhatFor.css";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePriceCheck, MdWorkspacePremium } from "react-icons/md";

const WhatFor = () => {
  const data = [
    {
      id: 1,
      title: "Fast Delivery",
      url: <FaCarSide />,
    },
    {
      id: 2,
      title: "Cheap Price",
      url: <MdOutlinePriceCheck />,
    },
    {
      id: 3,
      title: "Premium Quality",
      url: <MdWorkspacePremium />,
    },
  ];

  const card = data?.map((el) => (
    <div key={el.id} className="card">
      {el.url}
      <h3>{el.title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  ));
  return (
    <section id="what__for">
      <div className="container">
        <div className="what__for">
          <div className="title">
            <div className="hr"></div>
            <h4>Why Choose US</h4>
          </div>
          <div className="wrapper">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default WhatFor;
