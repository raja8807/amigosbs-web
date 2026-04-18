import React from "react";
import styles from "./banner.module.scss";
import { Carousel } from "react-bootstrap";
import FONTS from "@/styles/fonts";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const BannerSection = () => {
  const bgImages = [
    {
      id: "1",
      src: "/images/banner-bg.jpg",
    },
    {
      id: "2",
      src: "/images/banner-bg.webp",
    },
    {
      id: "3",
      src: "/images/banner-bg.webp",
    },
  ];

  return (
    <section className={styles.BannerSection}>
      <div className={styles.Banner}>
        <div
          className={styles.bgWrap}
          style={{
            backgroundImage: `url('${bgImages[0].src}')`,
          }}
        ></div>

        <div className={styles.cont}>
          <CustomContainer>
            <div className={styles.wrap}>
              <div className={styles.left}>
                <div className={styles.detail}>
                  <div className={`${styles.bar} ${styles.barTop}`}>
                    <div />
                  </div>
                  <p>Plan your trip now</p>
                  <div className={`${styles.bar} ${styles.barBot}`}>
                    <div />
                  </div>
                </div>
                <h1 className={FONTS.font2}>
                  Save <span>big</span> with
                  <br />
                  our car rental
                  {/* The Ultimate <span>Car</span>
                  <br />
                  <span>Detailing</span> Service */}
                </h1>
              </div>

              <div className={styles.right}>
                <p>
                  Amigos Business Solutions is a company headquartered in
                  Chennai- India started by a group of friends which in Spanish
                  is called “AMIGOS” thus we named our company as “AMIGOS”....
                </p>
              </div>
            </div>
          </CustomContainer>
        </div>
      </div>
      {/* <Carousel fade indicators={false} controls={false} draggable={false}>
        {bgImages.map((bg) => {
          return (
            <Carousel.Item key={bg.id}>
              <div className={styles.Banner}>
                <div
                  className={styles.bgWrap}
                  style={{
                    backgroundImage: `url('${bg.src}')`,
                  }}
                ></div>

                <div className={styles.cont}>
                  <p
                    className={FONTS.font2}
                    data-aos="fade-up"
                    data-aos-delay={1500 + 500}
                  >
                    Travel Smarter, Travel Better
                  </p>

                  <div className={FONTS.font2}>
                    <h1>
                      <span
                        className={styles.w1}
                        data-aos="fade-up"
                        data-aos-delay={1500 + 0}
                      >
                        Find
                      </span>
                      <span
                        className={styles.w2}
                        data-aos="fade-up"
                        data-aos-delay={1500 + 100}
                      >
                        Your
                      </span>
                      <span
                        className={styles.w3}
                        data-aos="fade-up"
                        data-aos-delay={1500 + 200}
                      >
                        Next
                      </span>
                      <span
                        className={styles.w4}
                        data-aos="fade-up"
                        data-aos-delay={1500 + 300}
                      >
                        Stay
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel> */}
    </section>
  );
};

export default BannerSection;
