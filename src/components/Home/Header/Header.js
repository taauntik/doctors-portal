import React from "react";

// internal imports
import Navbar from "./Navbar";
import HeaderMain from "./HeaderMain";
import "../../../styles/Home/Header/Header.css";
import BusinessInfo from "./BusinessInfo/BusinessInfo";

function Header() {
  return (
    <div className="header-container container-fluid">
      <Navbar />
      <HeaderMain />
      <BusinessInfo />
    </div>
  );
}

export default Header;
