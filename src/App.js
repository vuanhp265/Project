import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/HeadnFooter/Header';
import Footer from './components/HeadnFooter/Footer';
import MainRoutes from './Routes/MainRoutes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;