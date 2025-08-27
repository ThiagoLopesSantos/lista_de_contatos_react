import styled from 'styled-components'
import themes from '../../styles/themes'
import { flexCenter } from '../../styles/flex'

export const HeaderContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  background-color: ${themes.azul};
`
