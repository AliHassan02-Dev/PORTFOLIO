import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".left h2", {
      y: 100,
      ease: "power2.out",
      duration: 3,
      skewY: 7,
      // stagger: {
      //   amount: 0.3
      // }
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
        <h2>Web Developer</h2>
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
