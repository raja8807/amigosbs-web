import { useEffect, useState } from "react";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./Header.module.scss";

import Link from "next/link";
import { BellFill, ChevronDown, ChevronRight, EnvelopeAt, EnvelopeAtFill, TelephoneFill } from "react-bootstrap-icons";
import RightMenu from "./menu_button/menu_button";
import { PAGES } from "@/constants/constants";
import Logo from "@/components/common/logo/logo";
import FONTS from "@/styles/fonts";
import { CONTACT_DETAILS } from "@/constants/conatct";

const DropDownItem = ({ item, setParentDropdown }) => {
  const [showSubDropDown, setShowSubDropDown] = useState(false);

  if (item.dropdown) {
    return (
      <div
        className={styles.subDropdown}
        onMouseEnter={() => {
          setShowSubDropDown(true);
        }}
        onMouseLeave={() => {
          setShowSubDropDown(false);
        }}
      >
        <p href={item.href || "#"}>
          {item.title}
          <ChevronRight />
        </p>
        {showSubDropDown && (
          <div className={styles.subDropdownWrap}>
            <div className={`${styles.subDropdown}`}>
              {item.dropdown.map((dd) => {
                return (
                  <DropDownItem
                    item={dd}
                    key={dd.title}
                    setParentDropdown={setParentDropdown}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      onClick={() => {

        setParentDropdown(false);
      }}
    >
      {item.title}
    </Link>
  );
};

const NavItem = ({ item }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  if (item.dropdown) {
    return (
      <li
        onMouseEnter={() => {
          setShowDropDown(true);
        }}
        onMouseLeave={() => {
          setShowDropDown(false);
        }}
      >
        <Link href={item.href || "#"}>
          {item.title}
          &nbsp;
          <ChevronDown />
        </Link>
        {showDropDown && (
          <div className={styles.dropdownWrap}>
            <div className={`${styles.dropdown}`}>
              {item.dropdown.map((dd) => {
                return (
                  <DropDownItem
                    item={dd}
                    key={dd.title}
                    setParentDropdown={setShowDropDown}
                  />
                );
              })}
            </div>
          </div>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link href={item.href || "#"}>{item.title}</Link>
    </li>
  );
};

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      // if (window.scrollY < 100) {

      //   setShowHeader(true)
      // } else {
      //   if (window.scrollY > lastScrollY) {
      //     // scrolling down
      //     setShowHeader(false);
      //   } else {
      //     // scrolling up
      //     setShowHeader(true);
      //   }
      // }

      // setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.Header} ${showHeader ? styles.show : styles.hide}
      ${isScrolled ? styles.scrolled : ''}
      ${FONTS.font2}
      `}
    >
      <div className={styles.topHead}>
        <CustomContainer>
          <div
            className={styles.topWrap}
          >

            <p><BellFill /> Get 50% Discount for Amigos&apos; New Member</p>
            <div>
              <p><TelephoneFill /> Call us {CONTACT_DETAILS.phone1.text}</p>
              <p><EnvelopeAtFill /> Message us {CONTACT_DETAILS.emails[0]}</p>
            </div>
          </div>
        </CustomContainer>
      </div>
      <CustomContainer>
        <div className={styles.wrap}>
          <Logo width={isScrolled ? 110 : 110} />
          <div className={styles.left}>
            <nav className={styles.navLg}>
              <ul>
                {PAGES.map((page) => {
                  return <NavItem key={page.title} item={page} />;
                })}
              </ul>
            </nav>
          </div>

          <RightMenu pages={PAGES} />
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
