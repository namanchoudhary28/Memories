import {createSlice} from '@reduxjs/toolkit'
import * as api from '../api'

const initialState = []

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    add(state,action) {
      state.push(action.payload)
    },
    get(state,action){
        // console.log(action.payload)
        return [...action.payload]
    }

  
  },
})
export const createPost=(post) => async (dispatch) =>{
    try {
        console.log(post,'api call body')
        const {data} = await api.createPost(post)
        dispatch(add(post))
        


        
    } catch (error) {
        console.log(error.message)
        
    }
}
export const getPosts=() => async (dispatch) =>{
    try {
        console.log("hi")
        const {data} = await api.fetchPosts()
        console.log(data)
        dispatch(get(data))
        
        
    } catch (error) {
        console.log(error.message)
        
    }
}
export const { add,get } = postSlice.actions

export default postSlice.reducer