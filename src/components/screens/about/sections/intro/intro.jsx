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

          </div>
          <div className={styles.text_side} data-aos="fade-left">
            <div className={styles.tag}>
              <span>ABOUT US</span>
            </div>

            <p className={styles.desc}>
              Welcome to Amigos Business Solutions, a professionally driven business solutions company headquartered in Chennai, built on trust, collaboration, and a passion for delivering reliable solutions that help businesses grow.
            </p>
            <p className={styles.desc}>
              The name &ldquo;AMIGOS,&rdquo; derived from the Spanish word for &ldquo;friends,&rdquo; represents the strong foundation on which our company was created. Founded by a group of experienced professionals and friends, Amigos Business Solutions was established with a shared vision to provide dependable, innovative, and cost-effective business solutions tailored to the evolving needs of clients across industries.
            </p>
            <p className={styles.desc}>
              With each founding member bringing over 15 years of industry experience, we possess deep knowledge and practical understanding of client expectations, operational challenges, and modern business requirements. Our expertise enables us to deliver customized solutions that align perfectly with our clients&rsquo; goals, timelines, and budgets while maintaining the highest standards of professionalism and service quality.
            </p>
            <p className={styles.desc}>
              At Amigos Business Solutions, we believe that every successful partnership is built on transparency, commitment, and trust. We work closely with our clients to understand their unique requirements and provide strategic solutions that create long-term value and sustainable growth. Our collaborative approach, combined with innovative thinking and customer-focused service, allows us to consistently exceed expectations.
            </p>
            <p className={styles.desc}>
              Driven by teamwork and a commitment to excellence, every individual within our organization contributes their strengths and expertise to push the company towards greater heights. We continuously strive to improve, innovate, and adapt in order to provide seamless and impactful solutions that support the success of our clients.
            </p>



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
      </CustomContainer>
    </section>
  );
};

export default AboutIntro;
