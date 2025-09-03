import styled from 'styled-components'
import themes from '../../styles/themes'
import variaveis from '../../styles/variaveis'
import { flexCenter } from '../../styles/flexCenter'

export const ItrContainer = styled.div`
  ${flexCenter}
  margin-top: 20px;
  max-width: 1024px;
  font-size: ${variaveis.small};
  width: 100%;
`

export const BtnsContainer = styled.div`
  ${flexCenter}
  gap: 20px;

  @media (max-width: 769px) {
    display: block;
  }
`
export const BtnsSubContainer = styled.div`
  ${flexCenter}
  gap: 8px;
  background-color: ${themes.brancoOpaco};
  padding: 8px 16px;
  margin: 32px 0;
  border-color: ${themes.brancoOpaco};
  cursor: pointer;

  @media (max-width: 769px) {
    margin-top: 10px;
  }
`

export const BtnIcon = styled.div`
  ${flexCenter}
  font-weight: bold;
  padding: 4px;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  color: ${themes.branco};
  background-color: ${themes.laranja};
  box-shadow: 0 2px 2px ${themes.preto};
`
export const SrcIcon = styled.i`
  color: ${themes.branco};
`
export const SrcInput = styled.input`
  border-radius: 8px;
  font-weight: bold;
  padding: 4px;
  border: none;

  &::placeholder {
    color: ${themes.cinzaEscuro};
    padding-left: 10px;
  }
`
