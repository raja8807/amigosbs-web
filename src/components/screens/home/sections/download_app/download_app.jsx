import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./download_app.module.scss";
import FONTS from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";

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
            <div className={styles.contactInfo} data-aos="fade-up" data-aos-delay="200">
              <p style={{ fontSize: '18px', color: '#ffffff', marginTop: '30px', marginBottom: '20px', lineHeight: '1.6' }}>
                To know more about the application please do reach out at:
              </p>
              <a href="mailto:sales@amigosbs.com" style={{ textDecoration: 'none', display: 'inline-block', position: 'relative', zIndex: 10 }}>
                <CustomButton variant={3}>sales@amigosbs.com</CustomButton>
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
