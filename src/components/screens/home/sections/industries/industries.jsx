import React from "react";
import styles from "./industries.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import {
  Cpu,
  Gear,
  CupHot,
  HddNetwork,
  Headset,
  Building,
  Bank,
  Hospital,
  HouseDoor,
  Buildings
} from "react-bootstrap-icons";
import Link from "next/link";

const industriesData = [
  { name: "Technology", icon: <Cpu /> },
  { name: "Manufacturing", icon: <Gear /> },
  { name: "Hospitality", icon: <Hospital /> },
  { name: "ITES", icon: <HddNetwork /> },
  { name: "BPO", icon: <Headset /> },
  { name: "Hotels", icon: <Building /> },
  { name: "PSU", icon: <Buildings /> },
  { name: "Banking", icon: <Bank /> },
];

const IndustriesSection = () => {
  return (
    <section className={styles.IndustriesSection}>
      <CustomContainer>
        <div className={styles.header} data-aos="fade-up">
          <h2 className={FONTS.font2}>Industries We Serve</h2>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.grid}>
          {industriesData.map((item, index) => (
            <div
              className={styles.industry_card}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className={styles.icon_wrapper}>
                {item.icon}
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <p>To know more about our services please do reach at{" "}
          <Link href={'mailto:sales@amigosbs.com'}>sales@amigosbs.com</Link>
        </p>
      </CustomContainer>
    </section>
  );
};

export default IndustriesSection;
