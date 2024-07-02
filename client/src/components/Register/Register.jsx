import React, { useState } from "react";
import "./Register.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { registerNewUser } from "../../api/userApi";

export default function Register() {
  const initialValue = { name: "", email: "", password: "" };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);

  // /register => /login

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await registerNewUser(data);
      navigate("/login");
      setData(initialValue);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="parent-register-form">
      <h1>Create an Acount</h1>
      <div>
        <Form onSubmit={handleSubmit} className="d-flex flex-column ">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                required
              />
            </Col>
          </Form.Group>
          <Button
            type="submit"
            className="align-self-center w-50"
            disabled={loading}
          >
            {loading ? (
              <Spinner
                animation="border"
                role="status"
                style={{ width: "24px", height: "24px" }}
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Sign Up"
            )}
          </Button>
        </Form>
      </div>
    </section>
  );
}
