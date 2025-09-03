import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import themes from '../../styles/themes'
import { flexCenter } from '../../styles/flexCenter'
import { device } from '../../styles/breakpoints'

export const LogoContainer = styled.div`
  ${flexCenter}
  max-width: 400px;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0 4px 8px ${themes.preto};
  background-color: ${themes.laranja};

  h1 {
    color: ${themes.branco};
    font-size: ${variaveis.large};
    padding: 16px 32px;

    ${device.mobile} {
      font-size: ${variaveis.medium};
      padding: 10px 20px;
    }
  }
`
