import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clickedOnOpen, setClickedOnOpen] = useState(false);

  console.log(clickedOnOpen);

  const tl = useRef();
  const tl2 = useRef();

  const { contextSafe } = useGSAP(() => {
    tl.current = gsap.timeline();

    tl2.current = gsap.timeline();

    tl.current.paused(true);

    tl.current.to(".menu", {
      y: 1,
      opacity: 1,
      duration: 0.8,
      ease: "linear",
    });

    tl.current.to(".closeIcon", {
      y: "50px",
      opacity: 1,
      duration: 0.2,
      ease: "linear",
    });

    tl.current.to(".links a", {
      y: 1,
      opacity: 1,
      duration: 0.4,
      ease: "linear",
      stagger: 0.3,
    });

    tl2.current.from(".logo", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "linear",
    });

    tl2.current.from(".openIcon", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "linear",
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
          <a href="#homeSect">Home</a>
          <a href="#aboutSect">About</a>
          <a href="#skillsSect">Skills</a>
          <a href="#projectSect">Projects</a>
          <a href="/" id="cv">
            Download CV
          </a>
        </div>
      </div>

      <a href="" className="logo">
        PORTFOLIO
      </a>
      <div className="openBtn">
        <HiMenuAlt3 className="openIcon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Navbar;
