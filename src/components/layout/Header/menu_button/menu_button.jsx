import React, { useState } from "react";
import {
  ChevronDown,
  EnvelopeAtFill,
  GeoAlt,
  GeoAltFill,
  List,
  Telephone,
  TelephoneFill,
} from "react-bootstrap-icons";
import styles from "./menu_button.module.scss";
import { Offcanvas } from "react-bootstrap";

import Link from "next/link";
import { CONTACT_DETAILS } from "@/constants/conatct";
import Logo from "@/components/common/logo/logo";
import FONTS from "@/styles/fonts";
import { PAGES } from "@/constants/constants";

const NavItem = ({ item, setShowDrawer }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  if (item.dropdown) {
    return (
      <div>
        <p
          onClick={() => {
            setShowDropDown((prev) => !prev);
          }}
          className={showDropDown ? styles.activeDropdownParent : ""}
        >
          {item.title}{" "}
          <ChevronDown
            style={{
              transform: showDropDown ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </p>

        {showDropDown && (
          <div className={styles.dropdown}>
            {item.dropdown.map((dd) => {
              return (
                <NavItem
                  key={dd.title}
                  item={dd}
                  setShowDrawer={setShowDrawer}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <Link
        href={item.href || "#"}
        onClick={() => {
          setShowDrawer(false);
        }}
      >
        {item.title}
      </Link>
    </div>
  );
};

const RightMenu = ({ pages }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className={styles.RightMenu}>
      <Link
        href={`tel:+${CONTACT_DETAILS.whatsapp1.number}`}
        className={styles.callBtn}
      >
        <TelephoneFill />
        <span>Make Appoinment</span>
      </Link>

      <div className={styles.MenuButton}>
        <List
          onClick={() => {
            setShowDrawer(true);
          }}
        />

        <Offcanvas
          show={showDrawer}
          onHide={() => {
            setShowDrawer(false);
          }}
          placement="end"
          className={styles.drawer}
        >
          <Offcanvas.Header closeButton className={styles.drawerHeader}>
            <Logo />
          </Offcanvas.Header>

          <Offcanvas.Body className={styles.drawerBody}>
            
            <div>
              <nav className={styles.navSm}>
                <ul>
                  {pages.map((page) => {
                    return (
                      <NavItem
                        key={page.title}
                        item={page}
                        setShowDrawer={setShowDrawer}
                      />
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className={FONTS.font2}>
              <div className={styles.row}>
                <b>Our Services</b>
                {PAGES[1].dropdown.map((ser) => {
                  return (
                    <Link href={"/"} key={ser.title}>
                      <p>{ser.title}</p>
                    </Link>
                  );
                })}
              </div>

              <div className={styles.row}>
                <b>Contact Us</b>
                <p>
                  <GeoAltFill />
                  {CONTACT_DETAILS.address[0]}
                </p>
                <p>{CONTACT_DETAILS.address[1]}</p>
                <p>{CONTACT_DETAILS.address[2]}</p>
                <p>{CONTACT_DETAILS.address[3]}</p>
                <br />
                <p>
                  <TelephoneFill /> {CONTACT_DETAILS.phone1.text}
                </p>
                <br />
                <p>
                  <EnvelopeAtFill /> {CONTACT_DETAILS.emails[0]}
                </p>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default RightMenu;
