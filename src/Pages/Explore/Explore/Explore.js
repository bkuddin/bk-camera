import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import DisplayExplore from "../DisplayExplore/DisplayExplore";
import ExploreBanner from "../ExploreBanner/ExploreBanner";
import "./Explore.css";

const Explore = () => {
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    fetch("https://rocky-lowlands-76183.herokuapp.com/allCameras")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);
  return (
    <div>
      <ExploreBanner />

      <Row xs={1} sm={1} md={4} className="g-4 mx-5 my-5">
        {cameras.map((camera) => (
          <DisplayExplore key={camera._id} camera={camera}></DisplayExplore>
        ))}
      </Row>
    </div>
  );
};

export default Explore;
