import { Container, Image } from "react-bootstrap";

function NotFoundPage() {
  return (
    <Container className="my-5 d-flex justify-content-center align-items-center">
      <Image
        alt="404 error"
        src="/404-error.svg"
        fluid
        style={{ maxWidth: "90vw", maxHeight: "80vh" }}
      />
    </Container>
  );
}

export default NotFoundPage;
