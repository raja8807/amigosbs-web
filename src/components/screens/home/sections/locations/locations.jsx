import React from "react";
import styles from "./locations.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { BRANCHES } from "@/constants/conatct";
import {
  GeoAltFill,
  TelephoneFill,
  EnvelopeFill,
  BuildingsFill,
} from "react-bootstrap-icons";
import FONTS from "@/styles/fonts";

const LocationsSection = () => {
  const mainBranch = BRANCHES[0]; // Chennai Location

  return (
    <section className={styles.LocationsSection}>
      <CustomContainer>
        <div className={styles.header} data-aos="fade-up">
          <h2 className={FONTS.font2}>Visit Our Office</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.content_wrapper}>
          <div className={styles.info_side} data-aos="fade-right">
            <div className={styles.location_card}>
              <div className={styles.icon_box}>
                <BuildingsFill />
              </div>
              <h3>{mainBranch.title}</h3>

              <div className={styles.details}>
                <div className={styles.info_item}>
                  <GeoAltFill />
                  <div className={styles.text}>
                    {mainBranch.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className={styles.info_item}>
                  <TelephoneFill />
                  <div className={styles.text}>
                    {mainBranch.phones.map((phone, i) => (
                      <p key={i}>{phone}</p>
                    ))}
                  </div>
                </div>

                <div className={styles.info_item}>
                  <EnvelopeFill />
                  <div className={styles.text}>
                    {mainBranch.emails.map((email, i) => (
                      <p key={i}>{email}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.map_side} data-aos="fade-left">
            <div className={styles.map_container}>

{/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3557.3201934987114!2d80.18886757660796!3d13.084404579523396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1778765853726!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default LocationsSection;
