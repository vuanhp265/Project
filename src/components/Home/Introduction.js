// src/components/Home/Introduction.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Introduction.css';

const Introduction = () => {
  return (
    <section className="introduction bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Master Your Future with Our Courses</h1>
            <p className="lead">
              Join our top-tier educational programs to achieve your goals, whether it's excelling in IELTS or mastering new skills.
            </p>
            <Button variant="light" size="lg" href="/courses">
              Explore Courses
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="../../images/student_learning.jpeg"
              alt="Students learning"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;