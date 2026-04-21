import React from "react";
import styles from "./content.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import { CheckCircleFill } from "react-bootstrap-icons";

const ServiceContent = ({ data }) => {
  return (
    <section className={styles.ServiceContent}>
      <CustomContainer>
        <div className={styles.wrapper}>
          <div className={styles.left_side} data-aos="fade-right">
            <h2 className={FONTS.font2}>{data.description}</h2>
            <div className={styles.full_text}>
              {data.fullContent.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <div className={styles.right_side} data-aos="fade-left">
            <div className={styles.features_card}>
              <h3>Key Offerings</h3>
              <ul className={styles.feature_list}>
                {data.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircleFill />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServiceContent;
