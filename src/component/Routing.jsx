import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Dashboard from './Dashboard'

function Routing() {
  return (
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/academics" element={<Home />} />
        {/* Add more routes here if needed */}
      </Routes>
   
  )
}

export default Routing