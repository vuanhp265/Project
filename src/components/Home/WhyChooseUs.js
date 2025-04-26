// src/components/Home/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience.',
      icon: 'bi-person-check',
    },
    {
      title: 'Flexible Learning',
      description: 'Study at your own pace with online and in-person options.',
      icon: 'bi-laptop',
    },
    {
      title: 'Proven Results',
      description: 'Our students achieve top scores and career success.',
      icon: 'bi-trophy',
    },
  ];

  return (
    <section className="why-choose-us py-5">
      <Container>
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          {benefits.map((benefit, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <i className={`bi ${benefit.icon} display-4 mb-3 text-primary`}></i>
                  <Card.Title>{benefit.title}</Card.Title>
                  <Card.Text>{benefit.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;