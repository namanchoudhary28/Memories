import React from 'react'
import Navbar from '../Navbar/Navbar'
import Form from '../Form/Form'
import Posts from '../Post/Posts'
import {Provider} from 'react-redux'
import store from '../../store/store'
const Home = () => {
  return (
    <>
    <Provider store={store}>
    <Navbar />
    <Form />
    <Posts />
    </Provider>

    
    </>
    )
}

export default Home