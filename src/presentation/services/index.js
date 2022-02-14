import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = 'dded3d1f1e061ae32b03fef3c1bc3294'
const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
const POPULAR_API = (page) => `${API_URL}popular?api_key=${API_KEY}&language=pt-BR&page=${page}`
const INFO_MOVIE_API = (idMovie) => `https://api.themoviedb.org/3/movie/${idMovie}?api_key=dded3d1f1e061ae32b03fef3c1bc3294&language=pt-BR`
const CREDIT_MOVIE_API = (idMovie) => `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=dded3d1f1e061ae32b03fef3c1bc3294&language=pt-BR`
// const RECOMMENDATIONS_API = (idMovie, page) => `https://api.themoviedb.org/3/movie/${idMovie}/recommendations?api_key=dded3d1f1e061ae32b03fef3c1bc3294&language=pt_BR&page=${page}`
const RECOMMENDATIONS_API = (idMovie) => `https://api.themoviedb.org/3/movie/${idMovie}/recommendations?api_key=dded3d1f1e061ae32b03fef3c1bc3294&language=pt_BR&page=1`
const DISCOVER_API = (genreIds, page) => `https://api.themoviedb.org/3/discover/movie?api_key=dded3d1f1e061ae32b03fef3c1bc3294&language=pt-BR&with_genres=${genreIds}&page=${page}`

export const getMovies = async (page) => {
  let result = null

  try {
    const response = await axios.get(POPULAR_API(page))
    if (response?.data) result = response.data
  } catch (err) {
    console.error(err)
  }

  return result
}

export const getGenre = async () => {
  let result = null

  try {
    const response = await axios.get(GENRE_API)

    if (response?.data) result = response.data
  } catch (err) {
    console.error(err)
  }

  return result
}

export const getDiscover = async (genreIds, page) => {
  let result = null

  try {
    const response = await axios.get(DISCOVER_API(genreIds.join("|"), page))
    if (response?.data) result = response.data
  } catch (err) {
    console.error(err)
  }

  return result
}
export const getInfoMovie = async (idMovie) => {
  let result = null

  try {
    const response = await axios.get(INFO_MOVIE_API(idMovie))
    if (response?.data) result = response.data
  } catch (err) {
    console.error(err)
  }

  return result
}
export const getInfoCredits = async (idMovie) => {
  let result = null

  try {
    const response = await axios.get(CREDIT_MOVIE_API(idMovie))
    if (response?.data) result = response.data
  } catch (err) {
    console.error(err)
  }

  return result
}

// export const getRecommendations = async (idMovie, page) => {
export const getRecommendations = async (idMovie) => {
  let result = null

  try {
    // const response = await axios.get(RECOMMENDATIONS_API(idMovie, page))
    const response = await axios.get(RECOMMENDATIONS_API(idMovie))
    if (response?.data) result = response.data
  } catch (err) {
    console.error(err)
  }

  return result
}
