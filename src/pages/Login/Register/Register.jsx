import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
// import { Form } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false)

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.table(name, photoUrl, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
      })
      .catch((error) => console.error(error));
    form.reset();
  };
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2>Please Register</h2>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Photo url</Form.Label>
              <Form.Control type="text" name="photo" placeholder="Photo url" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                // type="password"
                placeholder="Password"
                name="password"
                required
              />
              <Form.Check
                type="checkbox"
                label="Show Password"
                onChange={() => setShowPassword(!showPassword)}
              />
            </Form.Group>
            <Form.Check
            onClick={(e)=>setAccepted(e.target.checked)}
              type="checkbox"
              label={
                <span>
                  Agree <Link to="/terms&condition">Terms & condition</Link>
                </span>
              }
 
            />
            <div className="my-2">
              All ready have an account? <Link to="/login">login here</Link>
            </div>
            <Button disabled={!accepted} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
