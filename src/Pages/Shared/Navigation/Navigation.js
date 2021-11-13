import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo-bk-camera.png";
import "./Navigation.css";

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
          <Navbar.Brand className="logo" as={Link} to="/">
            <img style={{ width: "30%" }} src={logo} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="navlink navlink-home" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="navlink" as={Link} to="/explore">
              Explore
            </Nav.Link>

            {user?.email ? (
              <div>
                <Link style={{ textDecoration: "none" }} to="/dash-board">
                  <button className="dash-button bk-button">Dashboard</button>
                </Link>
                <button className="bk-button logout-button" onClick={logOut}>
                  Log Out
                </button>
              </div>
            ) : (
              <div>
                <Nav.Link
                  style={{ backgroundColor: "black", color: "white" }}
                  className="navlink bk-button"
                  as={Link}
                  to="/register"
                >
                  Register
                </Nav.Link>

                <Nav.Link className="navlink" as={Link} to="/login">
                  Login
                </Nav.Link>
              </div>
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
