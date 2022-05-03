import styles from './MainPanelItem.module.scss'

interface Props {
  mainTitle?: string,
  title?: string,
  subtitle?: string
}

const MainPanelItem: any = ({
  mainTitle,
  title,
  subtitle
}: Props) => (
  <div className={styles.mainPanelItem}>
    <h2>{mainTitle}</h2>
    <h3>{title}</h3>
    <h4>{subtitle}</h4>
  </div>
);

export default MainPanelItem;