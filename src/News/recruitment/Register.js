import React from "react";
import { Link } from "react-router-dom"; // để dùng <Link>

function Register() {
  return (
    <div className="container my-5">
      <h2 className="text-primary mb-4">Job Application Form</h2>

      <form className="border p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" placeholder="Enter your email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" placeholder="Enter your phone number" />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea className="form-control" rows="4" placeholder="Write something..." />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">Submit Application</button>
          
        
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;