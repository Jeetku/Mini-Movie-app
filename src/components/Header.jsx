import React from "react";
import logo from "../logo/movix-logo.png";
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="header">
      <h1>Movix-Movie Review</h1>
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
};

export default Header;
