import React from 'react';
import styles from './team.module.scss';
import Image from 'next/image';
import FONTS from '@/styles/fonts';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import SectionHeading from '@/components/common/section_heading/section_heading';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Professional Driver',
    image: '/team/driver_1.png',
  },
  {
    name: 'Jamee Lee',
    role: 'Professional Driver',
    image: '/team/driver_2.png',
  },
  {
    name: 'Emily Davis',
    role: 'Professional Driver',
    image: '/team/driver_3.png',
  },
  {
    name: 'Navan dravite',
    role: 'Professional Driver',
    image: '/team/driver_4.png',
  },
];

const TeamSection = () => {
  return (
    <section className={styles.TeamSection}>
      <CustomContainer>
        <div className={styles.heading_container}>
          <SectionHeading title="OUR DRIVERS" head="Meet Our Professional Taxi Drivers" variation={2} />
          <p className={styles.description} data-aos="fade-up" data-aos-delay="100">
            Our Taxi Booking Service is designed to make your travel experience fast, safe, and convenient — whether you're heading to work,.
          </p>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={styles.team_card}>
                <div className={styles.image_wrapper}>
                  <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
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
