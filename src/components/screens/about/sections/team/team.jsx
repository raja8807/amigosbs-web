import React from "react";
import styles from "./team.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import { Image } from "react-bootstrap";
import SectionHeading from "@/components/common/section_heading/section_heading";

const teamMembers = [
  {
    name: "Thomas Franklin",
    role: "Master Detailer",
    image: "/team/driver_1.png",
  },
  {
    name: "Markus Brown",
    role: "Ceramic Specialist",
    image: "/team/driver_2.png",
  },
  {
    name: "Zachary Henderson",
    role: "Interior Expert",
    image: "/team/driver_3.png",
  },
  {
    name: "Andrew Parker",
    role: "Paint Restoration",
    image: "/team/driver_4.png",
  },
];

const AboutTeam = () => {
  return (
    <section className={styles.AboutTeam}>
      <CustomContainer>
        <div className={styles.heading_box}>
          <SectionHeading title="OUR TEAM" head="Meet Our Expert Detailers" variation={3} />
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={styles.team_card}>
                <div className={styles.image_wrapper}>
                  <Image src={member.image} alt={member.name} fluid />
                </div>
                <div className={styles.card_content}>
                  <h3 className={FONTS.font2}>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutTeam;
