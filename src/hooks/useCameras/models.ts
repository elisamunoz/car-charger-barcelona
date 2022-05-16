import { Camera } from 'models/cameras'
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
