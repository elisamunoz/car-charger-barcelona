import styles from './PanelItem.module.scss';

interface Props {
  children?: string;
}

const PanelItem: any = ({ children }: Props) => <div className={styles.panelItem}>{children}</div>;

export default PanelItem;
