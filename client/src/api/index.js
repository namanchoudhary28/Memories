import axios from 'axios'

const url='http://localhost:5000/posts'
const authUrl='http://localhost:5000/auth'
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});
export const fetchPosts= () => API.get('/posts')
export const createPost= (newPost) => API.post('/posts/create',newPost)
export const deletePost= (newPost) => API.post('/posts/delete',newPost)
export const signUp= (form) => API.post('/auth/signUp',form)
export const signIn= (form) => API.post('/auth/signIn',form)
export const searchPost= (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.smemo || 'none'}&tags=${searchQuery.tags}`)
// export const searchPost= (searchQuery) => API.get('/posts/search')