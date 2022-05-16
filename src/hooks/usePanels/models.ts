export interface APIResponse {
  type: 'FeatureCollection'
  features: Panel[]
  crs: {
    type: string
    properties: {
      code: string
    }
  }
  bbox: number[]
}

export interface Panel {
  type: 'Feature'
  id: string
  geometry: {
    type: 'Point'
    coordinates: number[]
  }
  geometry_name: 'geom'
  properties: {
    id_panel: string
    zoom_level: number
  }
}
