import { useGetCameras } from 'hooks/useCameras'

import SidePanel from './SidePanel'
import MapComponent from '../../components/mapComponent'
import styles from './Body.module.scss'

const Body = () => {
  const { data: dataCameras } = useGetCameras()

  return (
    <div className={styles.body}>
      <MapComponent longitude={2.15899} latitude={41.38879} cameras={dataCameras} />
      <div className={styles.sidePanel}>
        <SidePanel />
      </div>
    </div>
  )
}

export default Body
