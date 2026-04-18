import React from "react";
import styles from "./plan.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { Image } from "react-bootstrap";
import { CarFront, Headset, ShieldFillCheck } from "react-bootstrap-icons";
import FONTS from "@/styles/fonts";

const PlanSection = () => {
  const cards = [
    {
      title: "Select Car",
      text: "To contribute to positive change and achieve our sustainability goals with many extraordinary",
      icon: <CarFront />,
      blob: "blob4",
    },
    {
      title: "Conatct Operator",
      text: "To contribute to positive change and achieve our sustainability goals with many extraordinary",
      icon: <Headset />,
      blob: "blob2",
    },
    {
      title: "Let's Drive",
      text: "To contribute to positive change and achieve our sustainability goals with many extraordinary",
      icon: <ShieldFillCheck />,
      blob: "blob3",
      noLine: true,
    },
  ];

  return (
    <section className={styles.PlanSection}>
      <CustomContainer>
        <SectionHeading
          title={"Plan your trip now"}
          head={"Quick & easy car rental"}
        />

        <div className={styles.wrap}>
          {cards.map((card) => {
            return (
              <div className={styles.planCard} key={card.title}>
                {!card.noLine && (
                  <div className={styles.line}>
                    <Image src="/assets/border.png" alt="line" />
                  </div>
                )}
                <div className={styles.ico}>
                  <Image
                    src={`/assets/${card.blob}.png`}
                    fluid
                    alt="blob1.png"
                    className={styles.blob}
                  />
                  {card.icon}
                </div>

                <div className={styles.text}>
                  <h3 className={FONTS.font2}>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CustomContainer>
    </section>
  );
};

export default PlanSection;
