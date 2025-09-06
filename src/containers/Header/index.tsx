import { HomeIcon, Menu } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Categories from '../../components/Categories'
import Interactions from '../../components/Interactions'
import {
  HamburgerButton,
  HeaderMobileContainer,
  Link
} from '../../styles/index'
import Logo from '../../components/Logo'
import { CtgContainer, HeaderContainer } from '../../styles'
import { LinkCbBtn } from '../../styles/index'
import { BtnIcon } from '../../components/Interactions/styles'
import { Category } from '../../utils/enums/Contact'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const showFilters = location.pathname === '/'
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <HeaderContainer>
      <Logo />
      <HeaderMobileContainer>
        {showFilters && (
          <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </HamburgerButton>
        )}
      </HeaderMobileContainer>
      {showFilters ? (
        <>
          <Interactions />
          <CtgContainer isMenuOpen={isMenuOpen}>
            <p>Categoria:</p>
            <Categories
              fCategory={Category.TODOS}
              caption="todos"
              onCategoryClick={closeMenu}
            />
            <Categories
              fCategory={Category.FAMILIA}
              caption="familia"
              onCategoryClick={closeMenu}
            />
            <Categories
              fCategory={Category.AMIGOS}
              caption="amigos"
              onCategoryClick={closeMenu}
            />
            <Categories
              fCategory={Category.TRABALHO}
              caption="trabalho"
              onCategoryClick={closeMenu}
            />
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
