import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DisplayCameras from "../DisplayCameras/DisplayCameras";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Cameras = () => {
  const element = <FontAwesomeIcon icon={faArrowCircleRight} />;
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cameras")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);
  return (
    <div className="mb-5">
      <h2 className="fs-1 my-5">Cameras</h2>

      <Row xs={1} md={4} className="g-4 mx-5 my-5">
        {cameras.map((camera) => (
          <DisplayCameras key={camera._id} camera={camera}></DisplayCameras>
        ))}
      </Row>

      <Link style={{ textDecoration: "none" }} to="/explore">
        <span
          style={{
            backgroundColor: "#FFEE00",
            padding: "1rem",
            color: "black",
            fontSize: "1.2rem",
          }}
        >
          View All Cameras {element}
        </span>
      </Link>
    </div>
  );
};

export default Cameras;
