import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const [clickedOnOpen, setClickedOnOpen] = useState(true);

  console.log(clickedOnOpen);

  const tl = useRef();

  // const handleClick = contextSafe(() => {
  //   setClickedOnOpen(!clickedOnOpen);

  //   const tl = gsap.timeline();

  //   tl.to(".menu", {
  //     x: 0,
  //     duration: 1.2,
  //     ease: "power3",
  //   });

  //   tl.to(".links a", {
  //     x: 50,
  //     opacity: 1,
  //     duration: 1.2,
  //     ease: "power3.out",
  //     stagger: 0.3,
  //   });

  //   tl.paused(true);
  // });

  const { contextSafe } = useGSAP(() => {
    tl.current = gsap.timeline().to(".menu", {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3",
    });

    tl.current = gsap.timeline().to(".links a", {
      x: 50,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.3,
    });
  });

  const handleClick = contextSafe(() => {
    setClickedOnOpen(!clickedOnOpen);
    tl.current.reversed(!tl.current.reversed());
  });

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
