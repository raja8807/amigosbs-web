import React from "react";
import PageBanner from "@/components/common/page_banner/page_banner";
import ContactFormSection from "./sections/contact_form/contact_form";

const ContactScreen = () => {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        image="/images/about/banner.png" 
      />
      <ContactFormSection />
    </>
  );
};

export default ContactScreen;
