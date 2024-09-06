import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [clickedOnOpen, setClickedOnOpen] = useState(false);

  console.log(clickedOnOpen);

  const tl = useRef();
  const tl2 = useRef();

  const { contextSafe } = useGSAP(() => {
    tl.current = gsap.timeline();

    tl2.current = gsap.timeline();

    tl.current.to(".menu", {
      x: -20,
      opacity: 1,
      duration: 0.8,
      ease: "linear",
    });

    tl.current.to(".closeIcon", {
      x: -80,
      opacity: 1,
      duration: 0.2,
      ease: "linear",
    });

    tl.current.to(".links a", {
      x: -20,
      opacity: 1,
      duration: 0.4,
      ease: "linear",
      stagger: 0.3,
    });

    tl.current.paused(true);

    tl2.current.from(".logo", {
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: "linear",
      stagger: 0.3,
    });

    tl2.current.from(".menuBtn", {
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: "linear",
      stagger: 0.3,
    });
  });

  const handleClick = contextSafe(() => {
    setClickedOnOpen(true);

    tl.current.play(true);
  });

  const handleCloseClick = contextSafe(() => {
    setClickedOnOpen(false);
    tl.current.reversed(true);
  });

  return (
    <div className="navBar">
      <div className="menu">
        <div className="closeBtn" onClick={handleCloseClick}>
          <IoCloseSharp className="closeIcon" />
        </div>

        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#" id="cv">
            Download CV
          </a>
        </div>
      </div>

      <a href="" className="logo">
        PORTFOLIO
      </a>
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
