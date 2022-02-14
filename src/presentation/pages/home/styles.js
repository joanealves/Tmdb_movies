import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const FilterConteiner = styled.section`
  color: ${COLORS.white};
  background: ${COLORS.purple2d};
  padding: 40px 16px;

  @media (min-width: 768px) {
    text-align: center;
    padding: 40px 32px;
  }
  @media (min-width: 1440px) {
    padding: 84px 200px;
  }

`
