import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'
import Home from './components/Home/Home'
import {Provider} from 'react-redux'
import store from '../src/store/store'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/posts"  element={<Home />} />
      <Route path="/posts/search"  element={<Home />} />
      <Route path='/auth' element={<Auth />} />


    </Routes>
    
    
    </BrowserRouter>
    </Provider>

  )
}

export default App