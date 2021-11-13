import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://rocky-lowlands-76183.herokuapp.com/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
          setEmail("");
        }
      });
    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };

  return (
    <div className="make-admin-section">
      <h2>Make Adming</h2>

      <Form
        onSubmit={handleAdminSubmit}
        className="w-50 "
        style={{ margin: "0 auto" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            name="email"
            onBlur={handleOnBlur}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <button className="bk-button w-100" type="submit">
          Make Admin
        </button>
      </Form>

      {success && (
        <Alert
          className="w-25 my-3"
          style={{ margin: "0 auto" }}
          variant="success"
        >
          <p>Made Admin Successfully</p>
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
