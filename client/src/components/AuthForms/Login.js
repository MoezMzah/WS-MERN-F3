import React, { useState } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/index";
import { Redirect } from "react-router-dom";
import { login } from "../../js/actions/AuthActions";
import { useSelector } from "react-redux";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
    history.push("/dashboard");
  };
  const isAuth = useSelector((state) => state.isAuth);
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }
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
              <h2 className="text-center">Sign In</h2>
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
            <img className="image" src="/login.png" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
