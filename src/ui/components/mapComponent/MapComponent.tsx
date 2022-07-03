import Map from 'react-map-gl'
import { MAP_BOX_TOKEN } from '../../../constants'
import styles from './MapComponent.module.scss'

interface Props {
  latitude: number
  longitude: number
}

const MapComponent = ({ latitude, longitude }: Props) => (
  <div className={styles.map}>
    <Map
      initialViewState={{
        longitude,
        latitude,
        zoom: 8,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxAccessToken={MAP_BOX_TOKEN}
    />
  </div>
)

export default MapComponent
