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

          <input type="checkbox" name="createdWith" value="Html" />
          <input type="checkbox" name="createdWith" value="Css" />
          <input type="checkbox" name="createdWith" value="Js" />
          <input type="checkbox" name="createdWith" value="Wordpress" />
          <input type="checkbox" name="createdWith" value="React" />
          <input type="checkbox" name="createdWith" value="Node" />
          <input type="checkbox" name="createdWith" value="MongoDb" />

          <input type="checkbox" name="projectLinks" value="Figma" />
          <input type="checkbox" name="projectLinks" value="Website" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
