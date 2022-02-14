import React from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../../data/store'

import { 
  setInfoDetailsMovie, 
  setInfoCredits, 
  setRecommendation
} from '../../pages/home/state/MoviesSlice'

import { formatDate } from '../../utils/formatDate/index.js'
import { getInfoMovie, getInfoCredits, getRecommendations } from '../../services/index'
import { Text } from '../../styles/global.styles'
import * as S from './styles'

const ListMovies = ({
  isPadding,
  movies
}) => {
  const dispatch = useAppDispatch()
  // const { page } = useSelector(selectedPage)

  const handleMovieClick = async (id) => {
    let info = await getInfoMovie(id)
    let infoCreditsMovie = await getInfoCredits(id)
    // let infoRecommendations = await getRecommendations(id, page)
    let infoRecommendations = await getRecommendations(id)

    if (info) dispatch(setInfoDetailsMovie(info))
    if (infoCreditsMovie) dispatch(setInfoCredits(infoCreditsMovie))
    if (infoRecommendations) dispatch(setRecommendation(infoRecommendations))

  }

  return (
    <S.ListMoviesConteiner isPadding={isPadding} >
      {movies?.results?.map((item) => (
        <div>
          <S.MovieCard
            to="/sinopse"
            onClick={() => handleMovieClick(item.id)}
          >
            <S.PosterCard src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt='Ilustrações capa de filmes' />
            <h5>{item.title}</h5>
            <Text fontSize="12px">{formatDate(item.release_date)}</Text>
          </S.MovieCard>
        </div>

      ))
      }
    </S.ListMoviesConteiner>
  )
}
export default ListMovies