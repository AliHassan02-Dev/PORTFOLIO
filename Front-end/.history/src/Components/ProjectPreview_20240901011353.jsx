import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { IoLogoWordpress } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { FaFigma } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";

const ProjectPreview = () => {
  const state = useLocation();
  const data = state?.state;

  const skills = data?.createdWith;
  const links = data?.links;

  return (
    <div className="projectDetails">
      <div className="left">
        <img src={data?.projectImage} alt="" />
      </div>
      <div className="right">
        <div className="projectContent">
          <h2>{data?.projectName || "Project Name"}</h2>
          <p>{data?.projectDesc || "Project Details"}</p>
        </div>
        <div className="projectTechnology">
          <h2>Created With:</h2>
          <div className="icons">
            {skills?.includes("Html") ? (
              <TiHtml5 className="techName html" />
            ) : null}
            {skills?.includes("Css") ? (
              <IoLogoCss3 className="techName css" />
            ) : null}
            {skills?.includes("Js") ? (
              <SiJavascript className="techName js" />
            ) : null}
            {skills?.includes("React") ? (
              <IoLogoReact className="techName react" />
            ) : null}
            {skills?.includes("Wordpress") ? (
              <IoLogoWordpress className="techName wordpress" />
            ) : null}
            {skills?.includes("Node") ? (
              <IoLogoNodejs className="techName node" />
            ) : null}
            {skills?.includes("MongoDb") ? (
              <SiMongodb className="techName mongodb" />
            ) : null}
          </div>
        </div>
        <div className="links">
          <h2>Project Links:</h2>
          <div className="icons">
            {data?.isFigmaLink ? (
              <Link target={"_blank"} to={data?.figmaLink}>
                <FaFigma className="techName figma" />
              </Link>
            ) : null}
            {data?.isWebsiteLink ? (
              <Link target={"_blank"} to={data?.websiteLink}>
                <RiGlobalLine className="techName website" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
