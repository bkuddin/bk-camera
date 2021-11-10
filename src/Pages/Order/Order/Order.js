import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const Order = () => {
  // Stpe-1: Get every single order from Database through the "orderId"
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/allCameras/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  // Stpe-2: Confirm every single order by POST Method to Database through the "handleAddToCart"
  return (
    <div>
      <h2>{orderId}</h2>

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <img src={order.img} style={{ width: "100%" }} alt="" />
          </Col>
          <Col sm={12} md={6}>
            <h3>{order.model}</h3>
            <p style={{ margin: "5%" }}>{order.description}</p>

            {/* <button
              onClick={() => handleAddToCart(bookingId)}
              className="bk-button"
            >
              Booking Now
            </button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
