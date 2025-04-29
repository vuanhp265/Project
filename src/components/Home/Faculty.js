// src/components/Home/Faculty.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Faculty.css';
import john_doe from '../../assets/images/john_doe.jpg'; 
import jane_smith from '../../assets/images/jane_smith.webp';
import emily_brown from '../../assets/images/emily_brown.webp';
const Faculty = () => {
  const teachers = [
    {
      name: 'John Doe',
      title: 'IELTS Expert',
      image: john_doe, // Use the imported image
    },
    {
      name: 'Jane Smith',
      title: 'Language Coach',
      image: jane_smith, // Placeholder (unchanged)
    },
    {
      name: 'Emily Brown',
      title: 'Career Mentor',
      image: emily_brown, // Fallback placeholder
    },
  ];

  return (
    <section className="faculty py-5">
      <Container>
        <h2 className="text-center mb-4">Meet Our Faculty</h2>
        <Row>
          {teachers.map((teacher, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src={teacher.image || 'https://via.placeholder.com/150'} // Fallback for empty image
                  alt={teacher.name}
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }} // Added objectFit for better image scaling
                />
                <Card.Body>
                  <Card.Title>{teacher.name}</Card.Title>
                  <Card.Text>{teacher.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Faculty;