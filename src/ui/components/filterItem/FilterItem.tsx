import styles from './FilterItem.module.scss';

interface Props {
  text: string,
  toggleIcon: string
}

const FilterItem = ({
  text,
  toggleIcon
}: Props) => (
  <div className={styles.filterItem}>
    <div className={styles.text}>{text}</div>
    <div className={styles.toggleIcon}>
      {toggleIcon}
    </div>
  </div>
);

export default FilterItem;