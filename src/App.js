
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './News/recruitment/information';
import Recruitment from './News/recruitment/information details';
import Register from './News/recruitment/Register';

import './App.css'; 

function Appone() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/Recruitment" element={<Recruitment />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Appone;
