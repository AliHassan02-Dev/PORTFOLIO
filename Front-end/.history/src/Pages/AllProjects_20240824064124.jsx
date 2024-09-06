import React from "react";
import ProjectsBox from "../Components/ProjectsBox";

const AllProjects = () => {
  return (
    <div className="projectsContainer">
      <h2 className="hdg">My Projects</h2>
      {<ProjectsBox />}
    </div>
  );
};

export default AllProjects;
