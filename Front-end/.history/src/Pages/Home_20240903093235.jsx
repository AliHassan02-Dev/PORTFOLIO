import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    gsap.from(".nonStroke", {});
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
