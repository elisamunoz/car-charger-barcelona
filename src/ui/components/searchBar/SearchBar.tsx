import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { getAllMarkers } from 'redux/selectors'
import Icon from '../icon'
import styles from './SearchBar.module.scss'
import useQuerFilterMarkers from 'hooks/useQuerFilterMarkers'
import Suggestions from './SearchBar.Suggestions'

// const handleKeyPress = (e: any) => {
//   switch (e.key) {
//     case 'ArrowUp':
//       console.log('up')
//       break
//     case 'ArrowDown':
//       console.log('down')
//       break
//     case 'Enter':
//       console.log('Enter')
//       break
//   }
// }

const cx = classNames.bind(styles)

const ToggleSwitch = () => {
  const [value, setValue] = useState('')
  const [hasFocus, setHasFocus] = useState(false)
  const [selected, setSelected] = useState(0)

  const markers = useSelector(getAllMarkers)
  const markersList = useQuerFilterMarkers(markers, value)
  const markersListLength = markersList.length
  const showSuggestions = !!markersListLength && hasFocus

  const handleKeyPress = (e: any) => {
    switch (e.key) {
      case 'ArrowUp':
        if (selected > 0) {
          setSelected(selected - 1)
        }
        break
      case 'ArrowDown':
        if (selected === markersListLength - 1) {
          return
        } else {
          setSelected(selected + 1)
        }
        break
      case 'Enter':
        console.log('Enter')
        break
    }
  }

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
          onKeyDown={handleKeyPress}
          placeholder='Busca aquí'
        />
        <Suggestions markersList={markersList} show={showSuggestions} selectedItem={selected} />
      </div>
      <div className={styles.icon}>
        <Icon size={20} icon={FaSearch} />
      </div>
    </div>
  )
}

export default ToggleSwitch
