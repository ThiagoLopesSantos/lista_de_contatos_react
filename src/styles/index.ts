import styled, { createGlobalStyle } from 'styled-components'
import { flexCenter } from './flexCenter'
import themes from './themes'

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
`

export const CtgContainer = styled.div`
  ${flexCenter}
  margin-top: 20px;
  padding: 8px;
  width: 100%;
  gap: 20px;
  color: ${themes.branco};
  font-weight: bold;

  @media (max-width: 769px) {
    display: block;
  }
`
export const Link = styled.span`
  color: ${themes.branco};
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
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
`
export const BtnSave = styled(CardBtn)`
  background-color: ${themes.verde};
`
export const BtnCancelRemove = styled(CardBtn)`
  background-color: ${themes.vermelho};
`
export default EstiloGlobal
