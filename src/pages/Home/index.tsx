import ContactList from '../../containers/ContactList'
import Header from '../../containers/Header'

const Home = () => (
  <>
    <Header showFilters={true} />
    <ContactList />
  </>
)

export default Home
