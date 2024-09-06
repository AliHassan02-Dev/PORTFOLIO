import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import AllProjects from "./Pages/AllProjects";
import ProjectPreview from "./Components/ProjectPreview";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  const getId = localStorage.getItem("");

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/AdminDashborad" element={<AdminDashboard />} />
      <Route path="/Projects" element={<AllProjects />} />
      <Route path="/projects/projectPreview" element={<ProjectPreview />} />
    </Routes>
  );
};

export default App;
