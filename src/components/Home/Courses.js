// src/components/Courses.js
import React, { useState, useEffect } from 'react';

function Home() {
  const [courses, setCourses] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    // Load course data from a JSON file
    fetch('/data/courses.json')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        // Extract unique subjects for filtering
        const uniqueSubjects = ['all', ...new Set(data.map((course) => course.subject))];
        setSubjects(uniqueSubjects);
      });
  }, []);

  const handleFilter = (subject) => {
    setSelectedSubject(subject);
  };

  const filteredCourses = selectedSubject === 'all'
    ? courses
    : courses.filter((course) => course.subject === selectedSubject);

  return (
    <section id="courses" className="py-5 bg-light">
      <div className="container">
        {/* <h2>Our Courses</h2>
        <div className="mb-3">
          <label htmlFor="subjectFilter" className="mr-2">Filter by Subject:</label>
          <select
            id="subjectFilter"
            className="form-control form-control-sm"
            value={selectedSubject}
            onChange={(e) => handleFilter(e.target.value)}
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </option>
            ))}
          </select>
        </div> */}
        {/* <div className="row">
          {filteredCourses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description.substring(0, 100)}...</p>
                  <a href={course.detailsUrl} className="btn btn-primary btn-sm" download>
                    Download Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a href="/data/price-list.pdf" className="btn btn-success" download>
            Download Price List
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Home;