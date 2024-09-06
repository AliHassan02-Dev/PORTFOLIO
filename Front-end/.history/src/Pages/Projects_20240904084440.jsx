import React from "react";
import { Link } from "react-router-dom";
import ProjectsBox from "../Components/ProjectsBox";

const Projects = () => {
  return (
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
  );
};

export default Projects;
