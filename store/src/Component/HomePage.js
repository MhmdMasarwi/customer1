import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const styles = {
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
  },
  image: {
    height: "100%",
  },
};

const HomePage = () => (
  <Container>
    <Row className="align-items-center">
      <Col xs={12} style={styles.imageContainer}>
        <Image
          style={styles.image}
          src="dirt-bike-ge26d3431b_1920.jpg"
          alt="Store"
          fluid
        />
      </Col>
      <Col xs={12}>
        <h1>Welcome mahmod store...</h1>
      </Col>
      <Col xs={12}>
        <Button href="/products" variant="primary">
          View Products
        </Button>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
