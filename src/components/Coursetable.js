import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import orders from "../data/courselist.json";

function CoursePage() {
  const [formData, setFormData] = useState({
    name: "",
    currentLevel: "",
    targetScore: "",
    location: "",
    email: "",
    phone: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("All");

  const levels = ["All", ...new Set(orders.map(course => course.name))];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add submit functionality here (API call, etc.)
  };

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
    <div className="container my-5">
      {/* --- START: Test Form Section --- */}
      <div className="test-form-section p-5 mb-5 text-center position-relative text-white rounded">
        <h1 className="mb-3">
          IELTS PROFICIENCY TEST{" "}
          <span className="heading-badge">FREE</span>
        </h1>
        <p className="mb-4">
          IELTS proficiency test helps determine current ability and build the most effective study path.
        </p>

        {/* Red Circle Badge */}
        <div className="circle-badge">
          RETURN<br />RESULTS<br />IMMEDIATELY
        </div>

        <Form onSubmit={handleSubmit} className="row g-3 justify-content-center mt-4">
          <div className="col-md-6">
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full name"
              required
            />
          </div>
          <div className="col-md-3">
            <Form.Select
              name="currentLevel"
              value={formData.currentLevel}
              onChange={handleInputChange}
              required
            >
              <option value="">You are</option>
              <option value="Student">Students</option>
              <option value="Working">Working person</option>
            </Form.Select>
          </div>
          <div className="col-md-3">
            <Form.Select
              name="targetScore"
              value={formData.targetScore}
              onChange={handleInputChange}
              required
            >
              <option value="">Target item point target</option>
              <option value="4.0+">4.0+</option>
              <option value="5.0+">5.0+</option>
              <option value="6.0+">6.0+</option>
              <option value="6.5+">6.5+</option>
              <option value="7.0+">7.0+</option>
              <option value="7.5+">7.5+</option>
            </Form.Select>
          </div>
          <div className="col-md-6">
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Choose the facility closest to you"
              required
            />
          </div>
          <div className="col-md-6">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="col-md-6">
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number"
              required
            />
          </div>
          <div className="col-12">
            <Button type="submit" size="lg" className="test-button">
              TEST NOW
            </Button>
          </div>

        </Form>
      </div>
      {/* --- END: Test Form Section --- */}

      {/* --- START: Course List Section --- */}
      <div className="course-list-container my-5">
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
      {/* --- END: Course List Section --- */}
    </div>
  );
}

export default CoursePage;
