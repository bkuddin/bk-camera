import React, { useEffect, useState } from "react";
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
    fetch("https://rocky-lowlands-76183.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted]);

  // Stpe-2: Delete every single order by Delete Method

  const handleDelete = (id) => {
    fetch(`https://rocky-lowlands-76183.herokuapp.com/allOrders/${id}`, {
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
    fetch(
      `https://rocky-lowlands-76183.herokuapp.com/statusUpdate/${orderId}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          console.log(result);
          alert("Are you sure you want to approve this order?");
        }
      });
  };

  // Handle Status Update end;

  return (
    <div>
      <h3>
        <span
          style={{
            backgroundColor: "#FFEE00",
            padding: "10px 20px",
            marginBottom: "20px",
          }}
        >
          Hello, {user.displayName}!
        </span>
        <br />
        <br />
        Kindly review the orders of clients and approved or delete them.
      </h3>
      <hr />

      <div>
        <h2 className="order-tite">Order List</h2>
        {orders.map((pd) => (
          <div className="order-list">
            <div className="img">
              <img src={pd.img} alt="" />
            </div>

            <div className="location">
              <h4>{pd.model}</h4>
            </div>
            <div className="location">
              <h4>{pd.name}</h4>
              <p>{pd.email}</p>
            </div>

            <div
              style={{
                backgroundColor: "black",
                padding: "1% 2%",
                color: "white",
              }}
            >
              {pd.status}
            </div>
            <div className="button-delete button">
              <button
                onClick={() => handleDelete(pd._id)}
                className="bk-button"
              >
                Delete
              </button>
            </div>

            <div className="button">
              <form onSubmit={handleSubmit(onSubmit)}>
                <select
                  className="bk-button"
                  onClick={() => handleOrderId(pd?._id)}
                  {...register("status")}
                >
                  <option value={pd?.status}>{pd?.status}</option>
                  <option value="approve">approve</option>
                </select>
                <input
                  style={{ backgroundColor: "#FFEE00" }}
                  className="bk-button ms-2"
                  type="submit"
                />
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
