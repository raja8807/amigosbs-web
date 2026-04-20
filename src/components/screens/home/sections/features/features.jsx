import React from 'react';
import styles from './features.module.scss';
import FONTS from '@/styles/fonts';
import CustomContainer from '@/components/ui/custom_container/custom_container';
import SectionHeading from '@/components/common/section_heading/section_heading';

const featuresList = [
  {
    title: 'Expert Technicians',
    description: 'Our detailers are skilled professionals with years of experience in car care.',
  },
  {
    title: 'Tailored Packages',
    description: 'Detailing options customized to your car\'s condition and your preferences.',
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden fees — quality service that fits your budget.',
  },
  {
    title: 'Aftercare Support',
    description: 'We provide post-service tips and care advice to keep your car looking sharp.',
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.FeaturesSection}>
      <CustomContainer>
        <div className={styles.heading_wrapper}>
          <SectionHeading
            title="TRUSTED & AFFORDABLE"
            head="Why Choose Amigos?"
            variation={2}
          />
          <p className={styles.description} data-aos="fade-up" data-aos-delay="100">
            From deep interior cleaning to long-lasting ceramic coating, we restore and protect your vehicle with precision, care, and a commitment to perfection.
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
