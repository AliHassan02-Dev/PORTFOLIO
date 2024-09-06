import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import ProjectsBox from "./Components/ProjectsBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const App = () => {
  // const [clickedOnOpen, setClickedOnOpen] = useState(false);

  const [blur, setBlur] = useState(true);

  // console.log(clickedOnOpen);

  // useGSAP(() => {
  //   const tl = gsap.timeline({ paused: true });

  //   tl.to(".menu", {
  //     x: 0,
  //     duration: 1.2,
  //     ease: "power3",
  //   });

  //   tl.to(".links a", {
  //     x: 50,
  //     opacity: 1,
  //     duration: 1.2,
  //     ease: "power3.out",
  //     stagger: 0.3,
  //   });
  // });

  return (
    <div className={`mainWrapper ${blur ? "blurred" : null}`}>
      <Navbar blur={blur} setBlur={setBlur} />

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
