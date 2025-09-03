import styled from 'styled-components'
import themes from '../../styles/themes'
import variaveis from '../../styles/variaveis'
import { device } from '../../styles/breakpoints'

export const ListContainer = styled.div`
  max-width: 800px;
  width: 90%;
  margin-top: 8px;
  overflow-y: scroll;
  height: 60vh;

  ${device.mobile} {
    width: 95%;
    height: 70vh;
  }
`
export const Title = styled.h2`
  color: ${themes.branco};
  font-size: ${variaveis.medium};
  background-color: ${themes.pretoOpaco};
  border-radius: 8px 8px 0 0;
  padding: 4px 0;

  ${device.mobile} {
    font-size: ${variaveis.small};
  }
`
export const TextFilter = styled.p`
  color: ${themes.laranjaClaro};
  margin-top: 10px;
  font-size: ${variaveis.small};

  ${device.mobile} {
    font-size: 10px;
    margin-top: 5px;
  }
`
