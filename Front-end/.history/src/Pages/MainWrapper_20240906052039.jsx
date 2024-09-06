import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ProjectPreview from "../Components/ProjectPreview";
import AdminDashboard from "./AdminDashboard";
import AllProjects from "./AllProjects";
import Login from "./Login";
import { Register } from "./Register";

const MainWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AdminDashborad" element={<AdminDashboard />} />
        <Route path="/Projects" element={<AllProjects />} />
        <Route path="/projects/projectPreview" element={<ProjectPreview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainWrapper;
