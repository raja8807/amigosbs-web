import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import ServiceContent from "./sections/content/content";
import SafetySection from "./sections/safety/safety";

const ServiceDetailScreen = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <PageBanner 
        title={data.title} 
        image={data.bannerImage} 
        bogPos={data.bgPos} 
      />
      <ServiceContent data={data} />
      <SafetySection data={data} />
    </>
  );
};

export default ServiceDetailScreen;
