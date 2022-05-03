import InfoPanel from '../../components/infoPanel';
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
        <InfoPanel
          location="CG1 / PK 9+791 (La Portalada) / 860 metres(Km 9)"
          municipi="Andorra"
          font="Centre Nacional de Trànsit d'Andorra"
          image="https://www.meme-arsenal.com/memes/c2c147dcd0a91c561966c8342dd7586a.jpg"
        />
      </MainPanel>
    </div>
  </div>
);

export default Body;