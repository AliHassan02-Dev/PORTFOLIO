import React from "react";

const Navbar = ({ setClickedOnOpen, clickedOnOpen }) => {
  const handleClick = () => {
    setClickedOnOpen(!clickedOnOpen);
  };
  return (
    <div className="navBar">
      <a href="">PORTFOLIO</a>
      <div
        className={`${clickedOnOpen ? "menuBtn-active" : "menuBtn"}`}
        onClick={handleClick}
      >
        <span id="line1"></span>
        <span id="line2"></span>
        <span id="line3"></span>
      </div>
    </div>
  );
};

export default Navbar;
