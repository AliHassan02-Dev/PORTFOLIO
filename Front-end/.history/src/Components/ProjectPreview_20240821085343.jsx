import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoWordpress } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { GoLink } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const ProjectPreview = () => {
  const state = useLocation();
  const data = state?.state;

  data.createdWith?.map((e) => {
    console.log(e, 'hh');
  });

  return (
    <div className="projectDetails">
      <div className="left">
        <img
          src="https://cdn.prod.website-files.com/600c68cb72173ece9c8958ed/60bdcf18caffb600e9c53455_Frame%201.png"
          alt=""
        />
      </div>
      <div className="right">
        <div className="projectContent">
          <h2>{data.projectName || "Project Name"}</h2>
          <p>{data.projectDetails || "Project Details"}</p>
        </div>
        <div className="projectTechnology">
          <h2>Created With:</h2>
          <div className="icons">
            <p>{data.createdWith || "createdWith"}</p>
            {/* <TiHtml5 className="techName html" />
            <IoLogoCss3 className="techName css" />
            <SiJavascript className="techName js" />
            <IoLogoReact className="techName react" /> */}
          </div>
        </div>
        <div className="links">
          <h2>Project Links:</h2>
          <div className="icons">
            <GoLink className="linkIcon" />
            <IoLogoGithub className="linkIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
