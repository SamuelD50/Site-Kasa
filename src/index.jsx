import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.scss'
import Home from '../src/pages/Home/Home'
import Hosting from './pages/Hosting/Hosting'
import About from './pages/About/About'
import Error from './pages/Error/Error'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting/:id" element={<Hosting />} />
         <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)