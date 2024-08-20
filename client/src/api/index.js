import axios from 'axios'

const url='http://localhost:5000/posts'
const authUrl='http://localhost:5000/auth'

export const fetchPosts= () => axios.get(url)
export const createPost= (newPost) => axios.post(url+'/create',newPost)
export const deletePost= (newPost) => axios.post(url+'/delete',newPost)
export const signUp= (form) => axios.post(authUrl+'/signUp',form)