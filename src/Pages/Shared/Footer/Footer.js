import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const element = <FontAwesomeIcon icon={faCamera} />;
  const element2 = <FontAwesomeIcon icon={faCoffee} />;
  return (
    <div>
      <Container className="footer" fluid>
        <Row>
          <Col>
            <img src={element} alt="" />
            <img src={element2} alt="" />
          </Col>
        </Row>
        <Row>
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
