import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import ProjectsBox from "./Components/ProjectsBox";

const App = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".strokeText1", {
      y: "-85%",
      duration: 1,
      opacity: 1,
      ease: "power3",
    });

    tl.to(".nonStroke", {
      scale: 1,
      duration: 0.8,
      opacity: 1,
      ease: "power3",
    });

    tl.to(".strokeText2", {
      y: "85%",
      duration: 1,
      opacity: 1,
      ease: "power3",
    });
  });

  return (
    <div className="mainWrapper">
      <Navbar />

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
