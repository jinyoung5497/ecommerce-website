import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/shared/desktop/logo.svg'
import shoppingCart from '../assets/shared/desktop/icon-cart.svg'
import { useDispatch } from 'react-redux'
import { cartDisplay } from '../slices/productSlice'

export default function Navbar() {
  const dispatch = useDispatch()

  return (
    <>
      <div className='sticky top-0 z-50 w-full'>
        <div className='px-80 bg-black-light text-white h-24 flex items-center justify-between  '>
          <img src={logo} alt='logo' />
          <div className='flex gap-10  text-[14px] items-center md:w-fit'>
            <NavLink
              to='/'
              className='uppercase text-white tracking-widest cursor-pointer'
            >
              home
            </NavLink>
            <NavLink
              to='headphone'
              className='uppercase text-white tracking-widest cursor-pointer'
            >
              headphones
            </NavLink>
            <NavLink
              to='speaker'
              className='uppercase text-white tracking-widest cursor-pointer'
            >
              speakers
            </NavLink>
            <NavLink
              to='earphone'
              className='uppercase text-white tracking-widest cursor-pointer'
            >
              earphones
            </NavLink>
          </div>
          <img
            src={shoppingCart}
            alt='shoppingCart'
            onClick={() => dispatch(cartDisplay())}
          />
        </div>
        <div className='mx-80 border-b-[1px] border-[#ffffff3f]'></div>
      </div>
    </>
  )
}
