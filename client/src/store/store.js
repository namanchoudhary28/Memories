import { configureStore, Tuple } from '@reduxjs/toolkit'
import postSlice from './postSlice'
import editSlice from './editSlice'
import authSlice from './authSlice'

const store=configureStore({
  reducer: {
    post:postSlice,
    edit:editSlice,
    auth:authSlice
  },


})

export default store