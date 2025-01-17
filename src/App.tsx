import './App.css'
import { Navbar } from './components'
import { Home } from './pages/Home'
import store from './redux/store'
import { LayoutContainer } from './styled-components'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <LayoutContainer>
          <Home />
        </LayoutContainer>
      </Provider>
    </>
  )
}

export default App
