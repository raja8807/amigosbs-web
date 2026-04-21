import React from "react";
import styles from "./vision.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";

const missionItems = [
  {
    title: "Premium Car Care",
    desc: "To offer professional detailing solutions that restore, maintain, and protect your vehicle to the highest standard.",
  },
  {
    title: "Sustainable Practices",
    desc: "We emphasize eco-friendly products and water-conscious methods to promote responsible vehicle maintenance.",
  },
  {
    title: "Customer Excellence",
    desc: "We strive to exceed expectations with every detail, delivering reliable service and transparent communication.",
  },
];

const AboutVision = () => {
  return (
    <section className={styles.AboutVision}>
      <CustomContainer>
        <div className={styles.wrapper}>
          <div className={styles.vision_side} data-aos="fade-right">
            <h2 className={FONTS.font2}>Our Vision</h2>
            <p>
              To lead the industry with trusted, high-quality auto detailing services that enhance vehicle aesthetics, protect surfaces, and deliver unmatched customer satisfaction. We aim to redefine how car owners care for and take pride in their vehicles.
            </p>
          </div>
          <div className={styles.mission_side} data-aos="fade-left">
            <h2 className={FONTS.font2}>Our Mission</h2>
            <div className={styles.mission_list}>
              {missionItems.map((item, index) => (
                <div className={styles.mission_item} key={index}>
                  <div className={styles.number}>
                    <span>{index + 1}</span>
                  </div>
                  <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutVision;
