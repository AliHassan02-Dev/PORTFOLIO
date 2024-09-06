import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProjects from './Pages/AllProjects.jsx'
import ProjectPreview from './Components/ProjectPreview.jsx'
import Login from './Pages/Login.jsx'
import { Register } from './Pages/Register.jsx'
import AdminDashboard from './Pages/AdminDashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/AdminDashborad' element={<AdminDashboard />} />
        <Route path='/Projects' element={<AllProjects />} />
        <Route path='/projects/projectPreview' element={<ProjectPreview />} />
      </Routes>
    </BrowserRouter>
  </>
)
