import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../../data/store'

import { setGenres } from './state/MoviesSlice'

import ListMovies from '../../components/ListMovies'
import { getMovies, getGenre, getDiscover } from '../../services/index'
import CustomPagination from './sub-components/CustomPagination'

import { selectedGenress } from '../home/state/MoviesSlice'
 

import { Text, Button, Wrapper } from '../../styles/global.styles'
import * as S from './styles'
 
 
const Home = () => {
  const dispatch = useAppDispatch() 
  const { genres } = useSelector(selectedGenress)

 const [movies, setMovies] = useState([])
 const [genre, setGenre] = useState([])
 const [page, setPage] = useState(1)
 
 
 useEffect(() => {
   getGenre().then(response => {
     if (response) setGenre(response.genres)
   })
 }, [])
 
 useEffect(() => {
 
   if (genres.length) {
     (async () => {
       setMovies(await getDiscover(genres, page))
     })()
   } else {
     getMovies(page).then(response => {
       if (response) setMovies(response)
     })
   }
 }, [genres, page])
 
 
 const handleSelectedGenres = (genreId) => {
   if (genres.includes(genreId)) {
     let isSelect = genres.filter((a) => a !== genreId)
    dispatch(setGenres(isSelect))
   } else {
    dispatch(setGenres([...genres, genreId]))
   }
 }
 
 const handleGenreClick = async (genreId) => {
   handleSelectedGenres(genreId)
 }

 return (
   <div>
     <S.FilterConteiner>
       <h1> Milhões de filmes, séries
         e pessoas para descobrir.
         Experimente já!
       </h1>
       <Text fontSize="14px" mt={36} mb={8} white> FILTRE POR:</Text>
       <Wrapper wrap gap="12px" mt={14}>
         {genre?.map((item, index) => (
           <Button
             key={index}
             onClick={() => handleGenreClick(item?.id)}
             isActive={genres?.includes(item?.id)}
 
           >
             {item.name}
           </Button>
         ))}
       </Wrapper>
     </S.FilterConteiner>
     <ListMovies isPadding movies={movies} />
     <CustomPagination setPage={setPage} />
   </div>
 )
}
export default Home