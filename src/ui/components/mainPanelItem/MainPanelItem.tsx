import styles from './MainPanelItem.module.scss'

interface Props {
  children?: string,
}

const MainPanelItem: any = ({
  children
}: Props) => (
  <div className={styles.mainPanelItem}>
    {children}
  </div>
);

export default MainPanelItem;