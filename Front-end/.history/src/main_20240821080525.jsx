import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProjects from './Pages/AllProjects.jsx'
import ProjectPreview from './Components/ProjectPreview.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Projects' element={<AllProjects />} />
        <Route path='/projects/projectReview' element={<ProjectPreview />} />
      </Routes>
    </BrowserRouter>
  </>
)
