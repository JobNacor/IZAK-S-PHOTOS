import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";


const ImageContainers = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <div className="image-box">
            <img src={img1} alt="Descripción de la imagen 1" style={{ width: '100px',  }} />
          </div>
        </Col>
        <Col md={4}>
          <div className="image-box">
            <img src={img2} alt="Descripción de la imagen 2"style={{ width: '100px' }} />
          </div>
        </Col>
        <Col md={4}>
          <div className="image-box">
            <img src={img3} alt="Descripción de la imagen 3" style={{ width: '100px' }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageContainers;
