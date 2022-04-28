import Header from '../../ui/components/layouts/header'
import Body from '../../ui/components/layouts/body'

import styles from './Home.module.scss'

const Home = () => (
  <div className={styles.home}>
    <Header />
    <Body />  
  </div>
);

export default Home;