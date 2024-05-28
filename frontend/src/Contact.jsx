import React, { useState, memo } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './assets/styles/Contact.css';
import backgroundImage from './assets/images/Contact/Camera5.png';
import axios from 'axios';

const ContactForm = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/contact/', formData)
  .then(response => {
    setShowAlert(true);
    setErrorMessage('');
    setTimeout(() => setShowAlert(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: ''
    });
  })
  .catch(error => {
    setErrorMessage('No se pudo enviar los datos. Inténtalo de nuevo más tarde.');
    console.error('There was an error!', error);
  });
  };

  return (
    <div className="contact-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container className="contact-form-container">
        <h2>Get in <span>Touch</span></h2>
        <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
        {showAlert && <Alert variant="success">Se ha enviado exitosamente y pronto nos contactaremos con usted.</Alert>}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Phone number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formService">
            <Form.Control
              as="select"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose your service</option>
              <option value="standard">Standard $400</option>
              <option value="pro">Pro $650</option>
              <option value="premium">Premium $800</option>
            </Form.Control>
          </Form.Group>
          <Button variant="warning" type="submit" className="send-button">SEND</Button>
        </Form>
        <Row className="contact-info mt-3">
          <Col className="info-item">
            <i className="fas fa-phone-alt"></i>
            <span>03 5432 1234</span>
          </Col>
          <Col className="info-item">
            <i className="fas fa-envelope"></i>
            <span>isaac@gmail.com</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default ContactForm;
