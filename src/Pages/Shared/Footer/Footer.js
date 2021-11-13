import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

// React Icons
import { FaFacebookSquare, FaTwitterSquare, FaGithub } from "react-icons/fa";
import logo from "../../../images/logo-white.png";

const Footer = () => {
  return (
    <div>
      <Container className="footer" fluid>
        <Row className="footer-section">
          <Row className="pt-5 social-icons">
            <Col>
              <a href="https://www.facebook.com/bakhtiar.uddins/">
                <FaFacebookSquare />
              </a>
              <span className="mx-2">
                <a href="https://www.facebook.com/bakhtiar.uddins/">
                  <FaTwitterSquare />
                </a>
              </span>
              <a href="https://github.com/bkuddin">
                <FaGithub />
              </a>
            </Col>
          </Row>
          <Row className="footer-text">
            <Col xs={12} sm={12} md={6}>
              <img style={{ width: "50%" }} src={logo} alt="" />
              <p>
                BK Camera is a significant supplier of digital imaging solutions
                for the consumer, business-to-business, and industrial markets.
              </p>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <ul>
                <h5 className="title">Company</h5>
                <li className="list-unstyled">
                  <a href="#">About</a>
                </li>
                <li className="list-unstyled">
                  <a href="#">News</a>
                </li>
                <li className="list-unstyled">
                  <a href="#">Sustainability</a>
                </li>
                <li className="list-unstyled">
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <ul>
                <h5 className="title">Legal</h5>
                <li className="list-unstyled">
                  <a href="#!">Product Advisories</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Terms of Use</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Privacy Statement</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">To Our Customers</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="copyright">
            <Col>
              &copy; {new Date().getFullYear()} Copyright:
              <a href="https://www.bkcamera.com"> BKcamera.com </a>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
