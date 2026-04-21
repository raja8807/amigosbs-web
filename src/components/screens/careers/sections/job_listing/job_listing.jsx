import React from "react";
import styles from "./job_listing.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import { JOBS } from "@/constants/careers";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const JobCard = ({ job, index }) => {
  return (
    <div 
      className={styles.JobCard} 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
    >
      <div className={styles.left}>
        <h2 className={FONTS.font2}>{job.title}</h2>
        <p className={styles.desc}>{job.description}</p>
        <div className={styles.tags}>
          {job.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <Link href={job.link}>
          <CustomButton variant={1}>Apply Now</CustomButton>
        </Link>
      </div>
    </div>
  );
};

const JobListing = () => {
  return (
    <section className={styles.JobListing}>
      <CustomContainer>
        <div className={styles.wrapper}>
          {JOBS.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default JobListing;
