import styles from "./Solution.module.scss";
import SolutionContent from "./solutionContent/SolutionContent";

const Solution: React.FC = () => {
  return (
    <section className={styles.wrapperSolution} id="solution">
      <div className={styles.title}>
        <p>Home / Solution</p>
      </div>
      <SolutionContent />
    </section>
  );
};

export default Solution;
