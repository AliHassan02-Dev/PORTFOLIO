import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    ScrollTrigger.create({
      trigger: ".aboutContainer",
      start: "top top",
      bottom: "bottom bottom",
    });

    tl.from(
      ".left h2",
      {
        y: 100,
        ease: "power3.out",
        duration: 2,
        skewY: 7,
        scrollTrigger: ScrollTrigger(),
      },
      "hdg"
    );

    tl.from(
      ".left #aboutPara",
      {
        x: -25,
        opacity: 0,
        duration: 0.4,
      },
      "p"
    );

    tl.from(
      ".imageBox",
      {
        scaleX: 0,
        opacity: 0,
        duration: 1,
      },
      "abtImg"
    );

    tl.from(
      ".right h2",
      {
        y: 100,
        ease: "power3.out",
        duration: 2,
        skewY: -7,
      },
      "hdg"
    );

    tl.from(
      ".right #aboutPara",
      {
        x: 25,
        opacity: 0,
        duration: 0.4,
      },
      "p"
    );

    tl.from(
      ".circleImg",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
      },
      "abtImg"
    );

    tl.to(".circleImg", {
      rotate: 360,
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div className="aboutContainer containers">
      <div className="left">
        <div className="hdgLine">
          <h2 id="aboutAni">ABOUT ME</h2>
        </div>
        <p id="aboutPara">
          <span>Introduction:</span> <br /> My name is Ali Hassan Siddiqui. I am
          fresher with a skills of web development and designing. I did a web
          designing course of 6 Months. Below are some the projects I created as
          a pratice.
        </p>
        <div className="imageBox"></div>
      </div>
      <div className="right">
        <div className="circleImg"></div>
        <div className="hdgLine">
          <h2>Web Developer</h2>
        </div>
        <p id="aboutPara">
          Enthusiastic and dedicated web developer with a solid understanding of
          modern web technologies and design principles. Proficient in building
          responsive, user-friendly websites and eager to contribute innovative
          solutions to a collaborative team. Committed to continuous learning
          and growth in a fast-paced development environment.
        </p>
      </div>
    </div>
  );
};

export default About;
