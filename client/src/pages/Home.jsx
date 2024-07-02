import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  const fakeData = [
    {
      title: "Section 1",
      description: "This is the first section with some description.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Section 2",
      description: "This is the second section with some other description.",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <div className="homepage" style={{ textAlign: "center" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5">
        <Row>
          {fakeData.map((section, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={section.image} />
                <Card.Body>
                  <Card.Title>{section.title}</Card.Title>
                  <Card.Text>{section.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
