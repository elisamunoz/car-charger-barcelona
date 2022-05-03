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
  <MainPanelItem
    title={location}
  >
    <h5 className={styles.subtitle}>
      <b>Municipi: </b>{municipi}
    </h5>
    <img src={image} alt={location} className={styles.image}/>
    <h6 className={styles.font}>
      <b>Font: </b>{font}
    </h6>
  </MainPanelItem>
);


// MainPanel.Item = MainPanelItem

export default InfoPanel;