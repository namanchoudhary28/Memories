import React from 'react'
import Navbar from '../Navbar/Navbar'
import Form from '../Form/Form'
import Posts from '../Post/Posts'

import '../../components/Home/home.css'
import Search from '../Form/Search'
const Home = () => {
  return (
    <>
      <div className='main-home'>
        {/* <div><Navbar /></div> */}
        <div className='main-content-home'>
            <div className='child postDiv'><Posts/></div>
            <div className='child formDiv'>
              <Search />
              <Form/>
              </div>

        </div>


        </div>


      
    {/* <Navbar />

    <div className='main-content-home'>
      <div className='child postDiv'><Posts/></div>
      <div className='child formDiv'><Form/></div>

    </div> */}

    
    </>
    )
}

export default Home