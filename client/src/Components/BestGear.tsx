import React from 'react'
import bestGear from '../assets/shared/desktop/image-best-gear.jpg'

export default function BestGear() {
  return (
    <>
      <div className='flex items-center justify-center  w-full h-full  p-52 gap-32'>
        <div className='w-[96rem]'>
          <h2>Bringing you the</h2>
          <div className='flex items-center justify-start mb-10'>
            <h2 className='mr-2 text-orange'> best</h2>
            <h2> audio gear</h2>
          </div>
          <p className='text-zinc-500 w-[35rem]'>
            Located at the hear of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img
          src={bestGear}
          alt='bestGear'
          className='overflow-hidden rounded-xl w-[96rem]'
        />
      </div>
    </>
  )
}
