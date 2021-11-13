import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cover from "../../../images/explore-cover.jpg";
import "./ExploreBanner.css";

const ExploreBanner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col>
            <img style={{ width: "100%" }} src={cover} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExploreBanner;
