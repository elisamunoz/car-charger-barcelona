import Main from './pages'
import 'mapbox-gl/dist/mapbox-gl.css'

// import { useGetPanels } from 'hooks/usePanels'
// import { useGetCameras } from 'hooks/useCameras'
import 'assets/styles/reset.scss'
import './App.css'

const App = () => {
  // const { data: dataPanels } = useGetPanels()
  // const { data: dataCameras } = useGetCameras()

  return (
    <div className='App'>
      <Main />
    </div>
  )
}

export default App
