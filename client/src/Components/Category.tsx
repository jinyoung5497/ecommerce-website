import React from 'react'
import headphone from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphone from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrow from '../assets/shared/desktop/icon-arrow-right.svg'
import { NavLink } from 'react-router-dom'

export default function Recommend() {
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className='flex items-center justify-between my-40'>
          <NavLink to='/headphone'>
            <div className='bg-gray rounded-xl mx-4 w-96 xl:w-72 lg:w-52 md:w-40 h-56 flex flex-col items-center justify-center cursor-pointer'>
              <img
                src={headphone}
                alt='headphone'
                className='w-60 relative -top-4'
              />
              <div className='relative bottom-12'>
                <h6>headphones</h6>
                <div className='flex items-center justify-center'>
                  <p className='subtitle text-zinc-400 mr-2'>shop</p>
                  <img src={arrow} alt='arrow' />
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to='/speaker'>
            <div className='bg-gray rounded-xl mx-4 w-96 xl:w-72 lg:w-52 md:w-40 h-56 flex flex-col items-center justify-center cursor-pointer'>
              <img
                src={speaker}
                alt='speaker'
                className='w-60 relative -top-4'
              />
              <div className='relative bottom-12'>
                <h6>speakers</h6>
                <div className='flex items-center justify-center'>
                  <p className='subtitle text-zinc-400 mr-2'>shop</p>
                  <img src={arrow} alt='arrow' />
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to='/earphone'>
            <div className='bg-gray rounded-xl mx-4 w-96 xl:w-72 lg:w-52 md:w-40 h-56 flex flex-col items-center justify-center cursor-pointer'>
              <img
                src={earphone}
                alt='earphone'
                className='w-60 relative -top-4'
              />
              <div className='relative bottom-12'>
                <h6>earphones</h6>
                <div className='flex items-center justify-center'>
                  <p className='subtitle text-zinc-400 mr-2'>shop</p>
                  <img src={arrow} alt='arrow' />
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}