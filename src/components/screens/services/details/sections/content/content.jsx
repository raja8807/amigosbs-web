import styles from "./content.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import FONTS from "@/styles/fonts";
import { Image, Carousel } from "react-bootstrap";
import {
  CheckCircleFill,
  ArrowRight,
  Lightbulb,
  Palette,
  Bullseye,
  Book,
  Megaphone,
  PersonBadge,
  Calculator,
  Hammer,
  Pen,
  HandIndexThumb,
  Image as ImageIcon,
  FileText,
  Globe,
  Display,
  Truck,
  CalendarCheck,
  Speaker,
  Lamp,
  CupHot,
  GeoAlt,
  Check
} from "react-bootstrap-icons";

const getProcessIcon = (name) => {
  switch (name) {
    case "Event Conceptualization": return <Lightbulb />;
    case "Creative Direction": return <Palette />;
    case "Define Objectives": return <Bullseye />;
    case "Storytelling Strategy": return <Book />;
    case "Social Activations": return <Megaphone />;
    case "Executive Support": return <PersonBadge />;
    case "Budget Management": return <Calculator />;
    case "Custom Builds": return <Hammer />;
    case "Graphic Design": return <Pen />;
    case "Interactive Experiences": return <HandIndexThumb />;
    case "Scenic Design": return <ImageIcon />;
    case "Collateral": return <FileText />;
    case "Environmental": return <Globe />;
    case "Exhibit Displays": return <Display />;
    case "Logistics": return <Truck />;
    case "Planning": return <CalendarCheck />;
    case "Audio Visual": return <Speaker />;
    case "Lighting": return <Lamp />;
    case "Catering": return <CupHot />;
    case "Venue Sourcing": return <GeoAlt />;
    case "Transportation": return <Truck />;
    default: return <CheckCircleFill />;
  }
};

const ServiceContent = ({ data }) => {
  return (
    <section className={styles.ServiceContent}>
      <CustomContainer>
        <div className={styles.wrapper}>
          <div className={styles.left_side} data-aos="fade-right">
            <h2 className={FONTS.font2}>{data.description}</h2>
            <div className={styles.full_text}>
              {data.fullContent.map((para, i) => {
                const trimmed = para.trim();
                if (trimmed.startsWith("<h") || trimmed.startsWith("<div") || trimmed.startsWith("<ul") || trimmed.startsWith("<ol") || trimmed.startsWith("<p")) {
                  return <div key={i} dangerouslySetInnerHTML={{ __html: para }} />;
                }
                return <p key={i} dangerouslySetInnerHTML={{ __html: para }} />;
              })}
            </div>
            {data.servicesList && (
              <div className={styles.services_list}>
                <h3>Our Specialized Services</h3>
                <div className={styles.list_grid}>
                  {data.servicesList.map((service, i) => (
                    <div className={styles.service_card} key={i}>
                      <div className={styles.icon_box}>
                        <Check />
                      </div>
                      <span className={styles.service_name}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {data.processCategories && (
            <div className={styles.process_section}>
              <div className={styles.process_grid}>
                {data.processCategories.map((category, index) => (
                  <div className={styles.process_card} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <h3 className={styles.category_title}>{category.title}</h3>
                    <ul className={styles.category_items}>
                      {category.items.map((item, i) => (
                        <li key={i}>
                          <div className={styles.item_icon}>
                            {getProcessIcon(item)}
                          </div>
                          <span className={styles.item_text}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className={styles.right_side} data-aos="fade-left">
            <div className={styles.features_card}>
              <h3>Key Offerings</h3>
              <ul className={styles.feature_list}>
                {data.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircleFill />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {data.images && data.images.length > 0 ? (
              <div className={styles.carousel_wrapper}>
                <Carousel
                  fade
                  indicators={true}
                  controls={true}
                  interval={3000}
                >
                  {data.images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <Image
                        src={img}
                        alt={`${data.title} ${idx + 1}`}
                        fluid
                        className={styles.content_image}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            ) : (
              data.contentImage && (
                <div className={styles.content_image_wrapper}>
                  <Image
                    src={data.contentImage}
                    alt={data.title}
                    fluid
                    className={styles.content_image}
                  />
                </div>
              )
            )}
          </div>
        </div>


      </CustomContainer>
    </section>
  );
};

export default ServiceContent;
