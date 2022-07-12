import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { getAllMarkers } from 'redux/selectors'
import Icon from '../icon'
import styles from './SearchBar.module.scss'
import useQuerFilterMarkers from 'hooks/useQuerFilterMarkers'
import Suggestions from './SearchBar.Suggestions'

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
          onKeyPress={handleEnterKeyPress}
          onKeyDown={handleKeyPress}
          placeholder='Busca aquí'
        />
        <Suggestions
          markersList={markersList}
          show={showSuggestions}
          selectedItem={1}
        />
      </div>
      <div className={styles.icon}>
        <Icon size={20} icon={FaSearch} />
      </div>
    </div>
  )
}

export default ToggleSwitch
