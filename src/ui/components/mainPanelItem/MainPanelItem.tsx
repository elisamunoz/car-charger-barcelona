import styles from './MainPanelItem.module.scss'

interface Props {
  mainTitle?: string,
  title?: string,
  subtitle?: string,
  children?: string,
}

const MainPanelItem: any = ({
  mainTitle,
  title,
  subtitle,
  children
}: Props) => (
  <div className={styles.mainPanelItem}>
    <h2>{mainTitle}</h2>
    <h3>{title}</h3>
    <h4>{subtitle}</h4>
    {children}
  </div>
);

export default MainPanelItem;