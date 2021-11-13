import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DisplayCameras.css";

const DisplayCameras = ({ camera }) => {
  const { _id, name, model, brief, img, brand, options, price } = camera;
  return (
    <div>
      <Col>
        <Card className="border-0 text-start image-wrapper">
          <Card.Img
            className="camera-img"
            variant="top"
            src={img}
            style={{ width: "80%", margin: "0 auto" }}
          />
          <hr />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{brand}</Card.Title>
            <Card.Title>
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#FFEE00",
                  backgroundColor: "black",
                  padding: "5px 20px",
                }}
              >
                {model}
              </span>
            </Card.Title>

            <Card.Text
              style={{
                marginTop: "5%",
                borderRadius: "15px",
              }}
            >
              <p>{options}</p>
            </Card.Text>
            <Card.Text
              style={{
                marginTop: "5%",
                borderRadius: "15px",
              }}
            >
              <p>{brief}</p>
            </Card.Text>
            <span>
              <span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
                Starting at ${price}
              </span>
              <br />
              <Link to={`/order/${_id}`}>
                <button className="bk-button">Buy Now</button>
              </Link>
            </span>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DisplayCameras;
