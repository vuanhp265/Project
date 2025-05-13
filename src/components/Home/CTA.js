// src/components/Home/CTA.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../Home/CTA.css';

const CTA = () => {
  return (
    <section className="cta text-center py-5 bg-primary text-white">
      <Container>
        <h2 style={{color: 'white'}}>Ready to Start Your Journey?</h2>
        <p className="lead">Join our courses today and achieve your goals!</p>
        <Button variant="light" size="lg" href="/contact">
          Get Started
        </Button>
      </Container>
    </section>
  );
};

export default CTA;