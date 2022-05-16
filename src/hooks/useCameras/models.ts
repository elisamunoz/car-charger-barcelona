export interface APIResponse {
  type: 'FeatureCollection'
  features: Camera[]
  crs: {
    type: string
    properties: {
      code: string
    }
  }
  bbox: number[]
}

export interface Camera {
  type: 'Feature'
  id: string
  geometry: {
    type: 'Point'
    coordinates: number[]
  }
  geometry_name: 'geom'
  properties: {
    id_camera: number
    zoom_level: number
  }
}
