import React from "react";
import BannerSection from "./sections/banner/banner";
import PlanSection from "./sections/plan/plan";
import FeaturesSection from "./sections/features/features";
import CarsSection from "./sections/cars/cars";
import IndustriesSection from "./sections/industries/industries";
import TeamSection from "./sections/team/team";
import DownloadAppSection from "./sections/download_app/download_app";

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <PlanSection />
      <FeaturesSection />
      <CarsSection />
      <IndustriesSection />
      <TeamSection />
      <DownloadAppSection />
    </>
  );
};

export default HomeScreen;
