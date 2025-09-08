import styled from 'styled-components'
import themes from '../../styles/themes'
import { device } from '../../styles/breakpoints'

type PropsActive = { $active: boolean }

export const BtnCategory = styled.button<PropsActive>`
  background-color: ${(props) =>
    props.$active ? `${themes.laranja}` : `transparent`};
  color: ${themes.branco};
  border: 1px solid ${themes.branco};
  padding: 4px;
  cursor: pointer;
  font-weight: bold;
  text-transform: capitalize;

  ${device.mobile} {
    width: 100%;
    padding: 8px 12px;
  }

  &:hover {
    background-color: ${themes.laranja};
  }
`
