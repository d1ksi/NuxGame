import Solution from "./solution/Solution";
import "./Main.module.scss";
import Products from "./products/Products";
import AndSo from "./andSo/AndSo";
import Business from "./business/Business";
import Faq from "./faq/Faq";
const Main: React.FC = () => {
  return (
    <main>
      <Solution />
      <Products />
      <AndSo />
      <Business />
      <Faq />
    </main>
  );
};

export default Main;
