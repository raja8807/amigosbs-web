import React from "react";
import styles from "./contact_form.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { CONTACT_DETAILS } from "@/constants/conatct";
import { EnvelopeAtFill, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";

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
                Whether you have a question, a suggestion, or just want to say hello, this is the place to do it.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <TelephoneFill />
                  <div className={styles.infoText}>
                    <b>Call Us</b>
                    <a href={`tel:${CONTACT_DETAILS.phone1.number}`}>{CONTACT_DETAILS.phone1.text}</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <EnvelopeAtFill />
                  <div className={styles.infoText}>
                    <b>Email Us</b>
                    <a href={`mailto:${CONTACT_DETAILS.emails[0]}`}>{CONTACT_DETAILS.emails[0]}</a>
                  </div>
                </div>
              </div>

              <div className={styles.locations}>
                <div className={styles.locationItem}>
                  <GeoAltFill />
                  <div className={styles.infoText}>
                    <b>Head Office</b>
                    <p>
                      {CONTACT_DETAILS.address.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <GeoAltFill />
                  <div className={styles.infoText}>
                    <b>Nanganallur Branch</b>
                    <p>
                      Amigos Rent A Car <br />
                      #5, BM Complex 45th Street, <br />
                      Thilai Ganga Nagar, Nanganallur, <br />
                      Chennai -600 061.
                    </p>
                  </div>
                </div>
              </div>
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
