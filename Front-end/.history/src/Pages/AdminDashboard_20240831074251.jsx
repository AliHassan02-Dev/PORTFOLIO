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
    // Figma: "",
    // Website: "",
  });

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProjectData({
      ...projectData,
      [name]: value,
    });
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

          <div className="skillBox">
            <div className="skillBar">
              <input
                type="checkbox"
                name="Html"
                value={projectData.Html}
                onChange={handleEvent}
              />
              <p>HTML</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="Css"
                value={projectData.Css}
                onChange={handleEvent}
              />

              <p>CSS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="Js"
                value={projectData.Js}
                onChange={handleEvent}
              />

              <p>JS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="Wordpress"
                value={projectData.Wordpress}
                onChange={handleEvent}
              />
              <p>WordPress</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="React"
                value={projectData.React}
                onChange={handleEvent}
              />
              <p>ReactJS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="Node"
                value={projectData.Node}
                onChange={handleEvent}
              />
              <p>NodeJS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="MongoDb"
                value={projectData.MongoDb}
                onChange={handleEvent}
              />
              <p>MongoDB</p>
            </div>
          </div>

          <div className="linksBox">
            <div className="linksBar">
              <input
                type="checkbox"
                name="Figma"
                value={projectData.Figma}
                onChange={handleEvent}
              />
              <p>Figma</p>
            </div>
            <div className="linksBar">
              <input
                type="checkbox"
                name="projectLinks"
                value={projectData.Website}
                onChange={handleEvent}
              />
              <p>Website</p>
            </div>
          </div>

          <button onClick={handleSubmit}>Upload Project</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
