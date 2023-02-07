import React from "react";
import "./AddProdect.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddProdect = () => {
  return (
    <div className="addproduct">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image name</Form.Label>
          <Form.Control type="text" placeholder="Enter Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category name</Form.Label>
          <Form.Control type="text" placeholder="Enter Category" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProdect;
