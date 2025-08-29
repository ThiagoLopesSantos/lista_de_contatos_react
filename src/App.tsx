import { Provider } from 'react-redux'
import Header from './containers/Header'
import ContactList from './containers/ContactList'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Header />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
