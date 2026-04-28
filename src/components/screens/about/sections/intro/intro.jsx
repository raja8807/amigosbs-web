import React from "react";
import styles from "./intro.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import { Image } from "react-bootstrap";

const AboutIntro = () => {
  return (
    <section className={styles.AboutIntro}>
      <CustomContainer>
        <div className={styles.wrapper}>
          <div className={styles.image_side} data-aos="fade-right">
            <div className={styles.image_main}>
              <Image src="/images/about/intro_1.png" alt="Mechanic holding wrench" fluid />
            </div>
            <div className={styles.image_sub}>
              <Image src="/images/about/intro_2.png" alt="Car in garage" fluid />
            </div>
          </div>
          <div className={styles.text_side} data-aos="fade-left">
            <div className={styles.tag}>
              <span>ABOUT US</span>
            </div>
            <h1 className={FONTS.font2}>
              Meaningful tech that meets your moment
            </h1>
            <p className={styles.desc}>
              Amigos Business Solutions is a company headquartered in Chennai- India started by a group of friends which in Spanish is called “AMIGOS” thus we named our company as “AMIGOS”.
            </p>
            <p className={styles.desc}>
              Each individual has over 15+ years of experience in the industry and understand the need of the clients very well. We started this company to fulfill the need of our clients within their desired budget and each individual brings out the best in each other pushing our company in greater Height.
            </p>
            
            <div className={styles.group_companies}>
              <h3>Group Companies</h3>
              <ul>
                <li>Amigos Rent A Car Pvt Ltd</li>
                <li>AMG HOLIDAYS</li>
              </ul>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutIntro;
