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
            <div className="skillBar">
              <input type="checkbox" name="skillName" value="Html" />
              <p>HTML</p>
            </div>
            <div className="skillBar">
              <input type="checkbox" name="skillName" value="Css" />
              <p>CSS</p>
            </div>
            <div className="skillBar">
              <input type="checkbox" name="skillName" value="Js" />
              <p>JS</p>
            </div>
            <div className="skillBar">
              <input type="checkbox" name="skillName" value="Wordpress" />
              <p>WordPress</p>
            </div>
            <div className="skillBar">
              <input type="checkbox" name="skillName" value="React" />
              <p>ReactJS</p>
            </div>
            <div className="skillBar">
              <input type="checkbox" name="skillName" value="Node" />
              <p>NodeJS</p>
            </div>
            <div className="skillBar">
              <input type="checkbox" name="skillName" value="MongoDb" />
              <p>MongoDB</p>
            </div>
          </div>

          <div className="linksBox">
            <div className="linkBar">
              <input type="checkbox" name="projectLinks" value="Figma" />
              <p>Figma</p>
            </div>
            <div className="linkBar">
              <input type="checkbox" name="projectLinks" value="Website" />
              <p>Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
