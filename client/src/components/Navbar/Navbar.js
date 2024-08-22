import React from 'react'
import '../Navbar/navbar.css'
import image from '../../assests/memories.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
 
    <div className='main-div'>

       <div className='child1-app'>
            <div ><h1 className='bg-clr'>Memories</h1></div>
            <div><img src={image} alt='png' width="50" height="60" /></div>
        </div>
        <div className=''>
            <div ><button className='btn btn-primary'><Link to='/auth'><span style={{color:'white'}}>Sign In</span></Link> </button></div>
        </div>
    </div>
    

    
    
    </>
  )
}

export default Navbar