import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./page_banner.module.scss";
import Link from "next/link";
import { ChevronRight, HouseFill } from "react-bootstrap-icons";
import FONTS from "@/styles/fonts";

const PageBanner = ({ title, image, videoSrc,bogPos="center" }) => {
    return <section className={styles.PageBanner}
        style={{
            backgroundImage: videoSrc ? 'none' : `url('${image}')`,
            backgroundPosition : bogPos
        }}
    >
       
        <div className={styles.overlay} />

        <CustomContainer>
            <div className={styles.cont}>
                <div className={styles.crumbs} data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <Link href="/"><HouseFill /> Home</Link>
                    <span><ChevronRight /></span>
                    <span>{title}</span>
                </div>
                <h1 data-aos="fade-up" className={FONTS.font2}>{title}</h1>
            </div>
        </CustomContainer>


    </section>
}

export default PageBanner;