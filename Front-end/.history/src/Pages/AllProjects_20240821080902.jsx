import React from "react";
import { GoLink } from "react-icons/go";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projectsData } from "../data";
import { Link, useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();

  const previewProject = (projects) => {
    navigate("projectPreview", projects);
  };

  return (
    <div className="projectsContainer">
      <h2 className="hdg">My Projects</h2>
      <div className="projectsWrapper">
        {projectsData?.map((projects) => {
          return (
            <div className="projectBox">
              <div className="thumbnail">
                <img src={projects?.thumbnail} alt="" />
                <div className="overlay">
                  <div className="iconBox">
                    <Link to={projects?.websiteLink}>
                      <GoLink className="linkIcon" />
                    </Link>
                  </div>
                  <div className="iconBox" onClick={() => previewProject(data)}>
                    <FaArrowUpRightFromSquare className="linkIcon" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
