import { HomeIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import Categories from '../../components/Categories'
import Interactions from '../../components/Interactions'
import { Link } from '../../styles/index'
import Logo from '../../components/Logo'
import { CtgContainer, HeaderContainer } from '../../styles'
import { LinkCbBtn } from '../../styles/index'
import { BtnIcon } from '../../components/Interactions/styles'

type Props = {
  showFilters: boolean
}

const Header = ({ showFilters }: Props) => {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Logo />
      {showFilters ? (
        <>
          <Interactions />
          <CtgContainer>
            <p>Categoria:</p>
            <Categories fCategory="todos" capition="todos" />
            <Categories fCategory="familia" capition="familia" />
            <Categories fCategory="amigos" capition="amigos" />
            <Categories fCategory="trabalho" capition="trabalho" />
          </CtgContainer>
        </>
      ) : (
        <>
          <LinkCbBtn onClick={() => navigate('/')}>
            <Link>Voltar para Home</Link>
            <BtnIcon>
              <HomeIcon />
            </BtnIcon>
          </LinkCbBtn>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header
