import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [clickedOnOpen, setClickedOnOpen] = useState(false);

  console.log(clickedOnOpen);

  const handleClick = () => {
    setClickedOnOpen(!clickedOnOpen);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".menu", {
      width: "28%",
      opacity: 1,
      duration: 1.2,
      ease: "power3",
    });

    tl.to(".closeIcon", {
      x: -80,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(".links a", {
      x: -20,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
    });
  });

  return (
    <div className="navBar">
      <div className="menu">
        <div className="closeBtn">
          <IoCloseSharp className="closeIcon" />
        </div>

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
