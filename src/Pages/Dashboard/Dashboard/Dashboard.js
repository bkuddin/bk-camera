import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";
import AddCameras from "../../../Admin/AddCameras/AddCameras";
import MakeReview from "../../../User/MakeReview/MakeReview";

import MakeAdmin from "../../../Admin/MakeAdmin/MakeAdmin";
import ManageCameras from "../../../Admin/ManageCameras/ManageCameras";
import MyOrder from "../../../User/MyOrder/MyOrder";
import useAuth from "../../../hooks/useAuth";
import { Col, Container, Row } from "react-bootstrap";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user, admin } = useAuth();

  return (
    <>
      <Container fluid>
        <Row className="row">
          <Col md={3}>
            <div className="dashboard">
              <h5>Dashboard</h5>
              <Link to={`${url}`}>
                <li className="dashboard-menu mt-5">Book</li>
              </Link>

              <Link to={`${url}/my-order`}>
                <li className="dashboard-menu mt-5">Order List</li>
              </Link>

              <Link to={`${url}/make-review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>
              <div className="admin-dashboard">
                {admin && (
                  <div>
                    <Link to={`${url}/add-cameras`}>
                      <li className="dashboard-menu">Add Service</li>
                    </Link>
                    <Link to={`${url}/make-admin`}>
                      <li className="dashboard-menu">Make Admin</li>
                    </Link>
                    <Link to={`${url}/manage-cameras`}>
                      <li className="dashboard-menu">Manage Service</li>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col md={9}>
            <Switch>
              <Route exact path={path}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/make-review`}>
                <MakeReview></MakeReview>
              </Route>
              <Route exact path={`${path}/my-order`}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/make-admin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/add-cameras`}>
                <AddCameras></AddCameras>
              </Route>
              <Route exact path={`${path}/manage-cameras`}>
                <ManageCameras></ManageCameras>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashbaord;
