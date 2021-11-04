import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FloatingLabel, Button, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleChange = e => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <Col xl={4} lg="auto" md="auto" className="mx-3">
        <h2 className="my-2">Create an account</h2>
        <h6 className="mt-2 mb-5">
          Gain access to additional features such as Watchlist and Portfolio
          tracking.
        </h6>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel label="Username" className="mb-3">
            <Form.Control
              type="input"
              name="username"
              placeholder="Jhon Doe"
              value={input.username}
              onChange={handleChange}
            />
          </FloatingLabel>

          <FloatingLabel label="Email address" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              value={input.email}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel label="Password" className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              autoComplete="on"
            />
          </FloatingLabel>
          <div className="d-grid">
            <Button type="submit" className="mb-2">
              Create an account
            </Button>
          </div>
        </Form>
      </Col>
    </Container>
  );
};
