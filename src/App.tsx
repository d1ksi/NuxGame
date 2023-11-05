import Header from "./component/header/Header";
import styles from "./App.module.scss";
import Main from "./component/main/Main";
import FooterBlock from "./component/footer/FooterBlock";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <FooterBlock />
    </div>
  );
}

export default App;
