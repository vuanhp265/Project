// src/pages/Recruitment.js
import React from "react";
import { Link } from "react-router-dom";

function Recruitment() {
  return (
    <div>
      <header
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: "url('../images/brand.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          position: "relative",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold">Join Our Talented Team</h1>
          <p className="lead">Discover your career opportunities at BEE</p>
        </div>
      </header>

      <section className="container my-5">
        <h2 className="text-primary mb-4">Job Description</h2>
        <p>
          As a ReactJS Developer at BEE, you will work on scalable and modern
          web applications. Collaborate with UI/UX designers and backend engineers.
        </p>

        <h4 className="text-primary mt-4">Responsibilities</h4>
        <ul>
          <li>Develop responsive web interfaces using ReactJS</li>
          <li>Integrate RESTful APIs</li>
          <li>Work closely with product and design teams</li>
        </ul>

        <h4 className="text-primary mt-4">Requirements</h4>
        <ul>
          <li>1+ year experience in ReactJS</li>
          <li>Familiar with Redux, React Router</li>
        </ul>

        <Link to="/" className="btn btn-primary m-3">
          Back to Home
        </Link>
        <Link to="/Register" className="btn btn-danger m-3">
        Register
        </Link>
      </section>

      <footer className="text-white text-center py-4 mt-5" style={{ backgroundColor: 'blue' }}>
        <p className="mb-0">© 2025 BEE Company - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Recruitment;
