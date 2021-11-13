import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

// React Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faComments,
  faCamera,
  faTasks,
  faUserShield,
  faList,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.css";
import AddCameras from "../../../Admin/AddCameras/AddCameras";
import MakeReview from "../../../User/MakeReview/MakeReview";

import MakeAdmin from "../../../Admin/MakeAdmin/MakeAdmin";

import MyOrder from "../../../User/MyOrder/MyOrder";
import useAuth from "../../../hooks/useAuth";
import { Col, Container, Row } from "react-bootstrap";
import ManageCameras from "../../../Admin/ManageCameras/ManageCameras";
import ManageOrders from "../../../Admin/ManageOrders/ManageOrders";
import Payment from "../../../Admin/Payment/Payment";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  const dashBoardIcon = <FontAwesomeIcon icon={faTachometerAlt} />;
  const reviewIcon = <FontAwesomeIcon icon={faComments} />;
  const cameraIcon = <FontAwesomeIcon icon={faCamera} />;
  const manageIcon = <FontAwesomeIcon icon={faTasks} />;
  const adminIcon = <FontAwesomeIcon icon={faUserShield} />;
  const listIcon = <FontAwesomeIcon icon={faList} />;
  const payIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />;

  return (
    <>
      <Container fluid>
        <Row className="row">
          <Col md={3}>
            <h5 style={{ padding: "10%", backgroundColor: "#FFEE00" }}>
              {dashBoardIcon}Dashboard
            </h5>
            <div className="dashboard">
              <Link to={`${url}/my-order`}>
                <li className="dashboard-menu ">
                  <span style={{ marginRight: "2%" }}>{listIcon}</span> Order
                  List
                </li>
              </Link>

              <Link to={`${url}/make-review`}>
                <li className="dashboard-menu ">
                  <span style={{ marginRight: "2%" }}>{reviewIcon}</span>Review
                </li>
              </Link>
              <Link to={`${url}/payment`}>
                <li className="dashboard-menu ">
                  <span style={{ marginRight: "2%" }}>{payIcon}</span>Payment
                </li>
              </Link>
              <div className="admin-dashboard">
                {admin && (
                  <div>
                    <Link to={`${url}/manage-orders`}>
                      <li className="dashboard-menu">
                        <span style={{ marginRight: "2%" }}>{manageIcon}</span>{" "}
                        Manage Orders
                      </li>
                    </Link>
                    <Link to={`${url}/add-cameras`}>
                      <li className="dashboard-menu">
                        <span style={{ marginRight: "2%" }}>{cameraIcon}</span>{" "}
                        Add Cameras
                      </li>
                    </Link>
                    <Link to={`${url}/manage-cameras`}>
                      <li className="dashboard-menu">
                        <span style={{ marginRight: "2%" }}>{manageIcon}</span>{" "}
                        Manage Cameras
                      </li>
                    </Link>
                    <Link to={`${url}/make-admin`}>
                      <li className="dashboard-menu">
                        <span style={{ marginRight: "2%" }}>{adminIcon} </span>{" "}
                        Make Admin
                      </li>
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
              <Route exact path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route exact path={`${path}/my-order`}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/manage-orders`}>
                <ManageOrders></ManageOrders>
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
