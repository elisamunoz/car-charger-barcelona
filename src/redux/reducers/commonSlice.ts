import { createSlice } from '@reduxjs/toolkit'

export interface State {
  title: string
  lang: 'en' | 'es' | 'cat'
}

const initialState: State = {
  title: 'Catalunya Traffic',
  lang: 'en',
}

export const slice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title += action.payload
    },
    setLanguage: (state, action) => {
      state.lang += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTitle, setLanguage } = slice.actions

export default slice.reducer
