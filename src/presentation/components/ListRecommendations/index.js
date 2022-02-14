import React, {useEffect, useState} from 'react'

import { useAppDispatch } from '../../../data/store'
import { useSelector } from 'react-redux'

import { 
  setInfoDetailsMovie, 
  setInfoCredits, 
  setRecommendation, 
  selectRecommendationSliceData
} from '../../pages/home/state/MoviesSlice'

import { formatDate } from '../../utils/formatDate/index.js'
import { getInfoMovie, getInfoCredits, getRecommendations } from '../../services/index'
import { Text } from '../../styles/global.styles'
import * as S from './styles'

const ListRecommendations = ({
  isPadding,
  movies
}) => {
  const dispatch = useAppDispatch()
  const { recommendation } = useSelector(selectRecommendationSliceData)
 
  const handleMovieClick = async (id) => {
    let info = await getInfoMovie(id)
    let infoCreditsMovie = await getInfoCredits(id)
    let infoRecommendations = await getRecommendations(id)
    
    if (info) dispatch(setInfoDetailsMovie(info))
    if (infoCreditsMovie) dispatch(setInfoCredits(infoCreditsMovie))
    if (infoRecommendations) dispatch(setRecommendation(infoRecommendations))
    
  }

  return (
    <S.ListMoviesConteiner isPadding={isPadding} >
      {recommendation?.results?.map((item) => (
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
export default ListRecommendations