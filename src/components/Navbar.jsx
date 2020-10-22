import React from "react";
import Kakashi from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Kakashi} />
      <div className="brand_logo">AnimeSearch</div>
    </nav>
  );
};

export default Navbar;
