import React from "react";
import styles from "./safety.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import { 
  ShieldCheck, 
  TelephoneFill, 
  PhoneVibrateFill, 
  PhoneFill, 
  MapFill, 
  PersonDashFill, 
  PersonBadgeFill, 
  BellFill, 
  ShareFill, 
  StarFill 
} from "react-bootstrap-icons";

const iconMap = {
  "Safe Reach": <ShieldCheck />,
  "Instant SOS Call": <TelephoneFill />,
  "Call Masking": <PhoneVibrateFill />,
  "Contactless Confirmation": <PhoneFill />,
  "Intelligent Routing or Route Planning": <MapFill />,
  "Blacklisting Non-Compliant Drivers": <PersonDashFill />,
  "Escort Management": <PersonBadgeFill />,
  "Violation Alerts": <BellFill />,
  "Share Trip": <ShareFill />,
  "Feedback and Ratings": <StarFill />,
};

const SafetySection = ({ data }) => {
  if (!data?.safetyFeatures) return null;

  return (
    <section className={styles.SafetySection}>
      <CustomContainer>
        <div className={styles.header} data-aos="fade-up">
          <h2 className={FONTS.font2}>
            Employee <span>Safety-First</span> Approach
          </h2>
          <p>
            Comprehensive security protocols and smart features designed to ensure a secure commute.
          </p>
        </div>
        <div className={styles.list}>
          {data.safetyFeatures.map((feature, index) => (
            <div 
              className={styles.feature_item} 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 50}
            >
              <div className={styles.icon_wrapper}>
                {iconMap[feature.title] || <ShieldCheck />}
              </div>
              <div className={styles.content}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default SafetySection;
