import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Footer Content</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Our Services
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="text-md-right">
            <h5>Follow Us</h5>
            <a href="#" className="text-light mx-2 d-inline-block">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-light mx-2 d-inline-block">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-light mx-2 d-inline-block">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-light mx-2 d-inline-block">
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
