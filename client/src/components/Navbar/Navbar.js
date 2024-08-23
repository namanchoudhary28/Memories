import React, { useEffect, useState } from 'react'
import '../Navbar/navbar.css'
import image from '../../assests/memories.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode';
import { logout } from '../../store/authSlice'

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOut = () => {
    dispatch(logout());

    navigate('/');

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    console.log((localStorage.getItem('profile')))
    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <>

      <div className='main-div'>

        <div className='child1-app'>
          <div ><h1 className='bg-clr'>Memories</h1></div>
          <div><img src={image} alt='png' width="50" height="60" /></div>
        </div>
        <div className=''>
          {user && user.token ?
            (<div ><button className='btn btn-danger' onClick={logOut}><span style={{ color: 'white' }}>Logout</span> </button></div>)

            :
            (<div ><button className='btn btn-primary'><Link to='/auth'><span style={{ color: 'white' }}>Sign In</span></Link> </button></div>)

          }

        </div>
      </div>




    </>
  )
}

export default Navbar