import { configureStore, Tuple } from '@reduxjs/toolkit'
import postSlice from './postSlice'
import editSlice from './editSlice'

const store=configureStore({
  reducer: {
    post:postSlice,
    edit:editSlice
  },


})

export default store