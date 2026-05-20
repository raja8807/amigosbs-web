import React from "react";
import styles from "./strengths.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import { AwardFill, GearFill, PeopleFill, BriefcaseFill, GeoAltFill, CpuFill } from "react-bootstrap-icons";

const strengthsData = [
  {
    title: "Experienced Leadership",
    desc: "The founding team brings over 30 years of industry experience, providing deep insights into client needs and market dynamics.",
    icon: <PeopleFill />,
  },
  {
    title: "Comprehensive Service Portfolio",
    desc: "Offering a diverse range of services under one roof allows clients to enjoy seamless and integrated solutions.",
    icon: <BriefcaseFill />,
  },
  {
    title: "Customer Centric Approach",
    desc: "A strong focus on understanding and fulfilling client requirements ensures high satisfaction and repeat business.",
    icon: <AwardFill />,
  },
  {
    title: "Strategic Location of Branches",
    desc: "The placement of branches in key areas like Guindy, Thoraipakkam, and Oragadam enhances operational efficiency and client convenience.",
    icon: <GeoAltFill />,
  },
  {
    title: "Innovative Solutions",
    desc: "Continuous adaptation to market trends and client feedback drives the development of tailored and effective services.",
    icon: <GearFill />,
  },
 {
  title: "Innovation",
  desc: "Integrating cutting-edge technology to provide end-to-end services that guarantee precision, reliability, and clear data insights.",
  icon: <CpuFill />,
},
];

const AboutStrengths = () => {
  return (
    <section className={styles.AboutStrengths}>
      <CustomContainer>
        <div className={styles.header} data-aos="fade-up">
          <h2 className={FONTS.font2}>Key Strengths</h2>
          <p>
            What sets Amigos Business Solutions apart and drives our commitment to excellence.
          </p>
        </div>
        <div className={styles.grid}>
          {strengthsData.map((item, index) => (
            <div 
              className={styles.card} 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className={styles.icon_wrapper}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutStrengths;
