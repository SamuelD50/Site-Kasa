import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home/Home'
/* import About from './pages/About'
import Hosting from './pages/Hosting'`
import Error from './pages/Error' */


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
  {/*       <Route path="/about" element={<About />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/error" element={<Error />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

