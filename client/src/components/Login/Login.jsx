import React, { useState } from "react";
import "./Login.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import { setToken } from "../../redux/slices/user.slice";
export default function Login() {
  const initialValues = { email: "", password: "" };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValues);

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const res = await loginUser(data);
      localStorage.setItem("token", res.token);
      dispatch(setToken(res.token));
      navigate("/todos");
    } catch (error) {
      alert(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="parent-login-form">
      <h1>Login To Your Account</h1>
      <div>
        <Form className="d-flex flex-column " onSubmit={handleSubmit}>
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
              "Login"
            )}
          </Button>
        </Form>
      </div>
    </section>
  );
}
