import { Coordinates } from './'

export interface Panel {
  type: 'Feature'
  id: string
  geometry: {
    type: 'Point'
    coordinates: Coordinates
  }
  geometry_name: 'geom'
  properties: {
    id_panel: string
    zoom_level: number
  }
}
