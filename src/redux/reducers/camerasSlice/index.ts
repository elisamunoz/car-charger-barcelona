import { createSlice } from '@reduxjs/toolkit'
import { Coordinates } from '../../../models'
import { CITIES } from './_mockCities'

type CameraID = string

export interface Camera {
  id: CameraID
  coordinates: Coordinates
  city?: string
}
export interface State {
  [key: CameraID]: Camera,
}

const initialState: State = {}

export const slice = createSlice({
  name: 'cameras',
  initialState,
  reducers: {
    add: (state, action) => {
      const camera = action.payload
      const { id } = camera

      state[id] = camera
    },
    addCameras: (state, action) => {
      const cameras = action.payload || []

      cameras.map((camera: Camera) => {
        const { id } = camera

        state[id] = {
          ...camera,
          city: CITIES[Math.floor(Math.random()*CITIES.length)],
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, addCameras } = slice.actions

export default slice.reducer
