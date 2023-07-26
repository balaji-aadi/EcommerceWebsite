import React from 'react'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import StripePay from './StripePay'
// import StripeSuccess from './StripeSuccess'

const App = () => {
  const user = useSelector(state => state.user.currentUser)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path="/register" element={user ? <Navigate to="/" replace /> :  <Register />}  />
          <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/pay' element ={<StripePay/>} />
          <Route path='/success' element ={<StripeSuccess/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
