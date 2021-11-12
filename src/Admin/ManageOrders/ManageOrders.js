import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

import useAuth from "../../hooks/useAuth";
import "./ManageOrders.css";

const ManageOrders = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  const [orders, setOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");

  console.log(status);

  //   Step 1: Get All orders to Manage

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted]);

  // Stpe-2: Delete every single order by Delete Method

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/allOrders/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          alert("Are you sure you want to permanently cancel this package?");
          setIsDeleted(true);
        } else {
          setIsDeleted(false);
        }
      });
    console.log(id);
  };

  // Step 3:  Handle Order Update (Status Update)  ;
  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
  };

  const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          console.log(result);
          alert("Are you sure you want to permanently cancel this package?");
        }
      });
  };

  // Handle Status Update end;

  return (
    <div>
      <h3>
        <span style={{ backgroundColor: "#FFEE00", padding: "10px 20px" }}>
          Hello, {user.displayName}!
        </span>{" "}
        <br />
        Kindly review the orders of clients and approved or delete them.
      </h3>
      <hr />

      <div className="container">
        <h1>All orders {orders.length}</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Client</th>
              <th>Image</th>
              <th>Model</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orders?.map((pd, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{pd.name}</td>
                <td>
                  <img style={{ width: "30%" }} src={pd.img} alt="" />
                </td>
                <td>{pd.model}</td>
                <td>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <select
                      onClick={() => handleOrderId(pd?._id)}
                      {...register("status")}
                    >
                      <option value={pd?.status}>{pd?.status}</option>
                      <option value="approve">approve</option>
                    </select>
                    <input type="submit" />
                  </form>
                </td>
                <button
                  onClick={() => handleDelete(pd._id)}
                  className="bk-button"
                >
                  Delete
                </button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>

      {/* Check 2nd style end */}
    </div>
  );
};

export default ManageOrders;
