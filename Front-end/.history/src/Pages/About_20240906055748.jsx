import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutContainer",
        start: "top top",
        end: "bottom bottom",
        markers: true,
      },
    });

    tl.from(
      ".leftHdg",
      {
        y: 100,
        ease: "power3.out",
        duration: 1.5,
        skewY: 7,
      },
      "hdg"
    )
      .from(
        ".left #aboutPara",
        {
          x: -25,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        "p"
      )
      .from(
        ".imageBox",
        {
          scaleX: 0,
          opacity: 0,
          duration: 1,
        },
        "abtImg"
      )
      .from(
        ".rightHdg",
        {
          y: 100,
          ease: "power3.out",
          duration: 1.5,
          skewY: -7,
        },
        "hdg"
      )
      .from(
        ".right .rightPara",
        {
          x: 25,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        "p"
      )
      .from(
        ".circleImg",
        {
          scale: 0,
          opacity: 0,
          duration: 1,
        },
        "abtImg"
      )
      .to(".circleImg", {
        rotate: 360,
        duration: 4,
        repeat: -1,
        ease: "none",
      });
  });

  return (
    <section id="aboutSect">
      <div className="aboutContainer containers" id="aboutSect">
        <div className="left">
          <div className="hdgLine">
            <h2 id="aboutAni" className="leftHdg">
              ABOUT ME
            </h2>
          </div>
          <p id="aboutPara">
            <span>Introduction:</span> <br /> My name is Ali Hassan Siddiqui. I
            am fresher with a skills of web development and designing. I did a
            web designing course of 6 Months. Below are some the projects I
            created as a pratice.
          </p>
          <div className="imageBox"></div>
        </div>
        <div className="right">
          <div className="circleImg"></div>
          <div className="hdgLine">
            <h2 className="rightHdg">Web Developer</h2>
          </div>
          <p className="rightPara">
            Enthusiastic and dedicated web developer with a solid understanding
            of modern web technologies and design principles. Proficient in
            building responsive, user-friendly websites and eager to contribute
            innovative solutions to a collaborative team. Committed to
            continuous learning and growth in a fast-paced development
            environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
