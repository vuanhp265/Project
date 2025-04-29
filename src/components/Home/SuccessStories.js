// src/components/Home/SuccessStories.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './SuccessStories.css';
import anna_lee from '../../assets/images/anna_lee.jpg';
import mark_tran from '../../assets/images/mark_tran.jpg';


const SuccessStories = () => {
  const stories = [
    {
      name: 'Anna Lee',
      quote: 'Thanks to the IELTS course, I scored 8.0 and got into my dream university!',
      image: anna_lee,
    },
    {
      name: 'Mark Tran',
      quote: 'The instructors were amazing and helped me improve my speaking skills.',
      image: mark_tran,
    },
  ];

  return (
    <section className="success-stories py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Success Stories</h2>
        <Row>
          {stories.map((story, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Body className="d-flex align-items-center">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="rounded-circle me-3"
                    style={{ width: '100px', height: '100px' }}
                  />
                  <div>
                    <Card.Title>{story.name}</Card.Title>
                    <Card.Text>"{story.quote}"</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SuccessStories;