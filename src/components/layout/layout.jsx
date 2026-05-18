import React, { useEffect, useState } from "react";
import { CONTACT_DETAILS } from "@/constants/conatct";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import EnquiryModal from "../common/enquiry_modal/enquiry_modal";
import CustomButton from "../ui/custom_button/custom_button";
import styles from "./layout.module.scss";
import { Headphones, Headset, Whatsapp } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const EnquireButton = ({ setShow }) => {
  return (
    <div className={styles.enquireButton}>
      <CustomButton variant={2} onClick={() => setShow(true)}>
        <Headset /> <b>Enquire Now</b>
      </CustomButton>
    </div>
  );
};

import { ChatText, X, SendFill } from "react-bootstrap-icons";

const WhatsappChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
      
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      
    }, 10000);

    return () => {
      clearTimeout(showTimer);
    };
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      const url = `https://wa.me/${CONTACT_DETAILS.whatsapp1.number}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      setIsOpen(false);
      setMessage("");
    }
  };

  return (
    <div className={styles.whatsappChatWidget}>
      {isOpen ? (
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <h4>Amigos Support</h4>
              <p>We typically reply in a few minutes.</p>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
          <div className={styles.chatBody}>
            <div className={styles.chatBubble}>
              Hi there! 👋<br />How can we help you today?
            </div>
          </div>
          <div className={styles.chatFooter}>
            <input
              type="text"
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className={styles.sendBtn} onClick={handleSend} disabled={!message.trim()}>
              <SendFill />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.fabContainer}>
          <div className={`${styles.tooltipBox} ${showTooltip ? styles.show : ""}`}>
            <p className={styles.tooltipTitle}>We're Online!</p>
            <p className={styles.tooltipText}>How may I help you today?</p>
          </div>
          <button className={styles.fabBtn} onClick={() => { setIsOpen(true); setShowTooltip(false); }}>
            <ChatText />
          </button>
        </div>
      )}
    </div>
  );
};

const Layout = ({ children }) => {
  // const [show, setShow] = useState(false);

  // useEffect(() => {

  //   const isEnquiryPopupShown = localStorage.getItem("enquiryPopupShown")

  //   if (!isEnquiryPopupShown) {
  //     const timer = setTimeout(() => {
  //       setShow(true);
  //       localStorage.setItem("enquiryPopupShown", "true");
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [])

  const router = useRouter();
  const noSubheader = router.pathname === "/brochure"




  return (
    <div className={styles.Layout}>
      <Header noSubheader={noSubheader} />
      {children}
      {/* <EnquireButton setShow={setShow} /> */}
      <WhatsappChatWidget />

      <Footer />
      {/* <EnquiryModal show={show} setShow={setShow} /> */}
    </div>
  );
};

export default Layout;
