import React from "react";

const AdminDashboard = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectDesc: "",
    Html: "",
    Css: "",
    Js: "",
    React: "",
    Wordpress: "",
    Node: "",
    MongoDb: "",
    Figma: "",
    Website: "",
  });

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
          />
          <textarea
            name="projectDesc"
            cols="30"
            rows="10"
            placeholder="Project Description Here"
            value={projectData.projectDesc}
          ></textarea>

          <div className="skillBox">
            <div className="skillBar">
              <input
                type="checkbox"
                name="skillName"
                value={projectData.Html}
              />
              <p>HTML</p>
            </div>
            <div className="skillBar">
              <input type="checkbox" name="skillName" value={projectData.Css} />
              <p>CSS</p>
            </div>
            <div className="skillBar">
              <input type="checkbox" name="skillName" value={projectData.Js} />
              <p>JS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="skillName"
                value={projectData.Wordpress}
              />
              <p>WordPress</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="skillName"
                value={projectData.React}
              />
              <p>ReactJS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="skillName"
                value={projectData.Node}
              />
              <p>NodeJS</p>
            </div>
            <div className="skillBar">
              <input
                type="checkbox"
                name="skillName"
                value={projectData.MongoDb}
              />
              <p>MongoDB</p>
            </div>
          </div>

          <div className="linksBox">
            <div className="linksBar">
              <input
                type="checkbox"
                name="projectLinks"
                value={projectData.Figma}
              />
              <p>Figma</p>
            </div>
            <div className="linksBar">
              <input
                type="checkbox"
                name="projectLinks"
                value={projectData.Website}
              />
              <p>Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
