import { useDispatch} from 'react-redux'
// import useSWR from 'swr'
// import { fetcher } from '../useFetch'
import { addCameras } from 'redux/reducers/camerasSlice'

import type { APIResponse } from './models'
import _mockData from './_mockData'

// const url =
//   'https://mct.gencat.cat/sct-gis/wfs?service=WFS&version=1.0.0&request=GetFeature&maxFeatures=2000&outputFormat=json&srsName=EPSG:4326&typeName=cite:mct2_cam_punt_active'

const useGet = () => {
  const dispatch = useDispatch()
  const data: APIResponse = _mockData
  const error = false
  // const { data, error } = useSWR<APIResponse>(url, fetcher)

  const cammerasData = data?.features.map((camera) => {
    return {
      id: camera.id,
      coordinates: camera?.geometry?.coordinates || []
    }
  })

  dispatch(addCameras(cammerasData))

  return {
    data: data?.features ?? [],
    error,
    isLoading: !error && !data,
  }
}

export default useGet
