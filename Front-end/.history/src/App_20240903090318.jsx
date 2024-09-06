import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import ProjectsBox from "./Components/ProjectsBox";

const App = () => {
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
