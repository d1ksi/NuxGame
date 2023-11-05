import { useState, useEffect, useRef } from "react";
import styles from "./Languages.module.scss";
import { BiSolidDownArrow } from "react-icons/bi";

interface lang {
  language: string;
}

const languages: lang[] = [
  { language: "EN" },
  { language: "UA" },
  { language: "RU" },
];

const Languages: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageClick = (index: number) => {
    setSelectedIndex(index);
    setIsMenuOpen(false);
  };
  return (
    <>
      <div ref={wrapperRef} className={styles.customWrapper}>
        <div
          className={`${styles.langSelection} ${
            isMenuOpen ? styles.active : ""
          }`}
          onClick={handleMenuToggle}
        >
          <span>
            {languages[selectedIndex].language}
            <BiSolidDownArrow
              className={`${styles.arr} ${isMenuOpen ? styles.active : ""}`}
            />
          </span>
        </div>
        {isMenuOpen && (
          <div
            className={`${styles.languageMenu} ${
              isMenuOpen ? styles.active : ""
            }`}
          >
            {languages.map((lang, index) => (
              <button key={index} onClick={() => handleLanguageClick(index)}>
                <p className={styles.allLanguage}>{lang.language}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Languages;
