import { useState } from 'react'
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
          onChange={(e) => { setValue(e.target.value)}}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          className={cx({
            input: true,
            hasFocus,
          })}
        />
        <ul className={cx({
          suggestionsPanel: true,
          hasFocus,
        })}>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>
      </div>
    </div>
  )
}

export default ToggleSwitch
