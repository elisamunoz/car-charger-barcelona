import SidePanel from './SidePanel';
import MapComponent from '../../components/mapComponent';
import styles from './Body.module.scss';

const Body = () => (
  <div className={styles.body}>
    <MapComponent />
    <div className={styles.sidePanel}>
      <SidePanel />
    </div>
  </div>
);

export default Body;
