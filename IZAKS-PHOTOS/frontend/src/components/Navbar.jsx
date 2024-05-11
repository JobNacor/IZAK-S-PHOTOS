import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';


const NavigationBar = () => {
  return (
<Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">ISAAC'S PHOTOS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" id='Home'>Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
