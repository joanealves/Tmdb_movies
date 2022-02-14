import styled from 'styled-components'
import { COLORS } from '../../constants/colors'
import * as S from 'react-router-dom'

const marginBottom = `
  margin-bottom: 10px;
`

export const ListMoviesConteiner = styled.div`
  background: ${COLORS.white};
  color: ${COLORS.black};
  ${props => props.isPadding && `padding: 40px 16px;`};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;


  @media (min-width: 768px) {
    text-align: center;
    padding: 40px 32px;
    justify-content: center;
    gap: 32px;
  }
  @media (min-width: 1440px) {
    padding: 28px 112px 79px;
  } 
`

export const PosterCard = styled.img`
  ${marginBottom}
`

export const MovieCard = styled(S.Link)`
    text-decoration: none;
   ${marginBottom}
`