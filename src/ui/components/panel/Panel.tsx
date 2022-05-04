import PanelItem from '../panelItem'
import styles from './Panel.module.scss'

interface Props {
  children?: any
}

const Panel = ({ children }: Props) => (
  <div className={styles.panel}>
    {children}
  </div>
);


Panel.Item = PanelItem

export default Panel;