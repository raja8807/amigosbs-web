import React from "react";
import BannerSection from "./sections/banner/banner";
import PlanSection from "./sections/plan/plan";
import CarsSection from "./sections/cars/cars";


const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <PlanSection/>
      <CarsSection/>

    </>
  );
};

export default HomeScreen;
