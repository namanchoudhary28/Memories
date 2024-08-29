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
    },
    del(state,action){
        // console.log(state,action.payload)
        return state.filter(item => item._id !== action.payload);

    },
    searchPost(state,action){
        return [...action.payload]
    }

  
  },
})
export const createPost=(post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post)
        dispatch(add(post))
        


        
    } catch (error) {
        console.log(error.message)
        
    }
}
export const getPosts=() => async (dispatch) =>{
    try {
        const {data} = await api.fetchPosts()
        dispatch(get(data))
        
        
    } catch (error) {
        console.log(error.message)
        
    }
}
export const deletePost=(post) => async (dispatch) =>{
    try {
        const {data} = await api.deletePost(post)
        dispatch(del(post.id))
        


        
    } catch (error) {
        console.log(error.message)
        
    }
}
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
    //   dispatch({ type: START_LOADING });
    console.log(searchQuery)
      const { data } = await api.searchPost(searchQuery);
      console.log(data)
      dispatch(searchPost(data.data))

    } catch (error) {
      console.log(error);
    }
  };
  
export const { add,get,del,searchPost } = postSlice.actions

export default postSlice.reducer