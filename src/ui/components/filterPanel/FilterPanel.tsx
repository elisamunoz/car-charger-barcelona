import MainPanelItem from '../mainPanelItem';
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
  <MainPanelItem>
    <h2 className={styles.mainTitle}>{mainTitle}</h2>
    <h3 className={styles.title}>{title}</h3>
    <h4 className={styles.subtitle}>{subtitle}</h4>
  </MainPanelItem>
);

export default FilterPanel;