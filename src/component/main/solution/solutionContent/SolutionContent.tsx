import styles from "./SolutionContent.module.scss";

const url1 = "./solurionBulbs/solution1.png";
const url2 = "./solurionBulbs/solution2.png";
const url3 = "./solurionBulbs/solution3.png";

const SolutionContent: React.FC = () => {
  return (
    <section className={styles.contentWrapper}>
      <div className={styles.imeges}>
        <img className={styles.img1} src={url1} alt="light1" />
        <img className={styles.img2} src={url2} alt="light2" />
        <img className={styles.img3} src={url3} alt="light3" />
      </div>
      <div className={styles.content}>
        <h1>Solution</h1>
        <p>
          Based on more than forty interviews with Jobs con ducted over two
          years—as well as interviews with more than a hundred familymembers,
          friends,adver saries, competitors, and colleagues—Walter Isaacson has
          written a riveting story
        </p>
        <p className={styles.text}>
          of the roller-coaster life and searingly intense personality of a
          creative entre preneur whose passion for perfection and ferocious
        </p>
        <a href="#">
          <button>
            <p>Get proposal</p>
            <div className={styles.svg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="16"
                viewBox="0 0 51 16"
                fill="none"
              >
                <g clipPath="url(#clip0_4_4572)">
                  <path
                    d="M45 11.1716V4.82843L48.1716 8.00001L45 11.1716Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <path d="M43 8L0 8" stroke="white" strokeWidth="3" />
                </g>
                <defs>
                  <clipPath id="clip0_4_4572">
                    <rect width="51" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
        </a>
      </div>
    </section>
  );
};

export default SolutionContent;
