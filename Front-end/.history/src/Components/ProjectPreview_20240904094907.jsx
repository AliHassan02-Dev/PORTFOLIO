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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ProjectPreview = () => {
  const state = useLocation();
  const data = state?.state;

  const skills = data?.createdWith;

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".NOTE", {
      x: -100,
      opacity: 0,
      duration: 0.4,
    })
      .from(".imgProject", {
        scale: 0,
        duration: 0.5,
        ease: "linear",
      })
      .from(".projectContent h2", {
        y: 100,
        ease: "power3.out",
        duration: 1,
        skewY: 7,
      })
      .from(".projectContent p", {
        x: -25,
        duration: 0.4,
        opacity: 0,
      })
      .from(".projectTechnology h2", {
        y: 100,
        ease: "power3.out",
        duration: 1,
        skewY: 7,
      })
      .from(".techName", {
        x: -25,
        opacity: 0,
        duration: 0.4,
      });
  });

  return (
    <div className="projectDetails">
      <div className="left">
        <p className="NOTE">
          NOTE: <br /> This is a low quality image. View the full project by
          clicking on the links below
        </p>
        <div className="hdgLine">
          <img className="imgProject" src={data?.projectImage} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="projectContent">
          <div className="hdgLine">
            <h2>{data?.projectName || "Project Name"}</h2>
          </div>
          <p>{data?.projectDesc || "Project Details"}</p>
        </div>
        <div className="projectTechnology">
          <div className="hdgLine">
            <h2>Created With:</h2>
          </div>
          <div className="icons">
            {/* <div className="hdgLine"> */}
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
            {/* </div> */}
          </div>
        </div>
        <div className="links">
          <h2>Project Links:</h2>
          <div className="icons">
            {data?.links[0] ? (
              <Link target={"_blank"} to={data?.links[0]}>
                <FaFigma className="techName figma" />
              </Link>
            ) : null}
            {data?.links[1] ? (
              <Link target={"_blank"} to={data?.links[1]}>
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
