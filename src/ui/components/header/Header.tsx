import styles from './Header.module.scss'

const Header = () => (
  <div className={styles.wrapperHeader}>
    <div className={styles.header}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <h4>🔋</h4>
        </div>
        <div className={styles.text}>
          <h4>ChargeFinder Barcelona</h4>
        
        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.searchbar}>
          <p>Search bar</p>
        </div>
      </div>
    </div>
  </div>
);

export default Header;