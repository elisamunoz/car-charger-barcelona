import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.title}>
      <div className={styles.icon}>
        <h4>🛻</h4>
      </div>
      <div className={styles.text}>
        <h4>Catalunya Traffic</h4>
      
      </div>
    </div>
    <div className={styles.search}>
      <div className={styles.searchbar}>
        <p>Search bar</p>
      </div>
    </div>
  </header>
);

export default Header;