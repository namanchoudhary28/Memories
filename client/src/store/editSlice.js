import {createSlice} from '@reduxjs/toolkit'
import * as api from '../api'

const initialState = {}

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    update(state,action) {
      return {...action.payload,heading:"Editing a Memory"}
    },


  
  },
})

export const { update } = editSlice.actions

export default editSlice.reducer