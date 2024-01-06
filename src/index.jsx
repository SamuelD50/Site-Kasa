import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home/Home'
import Hosting from './pages/Hosting/Hosting'
import About from './pages/About/About'
import Error from './pages/Error/Error'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hosting/:id' element={<Hosting />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)