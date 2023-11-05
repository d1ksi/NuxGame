import styles from "./Business.module.scss";
import Slider from "./slider/Slider";
const Business: React.FC = () => {
  return (
    <section className={styles.businessWrapper} id="elents">
      <h2>
        business and
        <br /> innovative
      </h2>
      <p>
        He encouraged the people he knew to speak honestly. And Jobs speaks
        candidly, sometimes brutally so, about the people he worked with and
        competed against. His friends, foes, and colleagues provide an
        unvarnished view
      </p>
      <Slider />
    </section>
  );
};

export default Business;
