import React from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom

function Recruitment() {
  return (
    <div>
      <header
        className="text-white text-center d-flex flex-column justify-content-center align-items-center "
        style={{
          backgroundImage: "url('../images/brand.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          position: "relative",
          color: "#fff",
          
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold">ReactJS Developer</h1>
          <p className="lead">Join our cutting-edge tech team</p>
        </div>
      </header>

      <section className="container my-5">
        <h2 className="text-primary mb-4">Job Description</h2>
        <p>
          As a ReactJS Developer at BEE, you will work on scalable and modern
          web applications. Collaborate with UI/UX designers and backend engineers
          to bring concepts to life.
        </p>

        <h4 className="text-primary mt-4">Responsibilities</h4>
        <ul>
          <li>Develop responsive web interfaces using ReactJS</li>
          <li>Integrate RESTful APIs</li>
          <li>Work closely with product and design teams</li>
          <li>Participate in code reviews and team meetings</li>
        </ul>

        <h4 className="text-primary mt-4">Requirements</h4>
        <ul>
          <li>1+ year experience in ReactJS</li>
          <li>Familiar with Redux, React Router</li>
          <li>Basic knowledge of Node.js is a plus</li>
          <li>Team player and open to learning</li>
        </ul>

        {/* Link quay lại trang chủ */}
        <Link to="/" className="btn btn-dark mt-4">
          Back to Home
        </Link>
        
      </section>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">© 2025 BEE Company - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Recruitment;
