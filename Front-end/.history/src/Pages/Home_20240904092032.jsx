import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeContainer",
        start: "top top",
        end: "bottom bottom",
        markers: true,
        pin: true,
        scrub: 1,
      },
    });

    tl.to(".strokeText1", {
      y: "-85%",
      duration: 1,
      opacity: 1,
      ease: "power3",
    })
      .to(".nonStroke", {
        scale: 1,
        duration: 0.9,
        opacity: 1,
        ease: "power3",
      })
      .to(".strokeText2", {
        y: "85%",
        duration: 1,
        opacity: 1,
        ease: "power3",
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
