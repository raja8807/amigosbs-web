import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import JobListing from "./sections/job_listing/job_listing";

const CareersScreen = () => {
  return (
    <>
      <PageBanner
        title="Careers"
        image="/images/headers/careers.jpeg"
        bogPos="top"
      />
      <JobListing />
    </>
  );
};

export default CareersScreen;
