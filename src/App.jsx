import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes ,Route} from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'

function App() {
  const[showLogin,setshowLogin]=useState(false)
  return (
    <>
    {showLogin?<Loginpopup setshowLogin={setshowLogin}/>:<></>}
    
    <div className='app'>
<Navbar setshowLogin={setshowLogin}/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart'element={<Cart/>}/>
  <Route path='/order' element={<Placeorder/>}/>
</Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App