import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg">
      <Container>
        <Row>
          <Col md={6}>
            <p className="text-muted text-right">
              Built with React & Bootstrap <br></br>
              mhmod jbaren 2/2023
            </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;