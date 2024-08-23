import {createSlice} from '@reduxjs/toolkit'
import * as api from '../api'

const initialState = {authData:null}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state,action) {
        console.log(action.payload)
        console.log(JSON.stringify(action.payload))
      localStorage.setItem('profile',JSON.stringify(action.payload))
      return {...state,authData:action.payload}
    },
    logout(state,action){
        localStorage.clear()
        return {...state,authData:null}

    }


  
  },
})

export const { login,logout } = authSlice.actions

export default authSlice.reducer