import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'
import Home from './components/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />


    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App