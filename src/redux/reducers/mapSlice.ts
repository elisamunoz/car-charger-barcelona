import { createSlice } from '@reduxjs/toolkit'
import { Coordinates } from '../../models'

export interface State {
  zoom: number
  coordinates: Coordinates
  selectedMarker?: string
}

const initialState: State = {
  zoom: 0,
  coordinates: [2.15899, 41.38879],
  selectedMarker: undefined,
}

export const slice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    zoomIncrement: (state) => {
      state.zoom += 1
    },
    zoomDecrement: (state) => {
      state.zoom -= 1
    },
    zoomSet: (state, action) => {
      state.zoom += action.payload
    },
    markerUnselect: (state) => {
      state.selectedMarker = undefined
    },
    markerSet: (state, action) => {
      state.selectedMarker = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { zoomIncrement, zoomDecrement, zoomSet, markerUnselect, markerSet } = slice.actions

export default slice.reducer
