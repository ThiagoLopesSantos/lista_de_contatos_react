import styled from 'styled-components'
import themes from '../../styles/themes'
import { flexCenter } from '../../styles/flexCenter'

export const HeaderContainer = styled.div`
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
  border-top: 4px solid ${themes.roxo};
  font-weight: bold;

  @media (max-width: 769px) {
    display: block;
  }
`
