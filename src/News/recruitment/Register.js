import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"; // Import CSS riêng

function Register() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    // Tự động reload sau 2.5 giây
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  return (
    <div className="container my-5">
      <header
        className="text-white text-center d-flex flex-column justify-content-center align-items-center rounded-1"
        style={{
          backgroundImage: "url('../images/imgbrand.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="display-4 fw-bold">Join Our Talented Team</h1>
          <p className="lead">Discover your career opportunities at IELTS</p>
        </div>
      </header>
      <h2 className="text-primary mb-4 text-center p-3">Job Application Form</h2>

      <form className="border p-4 rounded bg-light shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Number & Address in one row */}
        <div className="row mb-3">
          <div className="col-md-8">
            <label className="form-label">Address</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your address"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write something..."
          />
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
          <button type="submit" className="btn btn-primary ">
            Submit Application
          </button>
          <Link to="/information" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>

      {/* Success popup */}
      {showSuccess && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2 className="success-message">Successfully!</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
