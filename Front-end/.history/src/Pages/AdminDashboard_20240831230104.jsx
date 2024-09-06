import React, { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const AdminDashboard = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectDesc: "",
    figmaLink: "",
    websiteLink: "",
  });

  // FOR IMAGE UPLOADING
  const [projectImage, setProjectImage] = useState("");
  const [projectThumbnail, setProjectThumbnail] = useState("");
  const fileOneInputRef = useRef(null);
  const fileTwoInputRef = useRef(null);

  const handleButtonClickOne = () => {
    fileOneInputRef.current.click();
  };

  const handleButtonClickTwo = () => {
    fileTwoInputRef.current.click();
  };

  const handleFileChangeOne = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setProjectImage(reader.result);
    };
    reader.onerror = () => {
      console.log("Error", error);
    };
  };

  const handleFileChangeTwo = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setProjectThumbnail(reader.result);
    };
    reader.onerror = () => {
      console.log("Error", error);
    };
  };
  // FOR IMAGE UPLOADING/////////////////////////

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("localData", projectData, projectImage, projectThumbnail);

    try {
      const response = await fetch("http://localhost:8080/api/projectUpload", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName: projectName,
          projectDesc: projectDesc,
          createdWith: [
            projectData.Html,
            projectData.Css,
            projectData.Js,
            projectData.Wordpress,
            projectData.React,
            projectData.Node,
            projectData.MongoDb,
          ],
          links: [projectData.figmaLink, projectData.websiteLink],
          projectImage: projectImage,
          projectThumbnail: projectThumbnail,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setProjectData("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboardWrapper">
      <div className="dashboardContainer">
        <div className="topBar">
          <div className="left">
            <h2>Dashboard</h2>
          </div>
          <div className="right">
            <h2>Hi, Ali Hassan</h2>
          </div>
        </div>
        <div className="midContainer">
          <div className="imageBox">
            <div className="image">
              <FiUploadCloud className="uploadIcon" />
              <input
                type="file"
                accept="image/*"
                ref={fileOneInputRef}
                style={{ display: "none" }}
                onChange={handleFileChangeOne}
              />
              <button onClick={handleButtonClickOne}>
                Upload Full Project
              </button>
            </div>
            <div className="image">
              <FiUploadCloud className="uploadIcon" />
              <input
                type="file"
                accept="image/*"
                ref={fileTwoInputRef}
                style={{ display: "none" }}
                onChange={handleFileChangeTwo}
              />
              <button onClick={handleButtonClickTwo}>
                Upload Project Thumbnail
              </button>
            </div>
          </div>

          <input
            type="text"
            name="projectName"
            placeholder="Project Name Here"
            value={projectData.projectName}
            onChange={handleEvent}
          />
          <textarea
            name="projectDesc"
            cols="30"
            rows="10"
            placeholder="Project Description Here"
            value={projectData.projectDesc}
            onChange={handleEvent}
          ></textarea>

          <div className="linksBox">
            <input
              type="text"
              id="figmaLinkk"
              name="figmaLink"
              placeholder="Figma Link Here"
              value={projectData.figmaLink}
              onChange={handleEvent}
            />
            <input
              type="text"
              id="websiteLinkk"
              name="websiteLink"
              placeholder="Website Link Here"
              value={projectData.websiteLink}
              onChange={handleEvent}
            />
          </div>

          <div className="skillBox">
            <div className="skillBar">
              <input
                type="checkbox"
                name="Html"
                // value={projectData.Html}
                value="Html"
                onChange={handleEvent}
              />
              <p>HTML</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="Css"
                // value={projectData.Css}
                value="Css"
                onChange={handleEvent}
              />

              <p>CSS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="Js"
                // value={projectData.Js}
                value="Js"
                onChange={handleEvent}
              />

              <p>JS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="Wordpress"
                // value={projectData.Wordpress}
                value="Wordpress"
                onChange={handleEvent}
              />
              <p>WordPress</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="React"
                // value={projectData.React}
                value="ReactJs"
                onChange={handleEvent}
              />
              <p>ReactJS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="Node"
                // value={projectData.Node}
                value="NodeJs"
                onChange={handleEvent}
              />
              <p>NodeJS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="MongoDb"
                // value={projectData.MongoDb}
                value="MongoDB"
                onChange={handleEvent}
              />
              <p>MongoDB</p>
            </div>
          </div>

          <button onClick={handleSubmit}>Upload Project</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
