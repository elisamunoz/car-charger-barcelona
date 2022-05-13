import { useMemo } from 'react';
import Map, { Marker } from 'react-map-gl';
import { MAP_BOX_TOKEN } from '../../../constants';
import Pin from './PinMarker';
// import Icon from '../icon';
// import { MdLocationPin } from 'react-icons/md';
// import pin from '../../../assets/images/pin.png';
import styles from './MapComponent.module.scss';

interface Props {
  latitude: number;
  longitude: number;
}

const MapComponent = ({ latitude, longitude }: Props) => {
  return (
    <div className={styles.map}>
      <Map
        initialViewState={{
          longitude,
          latitude,
          zoom: 8,
        }}
        style={{ width: '100%', height: '100%' }}
        // style={{ width: '500px', height: '500px' }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxAccessToken={MAP_BOX_TOKEN}
      >
        <Marker longitude={longitude} latitude={latitude} anchor='bottom'>
          {/* <Icon icon={MdLocationPin} size={25} />
          <img className={styles.pin} src={pin} /> */}
          <Pin />
        </Marker>
      </Map>
    </div>
  );
};
export default MapComponent;
