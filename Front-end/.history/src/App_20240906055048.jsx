import React from "react";
import { Navigate, redirect, Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import AllProjects from "./Pages/AllProjects";
import ProjectPreview from "./Components/ProjectPreview";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MainWrapper from "./Pages/MainWrapper";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainWrapper />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      {getId ? (
        <Route path="/AdminDashborad" element={<AdminDashboard />} />
      ) : null}
      <Route path="/Projects" element={<AllProjects />} />
      <Route path="/projects/projectPreview" element={<ProjectPreview />} />
    </Routes>
  );
};

export default App;
