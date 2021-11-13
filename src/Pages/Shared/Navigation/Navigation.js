import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo-bk-camera.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/home">
            <img style={{ width: "30%" }} src={logo} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={{ marginLeft: "-100%" }} as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/explore">
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            {user?.email ? (
              <div>
                <Link style={{ textDecoration: "none" }} to="/dash-board">
                  <button
                    style={{
                      marginRight: "10px",
                      backgroundColor: "black",
                      color: "#FFEE00",
                    }}
                    className="bk-button"
                  >
                    Dashboard
                  </button>
                </Link>
                <button className="bk-button" onClick={logOut}>
                  Log Out
                </button>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text className="ms-2">
              Signed:{" "}
              <a href="#login">
                <span>{user?.displayName}</span>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
