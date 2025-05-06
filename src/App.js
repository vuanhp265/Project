
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './News/recruitment/information';
import Recruitment from './News/recruitment/information details';
import Register from './News/recruitment/Register';
import ClassDetail from '../src/News/Tables/ClassDetail';
import ClassDetailone from '../src/News/Tables/ClassDetailone';
import Level0Table from '../src/News/Tables/Level0Table';
import Level1Table from '../src/News/Tables/Level1Table';
import CourseTable from './components/Coursetable';
import AboutUs from './components/AboutUs';
import Header from './components/HeadnFooter/Header';
import Footer from './components/HeadnFooter/Footer';
import MainRoutes from './Routes/MainRoutes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Information from './News/recruitment/information';
import ContactPage from './pages/Home/ContactPage';
import LoginPage from './components/login/LoginPage';


function Appone() {
  return (
    <Router>
      <div className="App">

        {/* Header */}
        <Header />
          <MainRoutes />
          {/* Main Content */}
        <div className="container mt-4 mb-5">
         
          <Routes>
            <Route path="/" element={
              <>
                <Level0Table />
                <Level1Table />
              </>
            } />
            <Route path="/" element={<Home />} />
            <Route path="/Recruitment" element={<Recruitment />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/class/:id" element={<ClassDetail />} />
            <Route path="/class1/:id" element={<ClassDetailone />} />
            <Route path="/courses" element={<CourseTable />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/information" element={<Information />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default Appone;
