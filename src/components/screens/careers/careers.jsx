import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import JobListing from "./sections/job_listing/job_listing";

const CareersScreen = () => {
  return (
    <>
      <PageBanner
        title="Careers"
        image="/images/about/banner.png"
      />
      <JobListing />
    </>
  );
};

export default CareersScreen;
