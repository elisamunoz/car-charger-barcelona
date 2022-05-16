import { Panel } from 'models/panels'

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
