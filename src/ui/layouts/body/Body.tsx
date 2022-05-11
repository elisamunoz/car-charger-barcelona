import SidePanel from "./SidePanel";
import MapComponent from "../../components/mapComponent";
import styles from "./Body.module.scss";

const Body = () => (
  <div className={styles.body}>
    <div className={styles.sidePanel}>
      <SidePanel />
    </div>
    <MapComponent />
  </div>
);

export default Body;
