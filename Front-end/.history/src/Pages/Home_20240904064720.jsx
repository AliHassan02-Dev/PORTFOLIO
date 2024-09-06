import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    gsap.from(".nonStroke", {
      y: 15,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".strokeText1", {
      y: "0%",
      opacity: 0,
      duration: 0.4,

      scrollTrigger: {
        trigger: "homeContainer",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: 2,
        markers: true,
      },
    });

    gsap.from(".strokeText2", {
      y: "0%",
      opacity: 0,
      duration: 1.5,
    });
  });

  return (
    <div className="homeContainer">
      <div className="heroContainer">
        <h2 className="strokeText1">WEB DEVELOPER</h2>
        <h2 className="nonStroke">ALI HASSAN</h2>
        <h2 className="strokeText2">WEB DESIGNER</h2>
      </div>
    </div>
  );
};

export default Home;
