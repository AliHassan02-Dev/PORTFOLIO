import React from "react";

const AdminDashboard = () => {
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
          />
          <input
            type="text"
            name="projectName"
            placeholder="Project Description Here"
          />
          <div className="skillBox">
            <input type="checkbox" name="createdWith" value="Html" />
            <p>HTML</p>
          </div>
          <div className="skillBox">
            <input type="checkbox" name="createdWith" value="Css" />
            <p>CSS</p>
          </div>
          <div className="skillBox">
            <input type="checkbox" name="createdWith" value="Js" />
            <p>JS</p>
          </div>
          <div className="skillBox">
            <input type="checkbox" name="createdWith" value="Wordpress" />
            <p>WordPress</p>
          </div>
          <div className="skillBox">
            <input type="checkbox" name="createdWith" value="React" />
            <p>ReactJS</p>
          </div>
          <div className="skillBox">
            <input type="checkbox" name="createdWith" value="Node" />
            <p>NodeJS</p>
          </div>
          <div className="skillBox">
            <input type="checkbox" name="createdWith" value="MongoDb" />
            <p>MongoDB</p>
          </div>

          <input type="checkbox" name="projectLinks" value="Figma" />
          <input type="checkbox" name="projectLinks" value="Website" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
