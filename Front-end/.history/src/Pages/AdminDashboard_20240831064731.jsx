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

          <input
            type="checkbox"
            name="createdWith"
            value="Html"
            Placeholder="Html"
          />
          <input
            type="checkbox"
            name="createdWith"
            value="Css"
            Placeholder="Css"
          />
          <input
            type="checkbox"
            name="createdWith"
            value="Js"
            Placeholder="Js"
          />
          <input
            type="checkbox"
            name="createdWith"
            value="Wordpress"
            Placeholder="Wordpress"
          />
          <input
            type="checkbox"
            name="createdWith"
            value="React"
            Placeholder="React"
          />
          <input
            type="checkbox"
            name="createdWith"
            value="Node"
            Placeholder="Node"
          />
          <input
            type="checkbox"
            name="createdWith"
            value="MongoDb"
            Placeholder="MongoDb"
          />

          <input
            type="checkbox"
            name="projectLinks"
            value="Figma"
            Placeholder="Figma"
          />
          <input
            type="checkbox"
            name="projectLinks"
            value="Website"
            Placeholder="Website"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
