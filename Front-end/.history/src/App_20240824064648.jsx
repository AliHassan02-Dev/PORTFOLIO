import React, { useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import ProjectsBox from "./Components/ProjectsBox";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [clickedOnOpen, setClickedOnOpen] = useState(false);
  console.log(clickedOnOpen);

  const tlMenu = gsap.timeline();
  if (clickedOnOpen === true) {
    tlMenu.to(".menu", {
      transform: "translateY(0%)",
      opacity: 1,
      duration: 1,
      ease: "bounce.out",
    });
  }
  if (clickedOnOpen === false) {
    tlMenu.to(".menu", {
      transform: "translateY(-100%)",
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }

  return (
    <div className="mainWrapper">
      <div className="menu">
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

      <Navbar
        clickedOnOpen={clickedOnOpen}
        setClickedOnOpen={setClickedOnOpen}
      />

      {/* HOME SECTION */}
      <Home />

      {/* ABOUT SECTION */}
      <About />

      {/* SKILLS SECTION */}
      <Skills />

      {/* PROJECTS SECTION */}
      <div className="projectsContainer">
        <div className="topBar">
          <div className="left">
            <h2>Recent Projects</h2>
          </div>
          <div className="right">
            <button>
              <Link to={"/projects"}>View All Projects</Link>
            </button>
          </div>
        </div>

        {<ProjectsBox />}
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
};

export default App;
