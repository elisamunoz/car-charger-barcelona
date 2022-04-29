import InfoPanel from '../../components/InfoPanel'

import styles from './Body.module.scss'

const Body = () => (
  <div className={styles.body}>
    <div className={styles.content}>
      <InfoPanel />        
    </div>
  </div>
);

export default Body;