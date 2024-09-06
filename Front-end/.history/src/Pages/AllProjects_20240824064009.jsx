import React from "react";
import { GoLink } from "react-icons/go";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projectsData } from "../data";
import { Link, useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="projectsContainer">
      <h2 className="hdg">My Projects</h2>
      {<ProjectsBox />}
    </div>
  );
};

export default AllProjects;

{
  /* <div className="projectBox">
          <div className="thumbnail">
            <img
              src="https://cdn.prod.website-files.com/600c68cb72173ece9c8958ed/60bdcf18caffb600e9c53455_Frame%201.png"
              alt=""
            />

            <div className="overlay">
              <div className="iconBox">
                <GoLink className="linkIcon" />
              </div>
              <div className="iconBox">
                <FaArrowUpRightFromSquare className="linkIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <div className="thumbnail">
            <img
              src="https://cdn.prod.website-files.com/600c68cb72173ece9c8958ed/60bdcf18caffb600e9c53455_Frame%201.png"
              alt=""
            />

            <div className="overlay">
              <div className="iconBox">
                <GoLink className="linkIcon" />
              </div>
              <div className="iconBox">
                <FaArrowUpRightFromSquare className="linkIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <div className="thumbnail">
            <img
              src="https://cdn.prod.website-files.com/600c68cb72173ece9c8958ed/60bdcf18caffb600e9c53455_Frame%201.png"
              alt=""
            />

            <div className="overlay">
              <div className="iconBox">
                <GoLink className="linkIcon" />
              </div>
              <div className="iconBox">
                <FaArrowUpRightFromSquare className="linkIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <div className="thumbnail">
            <img
              src="https://cdn.prod.website-files.com/600c68cb72173ece9c8958ed/60bdcf18caffb600e9c53455_Frame%201.png"
              alt=""
            />

            <div className="overlay">
              <div className="iconBox">
                <GoLink className="linkIcon" />
              </div>
              <div className="iconBox">
                <FaArrowUpRightFromSquare className="linkIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <div className="thumbnail">
            <img
              src="https://cdn.prod.website-files.com/600c68cb72173ece9c8958ed/60bdcf18caffb600e9c53455_Frame%201.png"
              alt=""
            />

            <div className="overlay">
              <div className="iconBox">
                <GoLink className="linkIcon" />
              </div>
              <div className="iconBox">
                <FaArrowUpRightFromSquare className="linkIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <div className="thumbnail">
            <img
              src="https://cdn.prod.website-files.com/600c68cb72173ece9c8958ed/60bdcf18caffb600e9c53455_Frame%201.png"
              alt=""
            />

            <div className="overlay">
              <div className="iconBox">
                <GoLink className="linkIcon" />
              </div>
              <div className="iconBox">
                <FaArrowUpRightFromSquare className="linkIcon" />
              </div>
            </div>
          </div>
        </div> */
}
