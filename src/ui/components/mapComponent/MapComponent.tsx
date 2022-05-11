import Map from 'react-map-gl';
import { MAP_BOX_TOKEN } from '../../../constants';
import styles from './MapComponent.module.scss';

const MapComponent = () => (
  <div className={styles.map}>
    <Map
      initialViewState={{
        longitude: 2.15899,
        latitude: 41.38879,
        zoom: 8,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxAccessToken={MAP_BOX_TOKEN}
    />
  </div>
);

export default MapComponent;
