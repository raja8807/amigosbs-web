import React from "react";
import styles from "./intro.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import { Image } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";

const AboutIntro = () => {
  const companies = [
    "Amigos",
    "Amigos Rent-A-Car",
    "AMG Holidays",
    "Amigos Events",
  ];

  return (
    <section className={styles.AboutIntro}>
      <CustomContainer>
        <div className={styles.wrapper}>
          <div className={styles.image_side} data-aos="fade-right">
            <div className={styles.image_main}>
              <Image
                src="/images/headers/contact us.png"
                alt="Mechanic holding wrench"
                fluid
              />
            </div>
            {/* <div className={styles.image_sub}>
              <Image
                src="/images/about/intro_2.png"
                alt="Car in garage"
                fluid
              />
            </div> */}
          </div>
          <div className={styles.text_side} data-aos="fade-left">
            <div className={styles.tag}>
              <span>ABOUT US</span>
            </div>
     
            <p className={styles.desc}>
              Amigos Business Solutions is a company headquartered in Chennai-
              India started by a group of friends which in Spanish is called
              “AMIGOS” thus we named our company as “AMIGOS”.
            </p>
            <p className={styles.desc}>
              Each individual has over 15+ years of experience in the industry
              and understand the need of the clients very well. We started this
              company to fulfill the need of our clients within their desired
              budget and each individual brings out the best in each other
              pushing our company in greater Height.
            </p>

            <div className={styles.features_card}>
              <h3>Group Of Companies</h3>
              <ul className={styles.feature_list}>
                {companies.map((feature, i) => (
                  <li key={i}>
                    <CheckCircleFill />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <br />
              <Image
                src="/images/group of companies.png"
                fluid
                alt="group of companies"
              />
            </div>

            {/* <div className={styles.group_companies}>
              <h3>Group Companies</h3>
              <div className={styles.logoGrd}>
                <div>
                  <Image src="/logo/logo.png" fluid />
                  <p>Amigos</p>
                </div>
                <div className="">
                  <Image src="/logo/logo_rent.png" fluid />
                  <p>Rent-A-Car</p>
                </div>
                <div className="">
                  <Image src="/logo/amg_logo.png" fluid />
                  <p>AMG Holidays</p>
                </div>
                <div className="">

                <Image src="/logo/amigos_events.png" fluid />
                <p>Amigos Events</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutIntro;
