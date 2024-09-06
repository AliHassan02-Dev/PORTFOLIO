import React, { useEffect, useState } from "react";
import { GoLink } from "react-icons/go";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projectsData } from "../data";
import { Link, useNavigate } from "react-router-dom";

const ProjectsBox = () => {
  const [projectsDataa, setProjectsDataa] = useState();

  const navigate = useNavigate();

  const getProjects = async () => {
    const response = await fetch("http://localhost:8080/api/getAllProject", {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("get", data);
    setProjectsDataa(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

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
export default ProjectsBox;
