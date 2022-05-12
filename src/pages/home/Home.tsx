import Header from "../../ui/layouts/header";
import Body from "../../ui/layouts/body";

import styles from "./Home.module.scss";

const Home = () => (
  <div className={styles.home}>
    <Header />
    <Body />
  </div>
);

export default Home;
