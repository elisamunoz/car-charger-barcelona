import SidePanel from './SidePanel'
import styles from './Body.module.scss';

const Body = () => (
  <div className={styles.body}>
    <div className={styles.sidePanel}>
      <SidePanel />
    </div>
  </div>
);

export default Body;