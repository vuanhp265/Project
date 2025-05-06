// src/pages/Recruitment.js
import React from "react";
import { Link } from "react-router-dom";

function Recruitment() {
  return (
    <div>
      <header
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: "url('../images/imgbrand.png')",
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
    
      <h2 className="text-primary mb-4 text-center p-4">Job Description</h2>

      <form className="border p-4 rounded bg-light shadow" >
        <section className="container my-5">
        <p>
          As a ReactJS Developer at BEE, you will work on scalable and modern
          web applications. Collaborate with UI/UX designers and backend engineers.
        </p>

        <h4 className="text-primary mt-4">Responsibilities</h4>
        <ul>
          <p>Develop responsive web interfaces using ReactJS</p>
          <p>Integrate RESTful APIs</p>
          <p>Work closely with product and design teams</p>
        </ul>

        <h4 className="text-primary mt-4">Requirements</h4>
        <ul>
          <p>1+ year experience in ReactJS</p>
          <p>Familiar with Redux, React Router</p>
        </ul>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
          <Link to="/information" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/Register" className="btn btn-danger">
             Register
          </Link>
        </div>
        </section>
      </form>
        
    </div>
  );
}

export default Recruitment;