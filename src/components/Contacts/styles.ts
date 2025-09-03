import styled from 'styled-components'
import themes from '../../styles/themes'
import { flexCenter } from '../../styles/flexCenter'
import variaveis from '../../styles/variaveis'
import { IMaskInput } from 'react-imask'
import { device } from '../../styles/breakpoints'

export const Card = styled.div`
  background-color: ${themes.cinzaClaro};
  box-shadow: 0 4px 4px ${themes.pretoOpaco};
  border-radius: 0 0 8px 8px;
  margin-bottom: 4px;
  padding: 5px 0;

  ${device.mobile} {
    margin-bottom: 8px;
    padding: 8px 0;
  }
`
export const CardActions = styled.div`
  display: flex;
  height: 20px;
  margin-bottom: 8px;
  justify-content: space-between;
  text-transform: capitalize;

  ${device.mobile} {
    flex-direction: column;
    height: auto;
    margin-bottom: 10px;
    align-items: center;
    gap: 10px;
  }
`
export const CardTag = styled.span`
  ${flexCenter}
  border-top: 1px solid ${themes.preto};
  border-right: 1px solid ${themes.preto};
  border-bottom: 1px solid ${themes.preto};
  color: ${themes.branco};
  background-color: ${themes.roxo};
  border-radius: 0 8px 8px 0;

  ${device.mobile} {
    width: fit-content;
    border-radius: 8px;
    padding: 5px 10px;
  }
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

  ${device.mobile} {
    font-size: ${variaveis.small};
    height: 30px;
    padding: 5px;
  }
`
export const CardBtns = styled.div`
  display: flex;
  margin-right: 32px;
  font-size: ${variaveis.small};
  gap: 20px;

  ${device.mobile} {
    margin-right: 0;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
`

export const CardData = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin: 0 32px;
  border: 1px solid ${themes.cinzaEscuro};
  background-color: ${themes.laranjaClaro};

  ${device.mobile} {
    margin: 0 10px;
  }
`

export const CardInputs = styled.div`
  ${flexCenter}
  width: 100%;
  padding: 0 10px;
  text-align: start;
  font-size: ${variaveis.medium};
  border-bottom: 1px solid ${themes.preto};

  ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    font-size: ${variaveis.small};
  }
`
export const InputCardDescription = styled.input`
  width: 85%;
  padding: 18px;
  border: none;
  font-size: ${variaveis.medium};
  color: ${themes.preto};
  background-color: transparent;

  ${device.mobile} {
    width: 100%;
    padding: 8px;
    font-size: ${variaveis.small};
  }
`
export const StyledIMaskInput = styled(IMaskInput)`
  width: 85%;
  padding: 18px;
  border: none;
  font-size: ${variaveis.medium};
  background-color: transparent;

  ${device.mobile} {
    width: 100%;
    padding: 8px;
    font-size: ${variaveis.small};
  }
`
