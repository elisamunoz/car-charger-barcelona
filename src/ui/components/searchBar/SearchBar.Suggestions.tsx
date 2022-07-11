import { FaSearch } from 'react-icons/fa'
import classNames from 'classnames/bind'
import Icon from '../icon'
import styles from './SearchBar.module.scss'

const ItemList = ({ label, icon, id }: any) => (
  <li className={styles.list}>
    <div className={styles.item}>
      <div className={styles.label}>{label}</div>
      <div className={styles.secondaryInfo}>
        <div className={styles.itemIcon}>
          <Icon size={15} icon={icon} />
        </div>
        <div className={styles.itemId}>{id}</div>
      </div>
    </div>
  </li>
)

const cx = classNames.bind(styles)

const Suggestions = ({ show = false, markersList = [] }: any) => {
  return (
    <ul
      className={cx({
        suggestionsPanel: true,
        hasFocus: show,
      })}
    >
      {markersList.map((marker: any) => 
        <ItemList label={marker.city} icon={FaSearch} id={marker.id} key={marker.id} />
      )}
    </ul>
  )
}

export default Suggestions
