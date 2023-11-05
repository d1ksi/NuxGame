import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Languages from "./languages/Languages";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import Social from "./social/Social";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scroll : ""}`}>
      <div className={styles.upperBlock}>
        <Logo />
        <div className={styles.socialAndLanguages}>
          <Social />
          <Languages />
        </div>
      </div>
      <div className={styles.line}></div>
      <Navbar />
    </header>
  );
};

export default Header;
