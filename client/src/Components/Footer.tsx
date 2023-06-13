import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/shared/desktop/logo.svg'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'

export default function Footer() {
  return (
    <>
      <div className='h-96 bg-black-light flex p-20'>
        <div className='w-1/2'>
          <img src={logo} alt='logo' className='mb-10' />
          <p className='text-zinc-500 whitespace-pre-line mr-20 mb-16 text-lg'>
            Audiophile is an all in one stop to fulfil your audio needs. We're a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we're open 7 days a week
          </p>
          <p className='text-zinc-500 text-lg font-bold'>
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        <div className='w-1/2 flex items-end flex-col'>
          <div className='flex gap-10 text-[14px] mb-32'>
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
          <div className='flex gap-4'>
            <img src={facebook} alt='facebook' />
            <img src={twitter} alt='twitter' />
            <img src={instagram} alt='instagram' />
          </div>
        </div>
      </div>
    </>
  )
}
