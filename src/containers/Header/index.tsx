import Categories from '../../components/Categotegories'
import Interactions from '../../components/Interactions'
import Logo from '../../components/Logo'
import { CtgContainer, HeaderContainer } from './styles'

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Interactions />
    <CtgContainer>
      <p>Categoria:</p>
      <Categories capition="todas" counter={1} active />
      <Categories capition="familia" counter={2} />
      <Categories capition="amigos" counter={3} />
      <Categories capition="trabalho" counter={4} />
    </CtgContainer>
  </HeaderContainer>
)

export default Header
