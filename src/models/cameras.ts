import { Coordinates } from './'

export interface Camera {
  type: 'Feature'
  id: string
  geometry: {
    type: 'Point'
    coordinates: Coordinates
  }
  geometry_name: 'geom'
  properties: {
    id_camera: number
    zoom_level: number
  }
}
