import MainPanelItem from '../mainPanelItem'
import styles from './MainPanel.module.scss'

interface Props {
  children?: any
}

const MainPanel = ({ children }: Props) => (
  <div className={styles.mainPanel}>
    {children}
  </div>
);


MainPanel.Item = MainPanelItem

export default MainPanel;