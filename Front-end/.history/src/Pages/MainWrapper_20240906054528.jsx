import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Navbar from "../Components/Navbar";

const MainWrapper = () => {
  return (
    <div className="mainWrapper">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default MainWrapper;
