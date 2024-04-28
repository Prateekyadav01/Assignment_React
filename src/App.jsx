
import Home from './components/Home'
import store from './utils/store'
import { Provider } from 'react-redux'
import Yo from './components/Yo'
function App() {


  return (
    <>
      <div>
        <Provider store={store}>
          <Home />
          {/* <Yo/> */}
        </Provider>
      </div>
    </>
  )
}

export default App
