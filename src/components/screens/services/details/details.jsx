import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import ServiceContent from "./sections/content/content";

const ServiceDetailScreen = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <PageBanner 
        title={data.title} 
        image={data.bannerImage} 
      />
      <ServiceContent data={data} />
    </>
  );
};

export default ServiceDetailScreen;
