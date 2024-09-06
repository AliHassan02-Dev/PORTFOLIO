import React, { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import ProjectsBox from "./Components/ProjectsBox";
import { IoCloseSharp } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const App = () => {
  const [clickedOnOpen, setClickedOnOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".menu", {
      x: 0,
      duration: 1.5,
      ease: "power3",
    });

    tl.to(".links a", {
      x: 25,
      opacity: 1,
      duration: 1,
      ease: "power3",
    });
  });

  return (
    <div className="mainWrapper">
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
