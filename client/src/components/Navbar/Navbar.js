import React from 'react'
import '../Navbar/navbar.css'
import image from '../../assests/memories.png'
const Navbar = () => {
  return (
    <>
    <div className='main'>
      <div><h1>Memories</h1></div>
      <div><img src={image} alt='png' width="50" height="60" /></div>

    </div>
    
    
    </>
  )
}

export default Navbar