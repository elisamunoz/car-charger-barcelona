import { createSelector } from 'reselect'
import type { RootState } from '../store'
import type { State as CamerasState, Camera } from '../reducers/camerasSlice'

const getCamerasObj = (state: RootState): CamerasState => state.cameras || {}

export const getCameras = createSelector(getCamerasObj, (cameras): Camera[] =>
  Object.values(cameras || {})
)

export const getCameraByID = (state: RootState, id: string): Camera =>
  getCamerasObj(state)[id] || {}
