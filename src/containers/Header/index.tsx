import { useSelector } from 'react-redux'
import Categories from '../../components/Categories'
import Interactions from '../../components/Interactions'
import Logo from '../../components/Logo'
import { CtgContainer, HeaderContainer, TextFilter } from './styles'
import { RootReducer } from '../../store'

const Header = () => {
  const { filtering } = useSelector((state: RootReducer) => state.filtering)

  return (
    <HeaderContainer>
      <Logo />
      <Interactions />
      <TextFilter>2 contatos marcados como: categoria e {filtering}</TextFilter>
      <CtgContainer>
        <p>Categoria:</p>
        <Categories capition="todas" counter={1} active />
        <Categories capition="familia" counter={2} />
        <Categories capition="amigos" counter={3} />
        <Categories capition="trabalho" counter={4} />
      </CtgContainer>
    </HeaderContainer>
  )
}

export default Header
