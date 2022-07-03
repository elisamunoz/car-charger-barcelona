import commonReducer from './commonSlice'
import mapReducer from './mapSlice'

const rootReducer = {
  common: commonReducer,
  map: mapReducer,
}

export default rootReducer
