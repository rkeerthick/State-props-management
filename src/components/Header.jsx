import React from "react";
import Logo from "../assets/react-core-concepts.png";
import './Header.css'


const Header = () => {
  const topics = ["Fundamental", "Core", "Crucial"];
  const genRandomNum = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };
  return (
    <header>
      <img src={Logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {topics[genRandomNum(2)]} React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
};

export default Header;
