import Map, { Marker } from 'react-map-gl'
import { MAP_BOX_TOKEN } from '../../../constants'
import Pin from './PinMarker'
import styles from './MapComponent.module.scss'

interface MarkerProps {
  latitude: number
  longitude: number
}
interface Props {
  latitude: number
  longitude: number
  cameras: any[]
}

const MapComponent = ({ latitude, longitude, cameras = [] }: Props) => {
  console.log(cameras)

  return (
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
      >
        {cameras.map((camera, i) => {
          const coordinates = camera?.geometry?.coordinates

          return (
          <Marker longitude={coordinates[0]} latitude={coordinates[1]} anchor='bottom' key={i}>
            <Pin />
          </Marker>
          )
        })}
      </Map>
    </div>
  )
}

export default MapComponent
