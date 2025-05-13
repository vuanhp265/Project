import React from "react";
import { Link } from "react-router-dom";

function Information() {
  return (
    <div className="Information">
      {/* Header */}
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
      {/* About Section */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <h2 className="mb-4 text-primary ">ABOUT US</h2>
            <p >
            The working environment at Bee is dynamic, youthful and inspiring, that is what you can say about Bee. Let your talent and youth shine at IELTS English, and bring positive values ​​to foreign language learning for the young generation of Vietnam!
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="../images/img1.png"
              alt="Our Team"
              className="img-fluid rounded shadow"
              style={{
                 width: '500px', height: 'auto' 
              }}
            />
          </div>
        </div>
      </section>
      <section className="container my-5">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <img
              src="../images/img2.png "
              alt="Our Team"
              className="img-fluid rounded shadow"
              style={{
                 width: '500px', height: 'auto' 
              }}
            />
          </div>
          <div className="col-md-6 text-center">
            <h2 className="mb-4 text-primary ">JOB OPPORTUNITIES</h2>
            <p >
               Many job opportunities at Bee to develop skills, expand personal network as well as "improve" income level are waiting for you at IELTS English Community!
            </p>
          </div>
        </div>
      </section>
          {/* Job Positions Section */}
          <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 text-primary">Open Positions</h2>
          <div className="row g-4">
            {[
              { title: "Teaching Assistant", img: "../images/teacherh.jpg" },
              { title: "Instruct Recruitment", img: "../images/teachert.jpg" },
              { title: "Ielts Teacher Recruitment", img: "../images/teacherj.jpg" },
            ].map((job, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img src={job.img} className="card-img-top" alt={job.title} />
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">
                      Join our dynamic and forward-thinking team.
                    </p>
                    {/* Link chuyển tới trang Recruitment */}
                    <Link to="/Recruitment" className="btn btn-primary w-100">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Information;