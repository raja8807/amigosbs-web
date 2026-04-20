import React from "react";
import BannerSection from "./sections/banner/banner";
import PlanSection from "./sections/plan/plan";
import FeaturesSection from "./sections/features/features";
import CarsSection from "./sections/cars/cars";
import TeamSection from "./sections/team/team";
import DownloadAppSection from "./sections/download_app/download_app";


const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <PlanSection/>
      <FeaturesSection/>
      <CarsSection/>
      <TeamSection/>
      <DownloadAppSection />

    </>
  );
};

export default HomeScreen;
