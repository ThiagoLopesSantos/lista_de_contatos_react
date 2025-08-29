import styled from 'styled-components'
import themes from '../../styles/themes'
import { flexCenter } from '../../styles/flexCenter'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: ${themes.cinzaClaro};
  box-shadow: 0 4px 4px ${themes.pretoOpaco};
  border-radius: 0 0 8px 8px;
  margin-bottom: 4px;
  padding: 5px 0;
`
export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardTag = styled.span`
  ${flexCenter}
  max-width: 100px;
  margin-bottom: 8px;
  text-transform: capitalize;
  border-top: 1px solid ${themes.preto};
  border-right: 1px solid ${themes.preto};
  border-bottom: 1px solid ${themes.preto};
  color: ${themes.branco};
  background-color: ${themes.roxo};
  border-radius: 0 8px 8px 0;
`
export const CardBtns = styled.div`
  display: flex;
  margin-right: 32px;
  font-size: ${variaveis.small};
  gap: 20px;
`
export const CardBtnEdt = styled.button`
  ${flexCenter}
  gap: 5px;
  align-items: center;
  padding: 0 4px;
  background-color: ${themes.laranja};
  height: 20px;
  text-align: center;
  border: 1px solid;
  cursor: pointer;
  font-weight: bold;
`
export const CardBtnRmv = styled.button`
  ${flexCenter}
  gap: 5px;
  align-items: center;
  padding: 0 4px;
  background-color: ${themes.vermelho};
  height: 20px;
  text-align: center;
  border: 1px solid;
  cursor: pointer;
  font-weight: bold;
`
export const CardData = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin: 0 32px;
  border: 1px solid ${themes.cinzaEscuro};
  background-color: ${themes.laranjaClaro};
`

export const CardInputs = styled.div`
  ${flexCenter}
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  text-align: start;
  border-bottom: 1px solid ${themes.preto};
`
export const CardDescription = styled.textarea`
  border: none;
  width: 85%;
  display: block;
  background-color: transparent;
  outline: none;
  resize: none;
  font-size: ${variaveis.small};
  padding-top: 18px;

  &:focus {
    border-bottom: 1px solid ${themes.roxo};
  }
`
