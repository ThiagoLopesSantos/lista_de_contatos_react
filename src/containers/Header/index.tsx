import Categories from '../../components/Categories'
import Interactions from '../../components/Interactions'
import Logo from '../../components/Logo'
import { CtgContainer, HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Interactions />
      <CtgContainer>
        <p>Categoria:</p>
        <Categories fCategory="todos" capition="todos" />
        <Categories fCategory="familia" capition="familia" />
        <Categories fCategory="amigos" capition="amigos" />
        <Categories fCategory="trabalho" capition="trabalho" />
      </CtgContainer>
    </HeaderContainer>
  )
}

export default Header
