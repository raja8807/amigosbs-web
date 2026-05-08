import React from "react";
import styles from "./vision.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";

const AboutVision = () => {
  return (
    <section className={styles.AboutVision}>
      <CustomContainer>
        <div className={styles.wrapper}>
          <div className={styles.vision_side} data-aos="fade-right">
            <h2 className={FONTS.font2}>Our Vision</h2>
            <p>
              To be a leading service provider in our industry sectors, recognized for our commitment to excellence, customer-centric approach, and expansive reach.
            </p>
          </div>
          <div className={styles.mission_side} data-aos="fade-left">
            <h2 className={FONTS.font2}>Our Mission</h2>
            <p>
              To provide innovative and reliable solutions in car rentals, event management, tours, and visa processing, ensuring customer satisfaction through exceptional service quality.
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutVision;
