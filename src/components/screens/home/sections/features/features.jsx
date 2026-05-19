import React from 'react';
import styles from './features.module.scss';
import FONTS from '@/styles/fonts';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import SectionHeading from '@/components/common/section_heading/section_heading';

const featuresList = [
  {
    title: 'Tailored Travel Packages',
    description: 'Customized rental and tour plans designed to match your travel needs and budget.',
  },
  {
    title: 'Reliable Transportation',
    description: 'Well-maintained vehicles and professional drivers for safe, smooth journeys.',
  },
  {
    title: 'Comfortable & Clean Vehicles',
    description: 'Travel in comfort with hygienic, spacious, and modern vehicles.',
  },
  {
    title: 'Customer-First Service',
    description: 'Friendly support and hassle-free booking from start to finish.',
  },

];

const FeaturesSection = () => {
  return (
    <section className={styles.FeaturesSection}>
      <CustomContainer>
        <div className={styles.heading_wrapper}>
          <SectionHeading
            title="TRUSTED & AFFORDABLE"
            head="AMIGOS RENT A CAR"
            variation={2}
          />
          <p className={styles.description} data-aos="fade-up" data-aos-delay="100">
            Reliable rides, affordable pricing, customized travel solutions, and professional service-all designed to make every journey smooth, safe, and comfortable.
          </p>
        </div>

        <div className="row">
          {featuresList.map((feature, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={styles.feature_card}>
                <h3 className={FONTS.font2}>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default FeaturesSection;
