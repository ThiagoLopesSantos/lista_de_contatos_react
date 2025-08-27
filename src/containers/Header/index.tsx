import Categories from '../../components/Categotegories'
import Interactions from '../../components/Interactions'
import Logo from '../../components/Logo'
import { HeaderContainer } from './styles'

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Interactions />
    <Categories />
  </HeaderContainer>
)

export default Header
