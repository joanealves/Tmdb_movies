import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

import { selectMoviesSliceData, selectCreditsSliceData } from '../home/state/MoviesSlice'

import ListRecommendations from '../../components/ListRecommendations'

import { formatDate } from '../../utils/formatDate/index.js'
import { formatPercentage } from '../../utils/formatPercentage/index.js'

import * as S from './styles'

import { Text } from '../../styles/global.styles'


const Synopis = () => {
  const { infoDetailsMovie } = useSelector(selectMoviesSliceData)
  const { infoCredits } = useSelector(selectCreditsSliceData)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [infoDetailsMovie ])

  const asPercentage = (vote) => {
    if ( vote <= 3) return 'partialOneCircule'
    if (vote >= 3.1 && vote <= 6.9 ) return 'partialTwoCircule'
    if (vote >= 7 && vote <= 9.3 ) return 'partialLastCircule'
    if (vote >= 9.4 ) return 'totalCircule'
  }

  return (
    <div>
      <S.SinopseConteiner desktopFlex>
        <S.PosterMovieConteiner>
          <S.PosterMovie src={`https://image.tmdb.org/t/p/original/${infoDetailsMovie?.poster_path}`} alt='Ilustração Pôster Filme' />
        </S.PosterMovieConteiner>
        <S.DescriptionConteiner>
          <h2>{infoDetailsMovie?.title}</h2>
          <S.DescriptionHeader>
            <S.Description>16 anos</S.Description>
            <S.Description>{formatDate(infoDetailsMovie?.release_date)} </S.Description>
            <S.Description>Ação, Aventura, Comédia, Ficção ciêntífica </S.Description>
            {/* <S.Description> 1h 47m </S.Description> */}
            <S.Description> {infoDetailsMovie?.runtime} </S.Description>
          </S.DescriptionHeader>
          <S.AssessmentConteiner>
            <S.Percentage>
            <S.BorderGreen options={asPercentage(infoDetailsMovie?.vote_average)}>
                <Text green>{formatPercentage(infoDetailsMovie?.vote_average)} </Text>
              </S.BorderGreen>
            </S.Percentage>
            <p> Avaliação dos usúarios</p>
          </S.AssessmentConteiner>
          <h4>Sinopse</h4>
          <S.DescriptionText>{infoDetailsMovie?.overview}</S.DescriptionText>
          <S.CharacterConteiner>
            {infoCredits?.crew?.map((item, index) => (
              <S.CharactersContents key={`index:${index}`}>
                <h5>{item?.name}</h5>
                <Text fontSize="14px" mt={4} white>{item?.job}</Text>
              </S.CharactersContents>
            ))}
          </S.CharacterConteiner>
        </S.DescriptionConteiner>
      </S.SinopseConteiner>
      <S.SinopseConteiner secondSection desktopSecondConteiner>
        <Text fontSize="28px" blackneutral fontBold> Elenco original </Text>
        <S.CastCardsConteiner>
          {infoCredits?.cast?.map((item, index) => (
            <S.CardContent Key={`index:${index}`}>
              <S.ImageCast src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} />
              <Text blackneutral fontSize="18px" fontBold mt={16} mb={16}> {item?.name} </Text >
              <Text blackneutral> {item?.character} </Text>
            </S.CardContent>
          ))}
        </S.CastCardsConteiner>
        <S.TrailerConteiner>
          <h3> Trailer </h3>
          <S.TeaserImgConteiner>
            <S.Teaser src={`https://image.tmdb.org/t/p/original/${infoDetailsMovie?.backdrop_path}`} />
          </S.TeaserImgConteiner>
        </S.TrailerConteiner>
        <div>
          <h3> Recomendações </h3>
          <ListRecommendations />
        </div>
       
      </S.SinopseConteiner>

    </div>
  )
}
export default Synopis