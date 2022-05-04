import FilterItem from '../filterItem';
import styles from './FilterPanel.module.scss';

interface Props {
  mainTitle?: string,
  title?: string,
  subtitle?: string,
}

const FilterPanel = ({
  mainTitle,
  title,
  subtitle,
}: Props) => (
  <div className={styles.filterPanel}>
    {mainTitle && <h2 className={styles.mainTitle}>{mainTitle}</h2>}
    {title && <h3 className={styles.title}>{title}</h3>}
    {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
    <FilterItem
      text='Estat del transit'
    />
  </div>
);

export default FilterPanel;