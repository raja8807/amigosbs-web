import React from "react";
import styles from "./contact_form.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";

const ContactFormSection = () => {
  return (
    <section className={styles.ContactFormSection}>
      <CustomContainer>
        <div className={styles.contact_card}>
          <div className={styles.left}>
            <div className={styles.content}>
              <div className={styles.tag}>
                <span>GET IN TOUCH</span>
              </div>
              <h2 className={FONTS.font2}>We are always ready to help you</h2>
              <p>
                Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Please fill out the form below with your details and message, and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <form className={styles.form}>
              <h3>Get In Touch</h3>
              <div className={styles.input_group}>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className={styles.input_group}>
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className={styles.input_group}>
                <input type="tel" placeholder="Your Phone" required />
              </div>
              <div className={styles.input_group}>
                <textarea placeholder="Your Message" rows="4" required></textarea>
              </div>
              <CustomButton type="submit" variant={1}>Send Message</CustomButton>
            </form>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ContactFormSection;
