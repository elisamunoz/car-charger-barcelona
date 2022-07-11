import { createSelector } from 'reselect'
import type { RootState } from '../store'
import type { State as CommonState } from '../reducers/commonSlice'
import type { State as MapState } from '../reducers/mapSlice'
import { getCameras } from './cameras.selectors'
import { getCamerasFilter } from './filters.selectors'

export const getCommon = (state: RootState): CommonState => state.common || {}
export const getMapDetails = (state: RootState): MapState => state.map || {} 

const getSelectedMarker = createSelector(getMapDetails, (map): string => (
  map.selectedMarker || ''
))

export const getIsTherePrefilledData = (state: RootState) => {
  const map = getMapDetails(state)
  return map.selectedMarker
}

export const getCamerasFiltered = createSelector(
  [getCameras, getCamerasFilter],
  (cameras, filter): any => !filter
    ? []
    : cameras
)


export const getAllMarkers = createSelector(
  [getMapDetails, getCameras],
  (mapDetails, cameras): any[] => {
    let markers: any = []
    markers = [
      ...markers,
      ...cameras, 
    ]

    return markers
})

export const getSelectedMarkerData = createSelector(
  [getSelectedMarker, getAllMarkers],
  (selectedMarker, markers): any => {
    return markers.find(marker => marker.id === selectedMarker)
})
