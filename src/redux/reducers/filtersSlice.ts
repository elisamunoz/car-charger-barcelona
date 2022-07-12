import { createSlice } from '@reduxjs/toolkit'

export interface State {
  cameras: boolean
  panels: boolean
  constructionWorks: boolean
  retentions: boolean
}

const initialState: State = {
  cameras: true,
  panels: true,
  constructionWorks: true,
  retentions: true,
}

export const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleCameras: (state) => {
      state.cameras = !state.cameras
    },
    togglePanels: (state) => {
      state.panels = !state.panels
    },
    toggleConstructionWorks: (state) => {
      state.constructionWorks = !state.constructionWorks
    },
    toggleRetentions: (state) => {
      state.retentions = !state.retentions
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  toggleCameras,
  togglePanels,
  toggleConstructionWorks,
  toggleRetentions
} = slice.actions

export default slice.reducer
