import React from "react";
import Banner from "../Banner/Banner";
import Cameras from "../Cameras/Cameras";
import GetSupport from "../GetSupport/GetSupport";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cameras />
      <GetSupport />
      <Reviews />
    </div>
  );
};

export default Home;
