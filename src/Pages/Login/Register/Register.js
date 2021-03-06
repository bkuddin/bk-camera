import React, { useState } from "react";
import { Alert, Form, Spinner } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  // Handle Login
  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Those passwords did not math, Try again! ");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  //   Handle onBlur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(field, value, newLoginData);
    setLoginData(newLoginData);
  };
  return (
    <div className="register-bg">
      {!isLoading && (
        <Form onSubmit={handleRegisterSubmit} className="register-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              name="name"
              onBlur={handleOnBlur}
              type="text"
              placeholder="Your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              name="email"
              onBlur={handleOnBlur}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              name="password"
              onBlur={handleOnBlur}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              name="password2"
              onBlur={handleOnBlur}
              type="password"
              placeholder="ReType your password"
            />
          </Form.Group>
          <button className="bk-button reg-button" type="submit">
            Register
          </button>
          <Form.Group>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <button className="border-0 mt-2 bk-button reg-button">
                Already Registerd? Please Login
              </button>
            </NavLink>
          </Form.Group>
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
