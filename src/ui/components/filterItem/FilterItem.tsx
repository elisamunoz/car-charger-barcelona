import ToggleSwitch from '../toggleSwitch';
import styles from './FilterItem.module.scss';

interface Props {
  text: string,
}

const FilterItem = ({
  text,
}: Props) => (
  <div className={styles.filterItem}>
    <div className={styles.text}>{text}</div>
    <div className={styles.toggleIcon}>
      <ToggleSwitch />
      <ToggleSwitch isActive />
    </div>
  </div>
);

export default FilterItem;