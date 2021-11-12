import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageCameras = () => {
  const [cameras, setcameras] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);

  // Step 1: Get all cameras to show
  useEffect(() => {
    fetch("http://localhost:5000/allCameras")
      .then((res) => res.json())
      .then((data) => setcameras(data));
  }, [isDeleted]);

  //   Handle Delete Button
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/allCameras/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          setIsDeleted(true);
        } else {
          setIsDeleted(false);
        }
      });
    console.log(id);
  };

  return (
    <div>
      <h2>Manage Cameras</h2>
      <Row xs={1} md={4} className="g-4 mx-5 my-5">
        {cameras.map((camera, index) => (
          <div>
            <Col>
              <Card>
                <Card.Img variant="top" src={camera.img} />
                <Card.Body>
                  <Card.Title>{camera.model}</Card.Title>
                  <Card.Text>
                    <h2>{camera.brand}</h2>
                  </Card.Text>
                </Card.Body>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(camera._id)}
                >
                  Delete
                </button>{" "}
                <br />
                <Link to={`/update-cameras/${camera._id}`}>
                  <button className="btn btn-success">Update</button>
                </Link>
                <br />
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default ManageCameras;
