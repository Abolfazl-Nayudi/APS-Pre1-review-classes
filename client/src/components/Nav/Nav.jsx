import { Link, NavLink } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Image,
  Button,
  Dropdown,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/user.slice";

function NavbarComponent() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "underline overline",
                      textUnderlineOffset: "6px",
                    }
                  : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "underline overline",
                      textUnderlineOffset: "6px",
                    }
                  : undefined
              }
              to="/todos"
            >
              Todos
            </NavLink>
          </Nav>
          <div className="d-flex gap-2">
            {token ? (
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <Image
                    src="https://fastly.picsum.photos/id/266/200/200.jpg?hmac=gOu6kjZljo9d4wdKoXa6CepA5W07XTIynwZmcl-b1AM"
                    width="32"
                    height="32"
                    alt="user image"
                    roundedCircle
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      dispatch(setToken(null));
                      localStorage.removeItem("token");
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/todos">
                    your todos
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Button as={Link} variant="outline-danger" to="/login">
                  Login
                </Button>
                <Button as={Link} variant="danger" to="/register">
                  Sign-up
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
