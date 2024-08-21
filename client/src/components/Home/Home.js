import React from 'react'
import Navbar from '../Navbar/Navbar'
import Form from '../Form/Form'
import Posts from '../Post/Posts'
import {Provider} from 'react-redux'
import store from '../../store/store'
import '../../components/Home/home.css'
const Home = () => {
  return (
    <>
    <Provider store={store}>
      <div className='main-home'>
        <div><Navbar /></div>
        <div className='main-content-home'>
            <div className='child postDiv'><Posts/></div>
            <div className='child formDiv'><Form/></div>

        </div>


        </div>


      
    {/* <Navbar />

    <div className='main-content-home'>
      <div className='child postDiv'><Posts/></div>
      <div className='child formDiv'><Form/></div>

    </div> */}
    </Provider>

    
    </>
    )
}

export default Home