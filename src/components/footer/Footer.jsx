import React from "react";
import logo from "../../assets/images/footer-logo.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const iconItems = [
    {
      id: 1,
      logo: <PiWhatsappLogoFill />,
      title: "Whatsapp",
      url: "https://www.whatsapp.com/",
    },
    {
      id: 2,
      logo: <ImFacebook2 />,
      title: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      id: 3,
      logo: <FaSquareInstagram />,
      title: "Instargram",
      url: "https://www.instagram.com/",
    },
    {
      id: 4,
      logo: <AiFillTikTok />,
      title: "Tik Tok",
      url: "https://www.tiktok.com",
    },
  ];

  const icons = iconItems?.map((el) => (
    <Link key={el.id} to={el?.url} target="_blank">
      <div className="icon">
        {el.logo} <span>{el.title}</span>
      </div>
    </Link>
  ));

  const linkItem = [
    {
      id: 1,
      title: "Contact",
      item: [
        "info@example.gmail.com",
        "+998 97 667 68 68",
        "Toshkent Bektemir",
      ],
    },
    {
      id: 2,
      title: "Useful",
      item: ["  Shop All ", "Tempered Glass", "Back-cover", "About us"],
    },
  ];

  const links = linkItem?.map((el) => (
    <ul key={el.id}>
      <h4>{el.title}</h4>
      {el?.item?.map((item, inx) => (
        <li key={inx}>{item}</li>
      ))}
    </ul>
  ));

  return (
    <section id="footer">
      <div className="container">
        <div className="footer">
          <div className="first">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {links}
          <div className="footer__links">{icons}</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
