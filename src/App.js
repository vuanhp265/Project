import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ClassDetail from './components/ClassDetail';
import ClassDetailone from './components/ClassDetailone';
import Level0Table from './components/Level0Table';
import Level1Table from './components/Level1Table';
import CourseTable from './components/Coursetable';
import AboutUs from './components/AboutUs';
import Header from './components/HeadnFooter/Header';
import Footer from './components/HeadnFooter/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="container mt-4 mb-5">
          <Routes>
            <Route path="/" element={
              <>
                <Level0Table />
                <Level1Table />
              </>
            } />
            <Route path="/class/:id" element={<ClassDetail />} />
            <Route path="/class1/:id" element={<ClassDetailone />} />
            <Route path="/courses" element={<CourseTable />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
