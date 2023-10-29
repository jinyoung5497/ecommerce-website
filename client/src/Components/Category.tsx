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
        <div className='flex items-center justify-between my-40 1150px:my-20'>
          <NavLink onClick={() => window.scrollTo({ top: 0 })} to='/headphone'>
            <div className='group bg-gray rounded-xl mx-4 w-96 1250px:w-72 1150px:w-60 850px:w-48 750px:w-40 650px:w-36 650px:h-32 h-56 1150px:h-40 flex flex-col items-center justify-center cursor-pointer'>
              <img
                src={headphone}
                alt='headphone'
                className='w-60 relative -top-4 1150px:w-40 1150px:-top-9'
              />
              <div className='relative bottom-12'>
                <h6 className='650px:text-sm'>headphones</h6>
                <div className='flex items-center justify-center'>
                  <p className='subtitle text-zinc-400 group-hover:text-orange mr-2'>
                    shop
                  </p>
                  <img src={arrow} alt='arrow' />
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink onClick={() => window.scrollTo({ top: 0 })} to='/speaker'>
            <div className='group bg-gray rounded-xl mx-4 w-96 1250px:w-72 1150px:w-60 850px:w-48 750px:w-40 650px:w-36 650px:h-32 h-56 1150px:h-40 flex flex-col items-center justify-center cursor-pointer'>
              <img
                src={speaker}
                alt='speaker'
                className='w-60 relative -top-4 1150px:w-40 1150px:-top-9'
              />
              <div className='relative bottom-12'>
                <h6 className='650px:text-sm'>speakers</h6>
                <div className='flex items-center justify-center'>
                  <p className='subtitle text-zinc-400 group-hover:text-orange mr-2'>
                    shop
                  </p>
                  <img src={arrow} alt='arrow' />
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink onClick={() => window.scrollTo({ top: 0 })} to='/earphone'>
            <div className='group bg-gray rounded-xl mx-4 w-96 1250px:w-72 1150px:w-60 850px:w-48 750px:w-40 650px:w-36 650px:h-32 h-56 1150px:h-40 flex flex-col items-center justify-center cursor-pointer'>
              <img
                src={earphone}
                alt='earphone'
                className='w-60 relative -top-4 1150px:w-40 1150px:-top-9'
              />
              <div className='relative bottom-12'>
                <h6 className='650px:text-sm'>earphones</h6>
                <div className='flex items-center justify-center'>
                  <p className='subtitle text-zinc-400 group-hover:text-orange mr-2'>
                    shop
                  </p>
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
