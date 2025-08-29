import Header from './containers/Header'
import ContactList from './containers/ContactList'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <ContactList />
      </Container>
    </>
  )
}

export default App
