import { useState } from 'react'
import { Routes } from './Routes'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px:px-[7vw ] lg:px-[9vw]">

      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/collection" element={<Collection/>}/>
         <Route path="/contact" element={<Contact/>}/>
        <Route path='/product/:productId' 
        element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>    
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      
    </div>
  );
}

export default App
