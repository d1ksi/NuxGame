import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <section className={styles.logo}>
      <div>
        <p>N</p>
      </div>
      <p className={styles.logoText}>LOGO</p>
    </section>
  );
};

export default Logo;
