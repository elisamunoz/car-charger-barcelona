import { FaHome } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import styles from './Icon.module.scss'

interface Props {
  size?: number
  color?: string
  icon?: any
}

const Icon = ({ icon = FaHome, size = 24, color }: Props) => (
  <IconContext.Provider value={{ color, size: `${size}px` }}>
    <div className={styles.icon}>{icon()}</div>
  </IconContext.Provider>
)

export default Icon
