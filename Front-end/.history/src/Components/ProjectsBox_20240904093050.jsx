import React, { useEffect, useState } from "react";
import { GoLink } from "react-icons/go";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ProjectsBox = () => {
  const [projectsData, setProjectsData] = useState();

  const navigate = useNavigate();

  const getProjects = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/getAllProjects", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("get", data);
      setProjectsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projectsContainer",
        start: "top -20%",
        end: "bottom 50%",
        markers: true,
      },
    });

    tl.from(".projectBox", {
      y: 25,
      opacity: 0,
      duration: 0.9,
    });
  });

  return (
    <div className="projectsWrapper">
      {projectsData?.map((data, idx) => {
        return (
          <div key={data?._id} className={`projectBox`}>
            <div className="thumbnail">
              <img src={data?.projectThumbnail} alt="" />
              <div className="overlay">
                <div className="iconBox">
                  <Link target={"_blank"} to={data?.links[1]}>
                    <GoLink className="linkIcon" />
                  </Link>
                </div>
                <div
                  className="iconBox"
                  onClick={() =>
                    navigate("/projects/projectPreview", { state: data })
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
