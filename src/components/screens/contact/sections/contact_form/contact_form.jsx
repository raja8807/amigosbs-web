import React, { useState } from "react";
import styles from "./contact_form.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { CONTACT_DETAILS } from "@/constants/conatct";
import {
  EnvelopeAtFill,
  GeoAltFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
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
                Whether you have a question, a suggestion, or just want to say
                hello, this is the place to do it.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <TelephoneFill />
                  <div className={styles.infoText}>
                    <b>Call Us</b>
                    <a href={`tel:${CONTACT_DETAILS.phone1.number}`}>
                      {CONTACT_DETAILS.phone1.text}
                    </a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <EnvelopeAtFill />
                  <div className={styles.infoText}>
                    <b>Email Us</b>
                    <a href={`mailto:${CONTACT_DETAILS.emails[0]}`}>
                      {CONTACT_DETAILS.emails[0]}
                    </a>
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
                <div className={styles.locRow}>
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
                  <div className={styles.locationItem}>
                    <GeoAltFill />

                    <div className={styles.infoText}>
                      <b>Oragadam Branch</b>
                      <p>
                        S1, Selvasai Business Center
                        <br />
                        Ah Engineering, Industrial Corridor, <br />
                        Opposite to Daimler, Oragadam, <br />
                        Kanchipuram-602118.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3>Get In Touch</h3>
              <div className={styles.input_group}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.input_group}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.input_group}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.input_group}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <CustomButton type="submit" variant={1} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </CustomButton>
            </form>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ContactFormSection;
