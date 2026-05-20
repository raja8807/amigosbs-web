import React from "react";
import { Carousel, Container } from "react-bootstrap";
import styles from "./slideshow.module.scss";

const SlideshowSection = () => {
  const images = [
    {
      src: "/images/contact/contact (1).jpeg",
      title: "Our Workspace",
      description: "Experience the professional environment at Amigos Business Solutions."
    },
    {
      src: "/images/contact/contact (2).jpeg",
      title: "Collaborative Spirit",
      description: "We work together to bring you the best solutions."
    },
    {
      src: "/images/contact/contact (3).jpeg",
      title: "Global Reach",
      description: "Serving clients across various industries and regions."
    },
    {
      src: "/images/contact/contact (4).jpeg",
      title: "Innovation Hub",
      description: "Where creativity meets technology."
    },
    {
      src: "/images/contact/contact (5).jpeg",
      title: "Dedicated Support",
      description: "Your success is our priority, every step of the way."
    },
    {
      src: "/images/contact/contact (6).jpeg",
      title: "Dedicated Support",
      description: "Your success is our priority, every step of the way."
    },
    {
      src: "/images/contact/contact (7).jpeg",
      title: "Dedicated Support",
      description: "Your success is our priority, every step of the way."
    },
    {
      src: "/images/contact/contact (8).jpeg",
      title: "Dedicated Support",
      description: "Your success is our priority, every step of the way."
    },
    {
      src: "/images/contact/contact (9).jpeg",
      title: "Dedicated Support",
      description: "Your success is our priority, every step of the way."
    },
    {
      src: "/images/contact/contact (10).jpeg",
      title: "Dedicated Support",
      description: "Your success is our priority, every step of the way."
    },
  ];

  return (
    <section className={styles.slideshowSection}>
      <Container>
        <div className={styles.carouselContainer}>
          <Carousel
            fade
            indicators={true}
            controls={true}
            interval={5000}
            pause="hover"
          >
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                />

              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default SlideshowSection;
