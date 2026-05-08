import React from "react";
import AboutIntro from "./sections/intro/intro";
import AboutTeam from "./sections/team/team";
import AboutVision from "./sections/vision/vision";
import AboutStrengths from "./sections/strengths/strengths";
import PageBanner from "@/components/common/page_banner/page_banner";

const AboutScreen = () => {
  return (
    <>
      <PageBanner title="About Us" image="/images/about/banner.png" />
      <AboutIntro />
      <AboutTeam />
      <AboutVision />
      <AboutStrengths />
    </>
  );
};

export default AboutScreen;
