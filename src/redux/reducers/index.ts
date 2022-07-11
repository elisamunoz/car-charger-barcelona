import commonReducer from './commonSlice'
import mapReducer from './mapSlice'
import camerasReducer from './camerasSlice'
import filtersReducer from './filtersSlice'

const rootReducer = {
  common: commonReducer,
  map: mapReducer,
  cameras: camerasReducer,
  filters: filtersReducer,
}

export default rootReducer
