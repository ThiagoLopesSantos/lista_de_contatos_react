import styled from 'styled-components'
import themes from '../../styles/themes'
import { flexCenter } from '../../styles/flex'
import { Props } from '.'

export const CtgContainer = styled.div`
  ${flexCenter}
  margin-top: 20px;
  padding: 8px;
  width: 100%;
  gap: 20px;
  color: ${themes.branco};
  background-color: ${themes.roxo};
  font-weight: bold;

  @media (max-width: 769px) {
    display: block;
  }
`
export const BtnCategory = styled.button<Props>`
  background-color: ${(props) =>
    props.active ? `${themes.laranja}` : `transparent`};
  color: ${themes.branco};
  border: 1px solid ${themes.branco};
  padding: 4px;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 769px) {
    margin-top: 10px;
    margin-left: 5px;
  }

  &:hover {
    background-color: ${themes.laranja};
  }
`
