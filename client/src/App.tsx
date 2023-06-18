import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Cart,
  CheckOut,
  Earphone,
  Footer,
  Navbar,
  Home,
  Headphone,
  OrderComplete,
  SeeProduct,
  Speaker,
} from './Components'

function App() {
  return (
    <>
      <OrderComplete />
      <Cart />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='headphone' element={<Headphone />} />
        <Route path='speaker' element={<Speaker />} />
        <Route path='earphone' element={<Earphone />} />
        <Route path='seeProduct' element={<SeeProduct />} />
        <Route path='checkout' element={<CheckOut />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
