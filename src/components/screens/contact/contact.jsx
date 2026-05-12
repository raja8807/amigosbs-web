import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import ContactFormSection from "./sections/contact_form/contact_form";
import SlideshowSection from "./sections/slideshow/slideshow";

const ContactScreen = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        image="/images/about/banner.png"
      />
      <ContactFormSection />
      <SlideshowSection />
    </>
  );
};

export default ContactScreen;
