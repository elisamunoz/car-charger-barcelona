import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import classNames from 'classnames/bind'
import Icon from '../icon'
import styles from './SearchBar.module.scss'

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

const handleEnterKeyPress = (e: any) => {
  if (e.key === 'Enter') {
    console.log('Enter')
  }
}

const handleKeyPress = (e: any) => {
  if (e.key == 'ArrowUp') {
    console.log('up')
  } else if (e.key == 'ArrowDown') {
    console.log('down')
  } else if (e.key == 'ArrowLeft') {
    console.log('left')
  } else if (e.key == 'ArrowRight') {
    console.log('right')
  }
}

const cx = classNames.bind(styles)

const ToggleSwitch = () => {
  const [value, setValue] = useState('')
  const [hasFocus, setHasFocus] = useState(false)

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
          onKeyPress={handleEnterKeyPress}
          onKeyDown={handleKeyPress}
          placeholder='Busca aquí'
        />
        <ul
          className={cx({
            suggestionsPanel: true,
            hasFocus,
          })}
        >
          <ItemList label='Option 1' icon={FaSearch} id='12345' />
          <ItemList label='Option 2' icon={FaSearch} id='12346' />
          <ItemList label='Option 3' icon={FaSearch} id='12347' isSelected />
          <ItemList label='Option 4' icon={FaSearch} id='12348' />
        </ul>
      </div>
      <div className={styles.icon}>
        <Icon size={20} icon={FaSearch} />
      </div>
    </div>
  )
}

export default ToggleSwitch
