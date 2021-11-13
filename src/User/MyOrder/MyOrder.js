import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const email = `${user.email}`;

  // Step 3: (from Order page)  Get Data from Specific user via email
  useEffect(() => {
    fetch(`https://rocky-lowlands-76183.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted]);
  //   Make Dependency because of making redirection after deleting

  console.log(orders);

  // Step 4: Handle Delete Button
  const handleDelete = (id) => {
    fetch(`https://rocky-lowlands-76183.herokuapp.com/orders/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          alert("Are you sure you want to permanently avoid this journey?");
          setIsDeleted(true);
        } else {
          setIsDeleted(false);
        }
      });
    console.log(id);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div>
              <h2 className="order-tite">Order List</h2>
              {orders.map((order) => (
                <div className="order-list">
                  <div className="img">
                    <img src={order.img} alt="" />
                  </div>
                  <div className="model-name">
                    <h4>{order.model}</h4>
                  </div>

                  <div className="button-pending button">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="bk-button"
                    >
                      {order.status}
                    </button>
                  </div>
                  <div className="button-delete button">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="bk-button"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="button">
                    <Link to="/explore">
                      <button className="bk-button">Add New</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyOrder;
