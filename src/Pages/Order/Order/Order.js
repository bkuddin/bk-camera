import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import "./Order.css";

const Order = () => {
  const { user } = useAuth();
  // Stpe-1: Get every single order from Database through the "orderId"
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`https://rocky-lowlands-76183.herokuapp.com/allCameras/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  // Stpe-2: Confirm every single order by POST Method to Database through the "onSubmit (React HOOK)"

  //   React Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.status = "Pending";
    data.brand = `${order.brand}`;
    data.model = `${order.model}`;
    data.img = `${order.img}`;
    fetch("https://rocky-lowlands-76183.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Booked, Successfully");
          reset();
        }
      });
  };

  ///   React Hook end

  // Step 3: Get Data from Specific user via email, Check "My Order Page"

  return (
    <div>
      <h3>
        <span style={{ backgroundColor: "#FFEE00", padding: "10px 20px" }}>
          Hello, {user.displayName}!
        </span>{" "}
        <br />
        Kindly review the contents of your purchase and confirm submission.
      </h3>
      <hr />

      <Container>
        <Row>
          {/* First Column POST Method */}
          <Col className="booking" sm={12} md={6}>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user.displayName} {...register("name")} />

              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <input placeholder="City" defaultValue="" {...register("city")} />
              <input
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              <button className="bk-button booking-input-button">
                <input
                  style={{
                    marginTop: "7px",
                    backgroundColor: "none",
                  }}
                  type="submit"
                />
              </button>
            </form>
          </Col>

          {/* Second Column GET Method (Via Fetch)  */}
          <Col sm={12} md={6}>
            <h4>{order.brand}</h4>
            <h3>{order.model}</h3>
            <img src={order.img} style={{ width: "50%" }} alt="" />
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
