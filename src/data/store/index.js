import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import MoviesSlice from '../../presentation/pages/home/state/MoviesSlice'

const store = configureStore({
    reducer: {
        infoDetails: MoviesSlice
    },
  })
  
  export const useAppDispatch = () => useDispatch()
  
  export default store