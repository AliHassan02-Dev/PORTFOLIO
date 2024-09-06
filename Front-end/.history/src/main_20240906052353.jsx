import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "./Pages/AllProjects.jsx";
import ProjectPreview from "./Components/ProjectPreview.jsx";
import Login from "./Pages/Login.jsx";
import { Register } from "./Pages/Register.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
