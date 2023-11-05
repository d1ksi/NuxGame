import { MenuItem } from "../FooterBlock";
import styles from "./Menu.module.scss";

interface MenuProps {
  title: string;
  menuItems: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ title, menuItems }) => {
  return (
    <section className={styles.menuWrapper}>
      <h3>{title}</h3>
      {menuItems.map((item, index) => (
        <ul key={index}>
          <li>
            <a href={item.href}>{item.title}</a>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default Menu;
