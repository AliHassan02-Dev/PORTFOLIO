import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import ProjectsBox from "./Components/ProjectsBox";
import Projects from "./Pages/Projects";

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
      <Projects />

      {/* FOOTER SECTION */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
