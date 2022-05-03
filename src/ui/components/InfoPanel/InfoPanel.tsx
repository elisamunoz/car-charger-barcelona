import InfoPanelItem from '../infoPanelItem'
import styles from './InfoPanel.module.scss'

interface Props {
  children?: any
}

const InfoPanel = ({ children }: Props) => (
  <div className={styles.infoPanel}>
    {children}
  </div>
);


InfoPanel.Item = InfoPanelItem

export default InfoPanel;