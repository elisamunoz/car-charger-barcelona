import SidePanel from './SidePanel';
import MapComponent from '../../components/mapComponent';
import styles from './Body.module.scss';

const Body = () => (
  <div className={styles.body}>
    <MapComponent longitude={2.1700471} latitude={41.3870154} />
    <div className={styles.sidePanel}>
      <SidePanel />
    </div>
  </div>
);

export default Body;
