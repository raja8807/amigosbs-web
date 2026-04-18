import React, { useState } from "react";
import styles from "./cars.module.scss";
import SectionHeading from "@/components/common/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Carousel, Image } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const CarsSection = () => {
  const categories = [
    {
      name: "Standard",
      cars: [
        { name: "Toyota Etios", pricePerKm: 12 },
        { name: "Swift Dzire", pricePerKm: 11 },
        { name: "Hyundai Xcent", pricePerKm: 11 },
        { name: "Tata Tigor", pricePerKm: 10 },
      ],
    },
    {
      name: "Business",
      cars: [
        { name: "Honda City", pricePerKm: 15 },
        { name: "Hyundai Verna", pricePerKm: 16 },
        { name: "Skoda Slavia", pricePerKm: 17 },
        { name: "Volkswagen Virtus", pricePerKm: 17 },
      ],
    },
    {
      name: "Economy",
      cars: [
        { name: "Maruti Alto", pricePerKm: 8 },
        { name: "Renault Kwid", pricePerKm: 8 },
        { name: "Maruti WagonR", pricePerKm: 9 },
        { name: "Hyundai Santro", pricePerKm: 9 },
      ],
    },
    {
      name: "Vip",
      cars: [
        { name: "Toyota Fortuner", pricePerKm: 30 },
        { name: "BMW 5 Series", pricePerKm: 55 },
        { name: "Audi A6", pricePerKm: 60 },
        { name: "Mercedes E-Class", pricePerKm: 65 },
      ],
    },
    {
      name: "Minivan",
      cars: [
        { name: "Toyota Innova", pricePerKm: 20 },
        { name: "Innova Crysta", pricePerKm: 22 },
        { name: "Kia Carnival", pricePerKm: 35 },
        { name: "Maruti Ertiga", pricePerKm: 16 },
      ],
    },
    {
      name: "Comfort",
      cars: [
        { name: "Hyundai Creta", pricePerKm: 18 },
        { name: "Kia Seltos", pricePerKm: 18 },
        { name: "Honda Elevate", pricePerKm: 19 },
        { name: "MG Astor", pricePerKm: 20 },
      ],
    },
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  return (
    <section className={styles.CarsSection}>
      <SectionHeading head="Our rental fleet" title={" Vehicle Models "} />
      <CustomContainer>
        <div className={styles.selector}>
          {categories.map((cat, idx) => {
            return (
              <div
                className={`${styles.item} ${idx === currentCategoryIndex ? styles.active : ""}`}
                key={cat.name}
                onClick={() => {
                  setCurrentCategoryIndex(idx);
                }}
              >
                <p>{cat.name}</p>
              </div>
            );
          })}
        </div>

        <div>
          <Carousel
            activeIndex={currentCategoryIndex}
            onSelect={(selectedIndex) => {
              setCurrentCategoryIndex(selectedIndex);
            }}
            indicators={false}
            controls={false} // ❌ removes arrows
            interval={null} // ❌ disables auto-scroll
            touch={false} // ❌ disables swipe (mobile)
            keyboard={false} // ❌ disables arrow key navigation
            pause={false} // extra safety (no pause/resume behavior)
          >
            {categories.map((category) => {
              return (
                <Carousel.Item key={category.name}>
                  <div className={styles.details}>
                    <div className={styles.left}>
                      <Image
                        src={`/images/cars/${category.name}.png`}
                        alt={category.name}
                        fluid
                      />
                    </div>
                    <div className={styles.right}>
                      <div className={styles.box}>
                        <div>
                          <b>Model</b>
                          <b>Price/km</b>
                        </div>
                        {category.cars.map((car) => {
                          return (
                            <div key={car.name}>
                              <p>{car.name}</p>
                              <p>Rs. {car.pricePerKm}</p>
                            </div>
                          );
                        })}

                        <CustomButton variant={1}>Book Now</CustomButton>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </CustomContainer>
    </section>
  );
};

export default CarsSection;
