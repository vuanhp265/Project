import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Level0Table from '../../News/Tables/Level0Table';
import Level1Table from '../../News/Tables/Level1Table';
import ClassDetail from '../../News/Tables/ClassDetail';
import ClassDetailone from '../../News/Tables/ClassDetailone';

function SchedulePage() {
  return (
    <div className="schedule-page">
    

      <div className="container mt-4">
        <Routes>
          <Route index element={<><Level0Table /><Level1Table /></>} />
          <Route path="class/:id" element={<ClassDetail />} />
          <Route path="class1/:id" element={<ClassDetailone />} />
          <Route path="level0" element={<Level0Table />} />
          <Route path="level1" element={<Level1Table />} />
        </Routes>
      </div>
    </div>
  );
}

export default SchedulePage;