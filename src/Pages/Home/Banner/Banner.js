import React from "react";
import { Carousel } from "react-bootstrap";
import Cover1 from "../../../images/cover-1.jpg";
import Cover2 from "../../../images/cover-2.jpg";
import Cover3 from "../../../images/cover-3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Cover1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Cover2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Cover3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
