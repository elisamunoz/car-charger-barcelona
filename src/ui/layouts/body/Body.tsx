import InfoPanel from '../../components/infoPanel'
import styles from './Body.module.scss'

const Body = () => (
  <div className={styles.body}>
    <div className={styles.sidePanel}>
      <InfoPanel>
        <InfoPanel.Item 
          mainTitle='BAMSA Rambla de Catalunya - Endesa'
          title='BAMSA - Rambla de Catalunya, Barcelona, Spain'
          subtitle='Charging points' />
      </InfoPanel>
    </div>
  </div>
);

export default Body;