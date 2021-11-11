import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

// React Icons
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Container className="footer" fluid>
        <Row>
          <Col>
            <FaFacebookSquare />
            <FaTwitterSquare />
          </Col>
        </Row>
        <Row xs={1} sm={1} md={4}>
          <Col>
            <h3>BK CAMERA</h3>
            <p>
              BK Camera is a significant supplier of digital imaging solutions
              for the consumer, business-to-business, and industrial markets.
            </p>
          </Col>
          <Col>
            <h5 className="title">Company</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">News</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sustainability</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Site Map</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className="title">Legal</h5>
            <ul>
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
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.bkcamera.com"> BKcamera.com </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
