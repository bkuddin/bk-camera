import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { user, registerUser, isLoading, authError } = useAuth();
  const [loginData, setLoginData] = useState({});
  // Handle Login
  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Those passwords did not math, Try again! ");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  //   Handle OnChange
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(field, value, newLoginData);
    setLoginData(newLoginData);
  };
  return (
    <div>
      {!isLoading && (
        <Form
          onSubmit={handleRegisterSubmit}
          className="w-25"
          style={{ margin: "0 auto" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={handleOnChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password2"
              onChange={handleOnChange}
              type="password"
              placeholder="ReType your password"
            />
          </Form.Group>
          <Form.Group>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <button className="border-0 mb-2 bk-button">
                Already Registerd? Please Login
              </button>
            </NavLink>
          </Form.Group>
          <Button className="bk-button w-100" type="submit">
            Register
          </Button>
        </Form>
      )}
      {isLoading && <Spinner animation="border" variant="success" />}
      {user?.email && (
        <Alert
          className="w-25 my-3"
          style={{ margin: "0 auto" }}
          variant="success"
        >
          <p>Registration Completed Successfully</p>
        </Alert>
      )}

      {authError && (
        <Alert
          className="w-25 my-3"
          style={{ margin: "0 auto" }}
          variant="danger"
        >
          {authError}
        </Alert>
      )}
    </div>
  );
};

export default Register;
