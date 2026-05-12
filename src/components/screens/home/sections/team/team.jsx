import React from 'react';
import styles from './team.module.scss';
import FONTS from '@/styles/fonts';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import SectionHeading from '@/components/common/section_heading/section_heading';
import { Image } from 'react-bootstrap';



const teamMembers = [
  {
    name: 'Ramu Janarthanan',
    role: 'Vice president',
    image: '/team/driver_1.png',
  },
  {
    name: 'Gowri Shankar',
    role: 'G M- Operations',
    image: '/team/driver_2.png',
  },
  {
    name: 'Vinod Abraham',
    role: 'CEO',
    image: '/team/driver_3.png',
  },
  {
    name: 'Vijayan K Nair',
    role: 'GM - Sales & Marketing',
    image: '/team/driver_4.png',
  },
];

const TeamSection = () => {
  return (
    <section className={styles.TeamSection}>
      <CustomContainer>
        <div className={styles.heading_container}>
          <SectionHeading title="Our Leadership Team" head="Meet the People Driving Our Vision Forward" variation={1} />
          <p className={styles.description} data-aos="fade-up" data-aos-delay="100">
            Our leadership team brings together experience, innovation, and dedication to ensure excellence in operations, customer service, and company growth — guiding our organization with professionalism and commitment every step of the way.
          </p>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={styles.team_card}>
                <div className={styles.image_wrapper}>
                  <Image src={`/images/team/${member.name}.jpeg`} alt={member.name} fluid />
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

export default TeamSection;
