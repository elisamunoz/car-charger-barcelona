import MainPanel from '../../components/mainPanel'
import styles from './Body.module.scss'

const Body = () => (
  <div className={styles.body}>
    <div className={styles.sidePanel}>
      <MainPanel>
        <MainPanel.Item 
          mainTitle='BAMSA Rambla de Catalunya - Endesa'
          title='BAMSA - Rambla de Catalunya, Barcelona, Spain'
          subtitle='Charging points' />
      </MainPanel>
    </div>
  </div>
);

export default Body;