import React, { useState } from 'react';
import orders from "../data/courselist.json";
import { Modal, Button, Form } from 'react-bootstrap';

function CourseTable() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("All");

  const levels = ["All", ...new Set(orders.map(course => course.name))];

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const filteredCourses =
    selectedLevel === "All"
      ? orders
      : orders.filter(course => course.name === selectedLevel);

  return (
    <div className="container course-list-container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="section-title">Our Courses</h2>
      </div>

      <div className="mb-4 d-flex justify-content-center">
        <Form.Select
          style={{ maxWidth: "300px" }}
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          {levels.map((level, idx) => (
            <option key={idx} value={level}>
              {level}
            </option>
          ))}
        </Form.Select>
      </div>

      <div className="row">
        {filteredCourses.map((item) => (
          <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
            <div className="course-item card h-100 shadow-sm">
              <div className="card-body course-item-body">
                <h3 className="course-item-title card-title">{item.name}</h3>
                <p className="course-item-description card-text">{item.description || item.objective}</p>
                <div className="course-item-info">
                  <span className="course-level-label">Level:</span>
                  <strong className="course-level">{item.level || 'N/A'}</strong>
                </div>
              </div>
              <div className="course-item-footer card-footer bg-white border-top-0">
                <button
                  className="course-detail-button btn btn-primary btn-sm"
                  onClick={() => handleShowModal(item)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCourse?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedCourse?.description || selectedCourse?.objective}</p>
          <p><strong>Target:</strong> {selectedCourse?.target}</p>
          <p><strong>Duration:</strong> {selectedCourse?.duration}</p>
          {selectedCourse?.special_features && (
            <ul>
              <strong>Special Features:</strong>
              {selectedCourse.special_features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CourseTable;
