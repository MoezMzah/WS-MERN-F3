import React from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import Navbar from "../Navbar/index";

const Register = () => {
  const handleChange = {};
  const handleSubmit = {};
  return (
    <>
      <Navbar />
      <Container>
        <Row className="p-3">
          <Col>
            <Form
              onSubmit={handleSubmit}
              className="p-5 m-5"
              style={{ boxShadow: "2px 6px 18px 1px rgba(0,0,0,0.3" }}
            >
              <h2 className="text-center">Sign Up</h2>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <img className="myimage" src="/login.png" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
