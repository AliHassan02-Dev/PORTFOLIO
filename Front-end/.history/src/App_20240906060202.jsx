import React from "react";
import { Navigate, redirect, Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import AllProjects from "./Pages/AllProjects";
import ProjectPreview from "./Components/ProjectPreview";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MainWrapper from "./Pages/MainWrapper";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

const App = () => {
  const getId = localStorage.getItem("UserId");

  return (
    <Routes>
      <Route path="/" element={<MainWrapper />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      {getId ? (
        <Route path="/AdminDashborad" element={<AdminDashboard />} />
      ) : null}
      <Route path="/AllProjects" element={<AllProjects />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/projects/projectPreview" element={<ProjectPreview />} />
    </Routes>
  );
};

export default App;
