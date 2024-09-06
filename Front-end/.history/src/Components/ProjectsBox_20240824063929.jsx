import React from "react";
import { GoLink } from "react-icons/go";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projectsData } from "../data";
import { Link, useNavigate } from "react-router-dom";

const ProjectBox = () => {
  const navigate = useNavigate();

  return (
    <div className="projectsWrapper">
      {projectsData?.map((projects) => {
        return (
          <div className="projectBox">
            <div className="thumbnail">
              <img src={projects?.thumbnail} alt="" />
              <div className="overlay">
                <div className="iconBox">
                  <Link target={"_blank"} to={projects?.websiteLink}>
                    <GoLink className="linkIcon" />
                  </Link>
                </div>
                <div
                  className="iconBox"
                  onClick={() =>
                    navigate("/projects/projectPreview", { state: projects })
                  }
                >
                  <FaArrowUpRightFromSquare className="linkIcon" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProjectBox;
