import FilterPanelItem from '../filterPanelItem';
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
  <div>
    {mainTitle && <h2 className={styles.mainTitle}>{mainTitle}</h2>}
    {title && <h3 className={styles.title}>{title}</h3>}
    {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
    <FilterPanelItem
      text='Estat del transit'
      toggleIcon='icon'
    />
  </div>
);

export default FilterPanel;