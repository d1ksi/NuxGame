import styles from "./Products.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface Product {
  img: string;
  title: string;
  description: string;
}
const url1 = "./productsIcon/icon1.png";
const url2 = "./productsIcon/icon2.png";
const url3 = "./productsIcon/icon3.png";

const products: Product[] = [
  {
    img: url1,
    title: "Technology",
    description:
      "At a time when America isseekingwaysto sustain itsinnovative edge, Jobsstands asthe ultimate iconof inventiveness and applied imagination. He knewthat the bestwayto create value in the twenty-first century wasto connect creativity with technology.",
  },
  {
    img: url2,
    title: "Business and innovative",
    description:
      "At a time when America isseekingwaysto sustain itsinnovative edge, Jobsstands asthe ultimate iconof inventiveness and applied imagination. He knewthat the bestwayto create value in the twenty-first century wasto connect creativity with technology.",
  },
  {
    img: url3,
    title: "Creativity",
    description:
      "At a time when America isseekingwaysto sustain itsinnovative edge, Jobsstands asthe ultimate iconof inventiveness and applied imagination. He knewthat the bestwayto create value in the twenty-first century wasto connect creativity with technology.",
  },
];
const containers: any = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Products: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section className={styles.productsWpapper} id="products">
      <h2>Products</h2>
      <p>
        Explore all the possibilities with test gaming
        <br /> software.
      </p>
      <div className={styles.productsCards}>
        <motion.div
          className={styles.products}
          variants={containers}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {products.map((item, index) => (
            <motion.div
              className={styles.productCard}
              variants={items}
              key={index}
            >
              <div className={styles.logoAndTitle}>
                <div className={styles.logoWrapper}>
                  <img src={item.img} alt="Card icon" />
                </div>
                <h3>{item.title}</h3>
              </div>
              <p className={styles.description}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
