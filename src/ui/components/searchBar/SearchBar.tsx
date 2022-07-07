import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Icon from '../icon'
import styles from './SearchBar.module.scss'
import classNames from 'classnames/bind'

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
          placeholder='Busca aquí'
        />
        <ul
          className={cx({
            suggestionsPanel: true,
            hasFocus,
          })}
        >
          <li className={styles.list}>Option 1</li>
          <li className={styles.list}>Option 2</li>
          <li className={styles.list}>Option 3</li>
          <li className={styles.list}>Option 4</li>
        </ul>
      </div>
      <div className={styles.icon}>
        <Icon size={22} icon={FaSearch} />
      </div>
    </div>
  )
}

export default ToggleSwitch
