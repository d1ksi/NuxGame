import { useEffect, useState } from "react";
import styles from "./Slider.module.scss";

const url1 = "/slider/logo1.png";
const url2 = "/slider/logo2.png";
const url3 = "/slider/logo3.png";
const url4 = "/slider/logo4.png";

interface Slide {
  logo: string;
  text: string;
  name: string;
  position: string;
}

const slider: Slide[] = [
  {
    logo: url1,
    text:
      "He encouraged the people he knew to speak honestly. AndJobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view ofthepassions, perfectionism, obses sions, artistry.",
    name: "Alex Uritu",
    position: "ex-CFO at Foxconn",
  },
  {
    logo: url2,
    text:
      "He encouraged the people he knew to speak honestly. AndJobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view ofthepassions, perfectionism, obses sions, artistry.",
    name: "Alex Uritu",
    position: "ex-CFO at Foxconn",
  },
  {
    logo: url3,
    text:
      "He encouraged the people he knew to speak honestly. AndJobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view ofthepassions, perfectionism, obses sions, artistry.",
    name: "Alex Uritu",
    position: "ex-CFO at Foxconn",
  },
  {
    logo: url4,
    text:
      "He encouraged the people he knew to speak honestly. AndJobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view ofthepassions, perfectionism, obses sions, artistry.",
    name: "Alex Uritu",
    position: "ex-CFO at Foxconn",
  },
];

const Slider: React.FC = () => {
  const [sliderData, setSliderData] = useState([...slider]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderData((prevSliderData) => [
        ...prevSliderData,
        { ...slider[currentIndex] },
      ]);

      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 11500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className={styles.sliderWrapper}>
      <div className={styles.slideTrack}>
        {sliderData.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <img src={slide.logo} alt="Logo" />
            <p className={styles.text}>{slide.text}</p>
            <p className={styles.name}>{slide.name}</p>
            <p className={styles.position}>{slide.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
