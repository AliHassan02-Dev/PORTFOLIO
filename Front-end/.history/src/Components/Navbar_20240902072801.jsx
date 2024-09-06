import React from "react";

const Navbar = ({ setClickedOnOpen, clickedOnOpen }) => {
  const handleClick = () => {
    setClickedOnOpen(!clickedOnOpen);
  };
  return (
    <div className="navBar">
      <div className="menu">
        {/* <div className="closeBtn">
          <IoCloseSharp className="closeIcon" />
        </div> */}

        <div className="links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="" id="cv">
            Download CV
          </a>
        </div>
      </div>

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
