import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import AllProjects from "./Pages/AllProjects";
import ProjectPreview from "./Components/ProjectPreview";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MainWrapper from "./Pages/MainWrapper";

const App = () => {
  const getId = localStorage.getItem("UserId");

  if (!getId) {
    console.log("error");
  } else if (getId) {
    console.log("ok");
  }

  return (
    <Routes>
      <Route path="/" element={<MainWrapper />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/AdminDashborad" element={<AdminDashboard />} />
      <Route path="/Projects" element={<AllProjects />} />
      <Route path="/projects/projectPreview" element={<ProjectPreview />} />
    </Routes>
  );
};

export default App;
