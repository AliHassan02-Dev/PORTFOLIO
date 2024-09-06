import React, { useState } from "react";

const AdminDashboard = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectDesc: "",
    // Html: "",
    // Css: "",
    // Js: "",
    // React: "",
    // Wordpress: "",
    // Node: "",
    // MongoDb: "",
    figmaLink: "",
    websiteLink: "",
  });

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;

    setProjectData({
      ...projectData,
      [name]: value,
    });

    // if (checked) {
    //   setProjectData()
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(projectData);
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
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button>Upload Project</button>
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
