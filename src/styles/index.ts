import styled, { createGlobalStyle } from 'styled-components'
import { flexCenter } from './flexCenter'

const EstiloGlobal = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Source Code Pro", sans-serif;
      list-style: none;
    }
`

export const Container = styled.div`
  ${flexCenter}
  flex-direction: column;
`
export default EstiloGlobal
