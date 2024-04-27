
import Home from './components/Home'
import store from './utils/store'
import { Provider } from 'react-redux'

function App() {


  return (
    <>
      <div>
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    </>
  )
}

export default App
