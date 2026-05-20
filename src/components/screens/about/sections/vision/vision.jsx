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
              To become a trusted and leading business solutions partner recognized for innovation, integrity, quality service and customer satisfaction. We envision empowering businesses with reliable and future ready solutions while building long lasting relationships founded on trust, professionalism and mutual growth.
            </p>
          </div>
          <div className={styles.mission_side} data-aos="fade-left">
            <h2 className={FONTS.font2}>Our Mission</h2>
            <p>
              At Amigos Business Solutions, our mission is to deliver customized, reliable and cost effective business solutions that meet the unique needs of every client. We are committed to combining industry expertise, innovative strategies and exceptional customer service to help businesses achieve operational excellence and sustainable growth.
            </p>
            <p>We strive to:</p>
            <ul>
              <li>Build long term client relationships through trust, transparency, and consistent support.</li>
              <li>Deliver high quality solutions that align with client objectives and budgets.</li>
              <li>Foster innovation, teamwork and continuous improvement in every aspect of our business.</li>
              <li>Provide seamless and result oriented services that create real business value.</li>
              <li>Grow together with our clients by becoming a dependable and trusted business partner.</li>
            </ul>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutVision;
