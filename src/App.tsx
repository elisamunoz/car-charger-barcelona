import Main from './pages'

import { useGetPanels } from './hooks/usePanels'
import { useGetCameras } from './hooks/useCameras'
import './assets/styles/reset.scss'
import './App.css'

const App = () => {
  const { data: dataPanels } = useGetPanels()
  const { data: dataCameras } = useGetCameras()

  console.log({ dataPanels })
  console.log({ dataCameras })
  return (
    <div className='App'>
      <Main />
    </div>
  )
}

export default App
