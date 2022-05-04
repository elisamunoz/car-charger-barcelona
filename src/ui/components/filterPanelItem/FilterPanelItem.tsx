import styles from './FilterPanelItem.module.scss';

interface Props {
  text: string,
  toggleIcon: string
}

const FilterPanelItem = ({
  text,
  toggleIcon
}: Props) => (
  <div className={styles.filterPanelItem}>
    <div className={styles.text}>{text}</div>
    <div className={styles.toggleIcon}>
      {toggleIcon}
    </div>
  </div>
);

export default FilterPanelItem;