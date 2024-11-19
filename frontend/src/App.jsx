import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/Cart/Cart'
import placeOrder from './pages/placeOrder/placeOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        < Route path = '/' element={<Home/>} />
        < Route path='/cart' element={<Cart/>} />
        < Route path='/Order' element={<placeOrder/>} />
      </Routes>
    </div>
  )
}

export default App
