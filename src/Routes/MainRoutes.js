import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
// import SchedulePage from '../pages/Home/SchedulePage';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/schedule/*" element={<SchedulePage />} />
      <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default MainRoutes;