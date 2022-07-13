import { FaSearch } from 'react-icons/fa'
import classNames from 'classnames/bind'
import Icon from '../icon'
import styles from './SearchBar.module.scss'

const cx = classNames.bind(styles)
interface ItemListProps {
  label: string
  icon: any
  id: string | number
  isSelected?: boolean
}

const ItemList = ({ label, icon, id, isSelected = false }: ItemListProps) => (
  <li
    className={cx({
      list: true,
      isSelected,
    })}
  >
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

interface Props {
  show: boolean
  markersList?: any[]
  selectedItem?: number
}

const Suggestions = ({ show = false, markersList = [], selectedItem = undefined }: Props) => (
  <ul
    className={cx({
      suggestionsPanel: true,
      hasFocus: show,
    })}
  >
    {markersList.map((marker: any, index: number) => (
      <ItemList
        key={marker.id}
        id={marker.id}
        label={marker.city}
        icon={FaSearch}
        isSelected={index === selectedItem}
      />
    ))}
  </ul>
)

export default Suggestions
