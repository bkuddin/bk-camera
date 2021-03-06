import React, { useEffect, useState } from "react";
import "./Reviews.css";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import userPhoto from "../../../images/photo-icon.png";
import Rating from "react-rating";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://rocky-lowlands-76183.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  SwiperCore.use([Autoplay]);

  return (
    <div className="review-section">
      <div className="reviews-header"></div>

      <h4 style={{ marginTop: "3%" }}>
        We've sell more than 50 Thousands cameras for 30,506+ businesses like
        yours.
      </h4>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="slide-content">
              <div className="user-image">
                <img src={userPhoto} className="user-photo" />
              </div>

              <div className="review-text">
                <h5>{review.name}</h5>
                <h6>{review.occupation}</h6>
                <Rating
                  style={{ color: "#DDCC00" }}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  initialRating={review.star}
                  readonly
                ></Rating>
                <p>{review.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default Reviews;
