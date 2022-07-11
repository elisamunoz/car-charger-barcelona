import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { getAllMarkers } from 'redux/selectors'
import Icon from '../icon'
import styles from './SearchBar.module.scss'
import useQuerFilterMarkers from 'hooks/useQuerFilterMarkers'
import Suggestions from './SearchBar.Suggestions'

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

const ToggleSwitch = () => {
  const [value, setValue] = useState('')
  const [hasFocus, setHasFocus] = useState(false)

  const markers = useSelector(getAllMarkers)
  const markersList = useQuerFilterMarkers(markers, value)
  const showSuggestions = !!markersList.length && hasFocus

  return (
    <div className={cx({ root: true, hasFocus })}>
      <div className={styles.wrapper}>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          className={cx({
            input: true,
            hasFocus,
          })}
          placeholder='Busca aquí'
        />
        <Suggestions markersList={markersList} show={showSuggestions} />
        {/* <ul
          className={cx({
            suggestionsPanel: true,
            hasFocus,
          })}
        >
          <ItemList label='Option 1' icon={FaSearch} id='12345' />
          <ItemList label='Option 2' icon={FaSearch} id='12346' />
          <ItemList label='Option 3' icon={FaSearch} id='12347' />
          <ItemList label='Option 4' icon={FaSearch} id='12348' />
        </ul> */}
      </div>
      <div className={styles.icon}>
        <Icon size={20} icon={FaSearch} />
      </div>
    </div>
  )
}

export default ToggleSwitch
