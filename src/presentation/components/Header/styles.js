import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const HeaderContainer = styled.header`
  background-color: ${COLORS.purple5c};
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

   @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 0 32px;
  }
}
`

export const HeaderLogo = styled.img`
width: 140px;
}
`