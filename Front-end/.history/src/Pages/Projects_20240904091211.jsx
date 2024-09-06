import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ProjectsBox from "../Components/ProjectsBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const state = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projectsContainer",
        start: "top 20%",
        end: "bottom 50%",
        markers: true,
        pin: true,
        scrub: 1,
      },
    });

    tl.from(".projectsHdg", {
      y: 100,
      ease: "power3.out",
      duration: 1.5,
      skewY: 7,
    })
      .from(".right button", {
        x: 25,
        opacity: 0,
        duration: 0.3,
      })
      .from(".projectBox", {
        scaleY: 0,
        opacity: 0,
        duration: 0.9,
      });
  });

  return (
    <div className="projectsContainer">
      <div className="topBar">
        <div className="left">
          <div className="hdgLine">
            <h2 className="projectsHdg">Recent Projects</h2>
          </div>
        </div>
        <div className="right">
          <button>
            <Link to={"/projects"}>View All Projects</Link>
          </button>
        </div>
      </div>

      {<ProjectsBox state={state} />}
    </div>
  );
};

export default Projects;
