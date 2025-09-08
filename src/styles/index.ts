import styled, { createGlobalStyle } from 'styled-components'
import { flexCenter } from './flexCenter'
import themes from './themes'
import { device } from './breakpoints'
import variaveis from './variaveis'

type CtgContainerProps = {
  isMenuOpen: boolean
}
const EstiloGlobal = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Source Code Pro", sans-serif;
      list-style: none;
    }
`

export const Container = styled.div`
  ${flexCenter}
  flex-direction: column;
`
export const HeaderContainer = styled.header`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  background-color: ${themes.azul};
  position: relative;
`

export const CtgContainer = styled.div<CtgContainerProps>`
  ${flexCenter}
  margin-top: 20px;
  padding: 8px;
  width: 100%;
  gap: 20px;
  color: ${themes.branco};
  font-weight: bold;

  ${device.mobile} {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    position: absolute;
    top: 20%;
    left: 0;
    height: 35vh;
    background-color: ${themes.azul};
    padding: 20px 0;
    width: 100%;
    transform: ${(props) =>
      props.isMenuOpen ? 'translateY(0)' : 'translateY(-130%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 100;
  }
`
export const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${themes.branco};
  font-size: ${variaveis.medium};
  cursor: pointer;
  padding: 10px;
  display: none;

  ${device.mobile} {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`
export const Link = styled.span`
  color: ${themes.branco};
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  padding: 0 45px;
  margin: 0 auto;
`
export const LinkCbBtn = styled.button`
  ${flexCenter}
  gap: 8px;
  background-color: ${themes.brancoOpaco};
  padding: 8px 16px;
  margin: 32px 0;
  border-color: ${themes.brancoOpaco};
  cursor: pointer;

  ${device.mobile} {
    margin: 10px 0;
    padding: 6px 12px;
  }
`

export const CardBtn = styled.button`
  ${flexCenter}
  gap: 5px;
  padding: 0 4px;
  height: 20px;
  border: 1px solid;
  cursor: pointer;
  font-weight: bold;
  text-transform: capitalize;
  background-color: ${themes.laranja};
  color: ${themes.preto};

  &:hover {
    background-color: ${themes.cinzaEscuro};
    color: ${themes.branco};
  }

  ${device.mobile} {
    height: auto;
    padding: 5px;
    font-size: 12px;
  }
`
export const BtnSave = styled(CardBtn)`
  background-color: ${themes.verde};
`
export const BtnCancelRemove = styled(CardBtn)`
  background-color: ${themes.vermelho};
`

export const HeaderMobileContainer = styled.div`
  ${flexCenter}
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;

  ${device.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${device.tablet} {
    display: flex;
  }
`
export default EstiloGlobal
