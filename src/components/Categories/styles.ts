import styled from 'styled-components'
import themes from '../../styles/themes'

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

  @media (max-width: 769px) {
    margin-top: 10px;
    margin-left: 5px;
  }

  &:hover {
    background-color: ${themes.laranja};
  }
`
