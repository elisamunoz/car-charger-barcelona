import MainPanelItem from '../mainPanelItem'
import styles from './InfoPanel.module.scss'

interface Props {
  location?: string,
  municipi?: string,
  font?: string,
  image?: string,
}

const InfoPanel = ({
  location,
  municipi,
  font,
  image,
}: Props) => (
  <MainPanelItem>
    <h2 className={styles.title}>{location}</h2>
    <h3 className={styles.subtitle}>
      <b className={styles.bold}>Municipi: </b>{municipi}
    </h3>
    <img src={image} alt={location} className={styles.image}/>
    <h6 className={styles.font}>
      <b className={styles.bold}>Font: </b>{font}
    </h6>
  </MainPanelItem>
);


// MainPanel.Item = MainPanelItem

export default InfoPanel;