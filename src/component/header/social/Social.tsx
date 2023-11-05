import styles from "./Social.module.scss";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

const Social: React.FC = () => {
  return (
    <section className={styles.socialLinks}>
      <a
        href="https://www.instagram.com/nuxgame/"
        className={styles.socialLink}
      >
        <AiFillInstagram className={styles.icon} />
      </a>
      <a href="https://www.facebook.com/nuxgame/" className={styles.socialLink}>
        <BiLogoFacebook className={styles.icon} />
      </a>
      <a href="https://twitter.com/nuxgame_com" className={styles.socialLink}>
        <BiLogoTwitter className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/company/nuxgame/"
        className={styles.socialLink}
      >
        <BiLogoLinkedin className={styles.icon} />
      </a>
    </section>
  );
};

export default Social;
