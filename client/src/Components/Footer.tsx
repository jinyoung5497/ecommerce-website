import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/shared/desktop/logo.svg'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'

export default function Footer() {
  return (
    <>
      <div className='h-96 650px:h-full bg-black-light flex p-20 1150px:p-10 w-full'>
        <div className='flex-1 w-1/2 overflow-hidden 1150px:hidden'>
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
        <div className='flex-1 w-1/2 flex items-end flex-col 1150px:hidden'>
          <div className='flex gap-10 text-[14px] mb-32'>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to='/'
              className='uppercase text-white hover:text-orange tracking-widest cursor-pointer'
            >
              home
            </NavLink>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to='headphone'
              className='uppercase text-white hover:text-orange tracking-widest cursor-pointer'
            >
              headphones
            </NavLink>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to='speaker'
              className='uppercase text-white hover:text-orange tracking-widest cursor-pointer'
            >
              speakers
            </NavLink>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to='earphone'
              className='uppercase text-white hover:text-orange tracking-widest cursor-pointer'
            >
              earphones
            </NavLink>
          </div>
          <div className='flex gap-4'>
            <img src={facebook} alt='facebook' className='' />
            <img src={twitter} alt='twitter' />
            <img src={instagram} alt='instagram' />
          </div>
        </div>

        <div className='1150px:flex 1150px:flex-col 1150px:items-start  hidden 650px:items-center'>
          <img src={logo} alt='logo' className='mb-10' />
          <div className='flex gap-10 text-[14px] mb-10 650px:flex-col'>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to='/'
              className='uppercase text-white hover:text-orange tracking-widest cursor-pointer 650px:text-center'
            >
              home
            </NavLink>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to='headphone'
              className='uppercase text-white hover:text-orange tracking-widest cursor-pointer 650px:text-center'
            >
              headphones
            </NavLink>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to='speaker'
              className='uppercase text-white hover:text-orange tracking-widest cursor-pointer 650px:text-center'
            >
              speakers
            </NavLink>
            <NavLink
              onClick={() => window.scrollTo({ top: 0 })}
              to='earphone'
              className='uppercase text-white hover:text-orange tracking-widest cursor-pointer 650px:text-center'
            >
              earphones
            </NavLink>
          </div>
          <p className='text-zinc-500 whitespace-pre-line mb-10 text-lg 650px:text-center 650px:text-md'>
            Audiophile is an all in one stop to fulfil your audio needs. We're a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we're open 7 days a week
          </p>
          <div className='flex justify-between w-full 650px:flex-col 650px:items-center 650px:gap-4'>
            <p className='text-zinc-500 text-lg font-bold 650px:text-sm'>
              Copyright 2021. All Rights Reserved
            </p>
            <div className='flex gap-4'>
              <img src={facebook} alt='facebook' />
              <img src={twitter} alt='twitter' />
              <img src={instagram} alt='instagram' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
