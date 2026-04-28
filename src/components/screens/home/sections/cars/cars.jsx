import React, { useEffect, useState } from "react";
import styles from "./cars.module.scss";
import SectionHeading from "@/components/common/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Carousel, Image } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";

const CarsSection = () => {
  const categories = [
    {
      name: "Business",
      cars: [
        {
          name: "Marui Swift D Zire",
          type: "Sedan",
          image: "/business/business sedan/maruti swift dezire.png",
        },
        {
          name: "Honda Amaze",
          type: "Sedan",
          image: "/business/business sedan/honda amaze.png",
        },
        {
          name: "Toyota Etios",
          type: "Sedan",
          image: "/business/business sedan/toyota etios.png",
        },
        {
          name: "Hyundai Aura",
          type: "Sedan",
          image: "/business/business sedan/hyundai aura.png",
        },

        {
          name: "Mahendra Marazzo",
          type: "SUV",
          image: "/business/business suv/mahindra morazzo.png",
        },
        {
          name: "KIA Carens",
          type: "SUV",
          image: "/business/business suv/kia carens.png",
        },
        {
          name: "Innova Crysta",
          type: "SUV",
          image: "/business/business suv/toyota innova.png",
        },
        {
          name: "Innova Hycross",
          type: "SUV",
          image: "/business/business suv/innova hycross.png",
        },
      ],
    },
    {
      name: "Premium",
      cars: [
        {
          name: "Toyota Corolla",
          type: "Sedan",
          image: "/premium/sedan/tyotta corrala.png",
        },
        {
          name: "BMW 5 Series",
          type: "Sedan",
          image: "/premium/sedan/bmw 5 series.png",
        },
        {
          name: "Benz E Class",
          type: "Sedan",
          image: "/premium/sedan/benz e class.png",
        },
        { name: "Benz S Class", type: "Sedan", image: "/premium/sedan/benz e clas.png" },
        {
          name: "Benz GLS",
          type: "Sedan",
          image: "/premium/sedan/benz gls.png",
        },
        {
          name: "Toyota Fortuner",
          type: "SUV",
          image: "/premium/suv/toyota fortuner.png",
        },
        {
          name: "Toyota Vellfare",
          type: "SUV",
          image: "/premium/suv/toyota vellfare.png",
        },
        {
          name: "Toyota Cummuter",
          type: "SUV",
          image: "/premium/suv/toyotta commuter.png",
        },
      ],
    },
    {
      name: "Van",
      cars: [
        {
          name: "Tempo Traveller 12 Seater",
          type: "",
          image: "/van/tempo traveller 12 seater.png",
        },
        {
          name: "Tempo Traveller 18 Seater",
          type: "",
          image: "/van/tempo traveller 18 seater.png",
        },
        {
          name: "Urbina 11 Seater",
          type: "",
          image: "/van/urbina 11 seater.png",
        },
        {
          name: "Urbina 17 Seater",
          type: "",
          image: "/van/urbina 18 seater.png",
        },
      ],
    },
    {
      name: "Bus",
      cars: [
        { name: "Ashok Leyland", type: "", image: "/bus/ashok leyland.png" },
        {
          name: "Volvo double axle",
          type: "",
          image: "/bus/volvo double axle.png",
        },
      ],
    },
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [viewedCar, setViewedCar] = useState(null);

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
                  setSelectedType(null);
                  setViewedCar(null);
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
              setSelectedType(null);
              setViewedCar(null);
            }}
            indicators={false}
            controls={false} // ❌ removes arrows
            interval={null} // ❌ disables auto-scroll
            touch={false} // ❌ disables swipe (mobile)
            keyboard={false} // ❌ disables arrow key navigation
            pause={false} // extra safety (no pause/resume behavior)
          >
            {categories.map((category) => {
              const hasType = category.cars.some((c) => c.type);
              const uniqueTypes = hasType
                ? Array.from(
                    new Set(
                      category.cars.filter((c) => c.type).map((c) => c.type),
                    ),
                  )
                : [];

              let currentType = null;
              if (hasType && uniqueTypes.length > 0) {
                currentType = uniqueTypes.includes(selectedType)
                  ? selectedType
                  : uniqueTypes[0];
              }

              const filteredCars =
                hasType && currentType
                  ? category.cars.filter((c) => c.type === currentType)
                  : category.cars;

              return (
                <Carousel.Item key={category.name}>
                  <div className={styles.details}>
                    <div className={styles.left}>
                      <Image
                        src={
                          viewedCar
                            ? `/images/cars/${viewedCar.image}`
                            : `/images/cars/${filteredCars[0].image}`
                        }
                        alt={viewedCar || category.name}
                        fluid
                        onError={(e) => {
                          // Fallback to a default image if category image doesn't exist
                          e.target.src = "/images/cars/Standard.png";
                        }}
                      />
                    </div>
                    <div className={styles.right}>
                      {hasType && uniqueTypes.length > 0 && (
                        <div className={styles.typeTabs}>
                          {uniqueTypes.map((t) => (
                            <button
                              key={t}
                              className={`${styles.typeTab} ${currentType === t ? styles.activeType : ""}`}
                              onClick={() => {
                                
                                setSelectedType(t);
                                
                                // setViewedCar(filteredCars[0]);
                            
                              }}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      )}
                      <div className={styles.box}>
                        <div>
                          <b>Model</b>
                          <b>Action</b>
                        </div>
                        {filteredCars.map((car) => {
                          return (
                            <div key={car.name}>
                              <p>{car.name}</p>
                              <button
                                className={styles.viewBtn}
                                onClick={() => setViewedCar(car)}
                              >
                                View
                              </button>
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
