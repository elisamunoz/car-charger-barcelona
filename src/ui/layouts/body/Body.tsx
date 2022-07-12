import { useGetCameras } from 'hooks/useCameras'
import { useGetPanels } from 'hooks/usePanels'

import SidePanel from './SidePanel'
import MapComponent from '../../components/mapComponent'
import styles from './Body.module.scss'

const Body = () => {
  const { data: dataCameras } = useGetCameras()
  const { data: dataPanels } = useGetPanels()

  return (
    <div className={styles.body}>
      <MapComponent
        longitude={2.15899}
        latitude={41.38879}
        cameras={dataCameras}
        panels={dataPanels}
      />
      <div className={styles.sidePanel}>
        <SidePanel />
      </div>
    </div>
  )
}

export default Body
