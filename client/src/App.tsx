import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  BestGear,
  Cart,
  Category,
  CheckOut,
  Earphone,
  Footer,
  Navbar,
  Home,
  Headphone,
  OrderComplete,
  Recommend,
  SeeProduct,
  Speaker,
} from './Components'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='headphone' element={<Headphone />} />
        <Route path='speaker' element={<Speaker />} />
        <Route path='earphone' element={<Earphone />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
