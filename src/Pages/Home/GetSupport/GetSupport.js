import React from "react";
import "./GetSupport.css";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../../../images/icon-1.png";
import icon2 from "../../../images/icon-2.png";
import icon3 from "../../../images/icon-3.png";

const GetSupport = () => {
  return (
    <div>
      <Container>
        <h2>Get Support</h2>
        <Row>
          <Col xs={12} sm={12} md={4} className="border border-1 ">
            <img src={icon1} alt="" />
            <h4>Product Support</h4>
            <p>
              Do you need assistance with your product? Allow us to assist you
              in locating what you want.
            </p>
          </Col>
          <Col xs={12} sm={12} md={4} className="border border-1 ">
            <img src={icon2} alt="" />
            <h4>Product Registration</h4>
            <p>
              To get the most out of your product, from assistance to warranty
              information, register it.
            </p>
          </Col>
          <Col xs={12} sm={12} md={4} className="border border-1">
            <img src={icon3} alt="" />
            <h4>Software & Drivers</h4>
            <p>Discover compatible software and drivers for your product.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetSupport;
