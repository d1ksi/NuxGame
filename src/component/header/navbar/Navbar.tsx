import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import Social from "../social/Social";
import Languages from "../languages/Languages";
const links = [
  {
    id: 1,
    title: "Solutions",
    url: "#solution",
    subMenu: [
      { name: "Lorem1" },
      { name: "Lorem lorem lorem1" },
      { name: "Lorem lorem" },
      { name: "Lorem2" },
    ],
  },
  {
    id: 2,
    title: "Products",
    url: "#products",
    subMenu: [
      { name: "Technology" },
      { name: "Buisness and innovative" },
      { name: "Creativity" },
    ],
  },
  {
    id: 3,
    title: "Partners",
    url: "#partners",
  },
  {
    id: 4,
    title: "Demo",
    url: "#gallery",
  },
  {
    id: 5,
    title: "Events",
    url: "#elents",
    subMenu: [
      { name: "Lorem" },
      { name: "Lorem lorem lorem2" },
      { name: "Lorem lorem" },
      { name: "Lorem3" },
      { name: "Lorem lorem lorem3" },
    ],
  },
  {
    id: 6,
    title: "Careers",
    url: "/careers",
  },
  {
    id: 7,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 8,
    title: "Contact us",
    url: "#contact",
  },
];

const Navbar: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleSubMenu = () => {
    setIsSubMenuActive(!isSubMenuActive);
  };

  useEffect(() => {
    const closeSubMenu = (event: MouseEvent) => {
      const submenu = document.querySelector(`.${styles.listOfTours}`);
      if (submenu && !submenu.contains(event.target as Node)) {
        setIsSubMenuActive(false);
      }
    };
    if (isSubMenuActive) {
      document.addEventListener("click", closeSubMenu);
    } else {
      document.removeEventListener("click", closeSubMenu);
    }
    return () => {
      document.removeEventListener("click", closeSubMenu);
    };
  }, [isSubMenuActive]);

  return (
    <section className={styles.navbar}>
      {isMenuActive ? (
        <AiOutlineMenuFold
          className={`${styles.menuBtn} ${styles.closeBtn} ${styles.active}`}
          onClick={toggleMenu}
        />
      ) : (
        <AiOutlineMenuUnfold
          className={`${styles.menuBtn} ${isMenuActive ? styles.active : ""}`}
          onClick={toggleMenu}
        />
      )}
      <div
        className={`${styles.navigation} ${isMenuActive ? styles.active : ""}`}
      >
        <div className={styles.navigationItems}>
          {links.map((link) => (
            <div className={styles.wrapperMenuLink} key={link.id}>
              <div className={styles.wrapperLink}>
                <a href={link.url} className={styles.menuLink}>
                  {link.title}
                </a>
                {link.subMenu ? (
                  <BiSolidDownArrow
                    onClick={toggleSubMenu}
                    className={styles.arr}
                  />
                ) : null}
              </div>
              {link.subMenu ? (
                <div className={styles.dropDown}>
                  <ul>
                    {link.subMenu.map((i) => (
                      <li key={i.name}>{i.name}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
          <div className={styles.socialAndLanguages}>
            <Social />
            <Languages />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
