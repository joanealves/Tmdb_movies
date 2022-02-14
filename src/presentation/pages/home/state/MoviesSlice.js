import { createSlice } from '@reduxjs/toolkit'

const MoviesSlice = createSlice({
    name: 'infoDetails', 
    initialState: {
        data: {
            infoDetailsMovie: [],
            infoCredits: [],
            recommendation: [],
            genres: []
            // page: 1
        }
    },
    reducers: {
        setInfoDetailsMovie: (state, action) => {
            state.data.infoDetailsMovie = action.payload
        },
        setInfoCredits: (state, action) => {
            state.data.infoCredits = action.payload
        },
        setRecommendation: (state, action) => {
            state.data.recommendation = action.payload
        },
        setGenres: (state, action) => {
            state.data.genres = action.payload
        }
    }
})

export default MoviesSlice.reducer

export const {
    setInfoDetailsMovie,
    setInfoCredits,
    setRecommendation,
    setGenres
    // setPage
} = MoviesSlice.actions

export const selectMoviesSliceData = state => state.infoDetails.data
export const selectCreditsSliceData = state => state.infoDetails.data
export const selectRecommendationSliceData = state => state.infoDetails.data
export const selectedGenress = state => state.infoDetails.data
// export const selectedPage = state => state.infoDetails.data