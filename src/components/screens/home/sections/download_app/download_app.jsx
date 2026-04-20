import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./download_app.module.scss";
import FONTS from "@/styles/fonts";

const DownloadAppSection = () => {
  return (
    <section className={styles.downloadAppSection}>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={12} className={styles.textColumn}>
            <h2 className={`${styles.title} ${FONTS.font2}`} data-aos="fade-right">
              Download our app to get most out of it
            </h2>
            <p className={styles.description} data-aos="fade-right" data-aos-delay="100">
              Thrown shy denote ten ladies though ask saw. Or by to he going think order event music.
              Incommode so intention defective at convinced. Led income months itself and houses you.
            </p>
            <div className={styles.buttonGroup} data-aos="fade-up" data-aos-delay="200">
              <a href="#" className={styles.appBtn}>
                <Image src="/assets/google-app-download.svg" alt="Google Play" />
              </a>
              <a href="#" className={styles.appBtn}>
                <Image src="/assets/ios-app-btn.svg" alt="App Store" />
              </a>
            </div>
          </Col>
          <Col lg={5} md={12} className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.bgDecoration}>
                <Image src="/assets/blob1.png" className={styles.blob1} alt="" />
                <Image src="/assets/blob2.png" className={styles.blob2} alt="" />
              </div>
              <Image
                src="/assets/phone.png"
                alt="App Phone"
                className={styles.phoneImage}
                data-aos="zoom-in"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadAppSection;
