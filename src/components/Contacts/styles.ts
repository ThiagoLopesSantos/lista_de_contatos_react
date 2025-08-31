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
  height: 20px;
  margin-bottom: 8px;
  justify-content: space-between;
  text-transform: capitalize;
`
export const CardTag = styled.span`
  ${flexCenter}
  border-top: 1px solid ${themes.preto};
  border-right: 1px solid ${themes.preto};
  border-bottom: 1px solid ${themes.preto};
  color: ${themes.branco};
  background-color: ${themes.roxo};
  border-radius: 0 8px 8px 0;
`

export const InputTitle = styled.input`
  font-size: ${variaveis.medium};
  font-weight: bold;
  border-bottom: 1px solid;
  width: 100%;
  text-align: center;
  height: 20px;
  background-color: transparent;
  border: none;
`
export const CardBtns = styled.div`
  display: flex;
  margin-right: 32px;
  font-size: ${variaveis.small};
  gap: 20px;
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
  font-size: ${variaveis.medium};
  border-bottom: 1px solid ${themes.preto};
`
export const InputCardDescription = styled.input`
  width: 85%;
  padding: 18px;
  border: none;
  font-size: ${variaveis.medium};
  background-color: transparent;
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
