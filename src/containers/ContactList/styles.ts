import styled from 'styled-components'
import themes from '../../styles/themes'
import variaveis from '../../styles/variaveis'

export const ListContainer = styled.div`
  max-width: 800px;
  width: 90%;
  margin-top: 8px;
  overflow-y: scroll;
  height: 60vh;
`
export const Title = styled.h2`
  color: ${themes.branco};
  font-size: ${variaveis.medium};
  background-color: ${themes.pretoOpaco};
  border-radius: 8px 8px 0 0;
  padding: 4px 0;
`
export const TextFilter = styled.p`
  color: ${themes.laranjaClaro};
  margin-top: 10px;
  font-size: ${variaveis.small};
`
