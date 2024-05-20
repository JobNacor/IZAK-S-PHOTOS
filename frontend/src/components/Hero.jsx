import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/styles/Hero.css';

const HeroSection = () => {
  return (
    <Container fluid className="hero-section">
      <Row className="align-items-center">
        <Col md={6} className="text-section">
          <h1 className="principal">Capturing Moments</h1>
          <p className="principal-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button variant="outline-light" className="view">View Projects</Button>
        </Col>
        <Col md={6} className="image-section">
          {/* The image background is handled in CSS */}
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(HeroSection);
