import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const MainWrapper = () => {
  return (
    <div className="mainWrapper">
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default MainWrapper;
