import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { user, loginUser, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [loginData, setLoginData] = useState({});
  // Handle Login
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  //   Handle OnChange
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  return (
    <div className="login-bg">
      <div className="login-form">
        <Form
          onSubmit={handleLoginSubmit}
          className="w-50"
          style={{ margin: "0 auto" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              name="email"
              onChange={handleOnChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-light">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              name="password"
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <button className="bk-button w-100" type="submit">
            Login
          </button>

          <Form.Group className="mt-2">
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              New User? Please Register
            </NavLink>
          </Form.Group>
        </Form>
      </div>

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

export default Login;
