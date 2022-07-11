import { createSelector } from 'reselect'
import type { RootState } from '../store'
import type { State as FiltersState } from '../reducers/filtersSlice'

const getFilters = (state: RootState): FiltersState => state.filters || {}

export const getCamerasFilter = createSelector(getFilters, (filters): boolean =>
  !!filters.cameras
)
export const getPanelsFilter = createSelector(getFilters, (filters): boolean =>
  !!filters.panels
)
export const getConstructionWorksFilter = createSelector(getFilters, (filters): boolean =>
  !!filters.constructionWorks
)
export const getRetentionsFilter = createSelector(getFilters, (filters): boolean =>
  !!filters.retentions
)
