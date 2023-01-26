import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  console.log("header = " + sessionStorage.getItem("name"));
  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>GameShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/igre">
                <Nav.Link>Igre</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/studio">
                <Nav.Link>Studios</Nav.Link>
              </LinkContainer>
              <LinkContainer to="about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
            </Nav>
            {sessionStorage.getItem("name") === null ? (
              <Nav>
                <LinkContainer to="login">
                  <Nav.Link>Log In</Nav.Link>
                </LinkContainer>
              </Nav>
            ) : (
              <Nav>
                <NavDropdown
                  title={`Hello, ${sessionStorage.getItem("name")}`}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
