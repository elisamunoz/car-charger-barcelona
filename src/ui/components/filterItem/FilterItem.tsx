import { FaMouse } from 'react-icons/fa'
import ToggleSwitch from '../toggleSwitch'
import Icon from '../icon'
import styles from './FilterItem.module.scss'

interface Props {
  text: string
  value?: boolean
  onChange?: any
}

const FilterItem = ({
  text,
  value = false,
  onChange = () => null
}: Props) => (
  <div className={styles.filterItem}>
    <div className={styles.icon}>
      <Icon icon={FaMouse} size={25} />
    </div>
    <div className={styles.text}>{text}</div>
    <div className={styles.toggleIcon}>
      <ToggleSwitch isActive={value} onClick={onChange} />
      {/* <ToggleSwitch disabled /> */}
    </div>
  </div>
)

export default FilterItem
