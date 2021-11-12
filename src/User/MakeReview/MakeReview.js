import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./MakeReview.css";

const MakeReview = () => {
  const { user } = useAuth();

  // Stpe-1: Make Review by POST Method to Database through the "onSubmit (React HOOK)"

  //   React Hook
  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("https://rocky-lowlands-76183.herokuapp.com/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Review, Successfully");
          reset();
        }
      });
  };

  ///   React Hook end

  // Step 3: Get Data from Specific user via email, Check "My Order Page"

  return (
    <div>
      <h2>Make a review</h2>

      <Row className="review">
        <Col>
          <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} />
            <input
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Occupation"
              defaultValue=""
              {...register("occupation")}
            />

            <input
              type="number"
              placeholder="Rating"
              {...register("star")}
              min="1"
              max="5"
            />

            <textarea
              className="text-area"
              placeholder="Tell us about your experience"
              defaultValue=""
              {...register("testimonial")}
            />
            <input
              className="bk-button"
              style={{ margin: "0 auto" }}
              type="submit"
            />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default MakeReview;
