import styled from 'styled-components'
import { flexCenter } from '../../styles/flexCenter'
import themes from '../../styles/themes'
import variaveis from '../../styles/variaveis'
import { device } from '../../styles/breakpoints'

export const FormContainer = styled.form`
  ${flexCenter}
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  background-color: ${themes.cinzaClaro};
  border-radius: 8px;
  box-shadow: 0 4px 6px ${themes.cinzaEscuro};
  width: 100%;
  margin-top: 20px;
  max-width: 500px;

  ${device.mobile} {
    padding: 15px;
    max-width: 95%;
    margin-top: 15px;
  }
`

export const IptCamp = styled.div`
  ${flexCenter}
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid ${themes.preto};
  font-size: ${variaveis.medium};
  text-transform: capitalize;

  input {
    width: 80%;
    background-color: ${themes.laranjaClaro};
    font-size: ${variaveis.medium};
    text-align: start;
    border: none;
    padding: 10px;
    height: 25px;
  }

  ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    font-size: ${variaveis.small};

    input {
      width: 100%;
      font-size: ${variaveis.small};
      height: 35px;
      padding: 5px;
    }
  }
`

export const InputCtg = styled.div`
  ${flexCenter}
  gap: 10px;

  ${device.mobile} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }
`
export const InputContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
  text-transform: capitalize;
  gap: 10px;
  width: 100%;
  padding: 20px 0;
  background-color: ${themes.laranjaClaro};

  ${device.mobile} {
    padding: 15px 0;
    gap: 8px;
  }
`
