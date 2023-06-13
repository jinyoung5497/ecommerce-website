import React from 'react'
import { Recommend } from '.'
import hero from '../assets/home/desktop/image-hero.jpg'
import speaker1 from '../assets/home/desktop/image-speaker-zx9.png'
import pattern from '../assets/home/desktop/pattern-circles.svg'

export default function Home() {
  return (
    <>
      {/* HERO (trying grid) */}
      <div className='h-fit bg-white-off w-fit '>
        <img src={hero} alt='hero' className=' w-fit' />
        <div className='absolute top-72 w-96 ml-80'>
          <p className='text-white overlines mb-5'>new product</p>
          <h1 className='text-white mb-10'>xx99 mark ii headphones</h1>
          <p className='text-gray mb-10 mr-5'>
            Experience natural, lifelike audio and exceptional build quality
            made fro the passionate music enthusiast.
          </p>
          <button className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'>
            SEE PRODUCT
          </button>
        </div>
      </div>
      {/* Recommendation */}
      <Recommend />
      {/* PRODUCTS */}
      {/* <section className='flex items-center justify-center'>
        <div className='bg-orange flex items-center justify-center px-28 pt-28 rounded-xl'>
          <div className=' flex flex-col'>
            <img
              src={speaker1}
              alt='speaker1'
              className='w-96 h-fit justify-self-end object-cover'
            />
            <img
              src={pattern}
              alt='pattern'
              className='w-fit h-fit object-cover'
            />
          </div>
          <div className='w-1/2 text-white'>
            <h1 className='mb-1'>zx9</h1>
            <h1 className='mb-10'>speaker</h1>
            <p className='mb-10 w-5/6'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button>see product</button>
          </div>
        </div>
      </section> */}
    </>
  )
}
