// src/components/Home/Faculty.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Faculty.css';

const Faculty = () => {
  const teachers = [
    {
      name: 'John Doe',
      title: 'IELTS Expert',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      title: 'Language Coach',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Brown',
      title: 'Career Mentor',
      image: '',
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
                  src={teacher.image}
                  alt={teacher.name}
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: '100px', height: '100px' }}
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