import React from 'react'
import { Category, BestGear } from '.'
import hero from '../assets/home/desktop/image-hero.jpg'
import speaker1 from '../assets/home/desktop/image-speaker-zx9.png'
import pattern from '../assets/home/desktop/pattern-circles.svg'
import speaker2 from '../assets/home/desktop/image-speaker-zx7.jpg'
import earphone from '../assets/home/desktop/image-earphones-yx1.jpg'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className='h-fit bg-white-off w-fit grid grid-cols-1 grid-rows-1 '>
        <img src={hero} alt='hero' className=' w-fit row-start-1 col-start-1' />
        <div className='w-96 h-full ml-80 row-start-1 col-start-1 flex flex-col justify-center'>
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
      {/* Category */}
      <Category />
      {/* PRODUCTS */}
      <section className='flex flex-col items-center justify-center mx-52'>
        <div className='bg-orange  h-[44rem] flex items-center justify-center px-28 pt-28 rounded-xl  mb-16'>
          <div className='grid grid-rows-1 grid-cols-1 items-center justify-center'>
            <img
              src={speaker1}
              alt='speaker1'
              className='w-96 h-fit z-10 col-start-1 row-start-1'
            />
            <img
              src={pattern}
              alt='pattern'
              className='w-fit h-fit col-start-1 row-start-1'
            />
          </div>
          <div className='w-1/2 text-white mt-10'>
            <h1 className='mb-1'>zx9</h1>
            <h1 className='mb-10'>speaker</h1>
            <p className='mb-10 w-5/6'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className='text-white bg-black hover:bg-black-light p-4 subtitle px-5'>
              see product
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 grid-rows-1 rounded-xl overflow-hidden items-center w-full mb-16'>
          <div className='row-start-1 col-start-1 z-10 ml-20'>
            <h3 className='mb-5'>ZX7 speaker</h3>
            <button className='text-black border-black border-2 hover:bg-black-light p-3 subtitle px-5'>
              see product
            </button>
          </div>
          <img
            src={speaker2}
            alt='speaker2'
            className='row-start-1 col-start-1 w-full'
          />
        </div>
        <div className='flex w-full h-80 items-center justify-between gap-10'>
          <img
            src={earphone}
            alt='earphone'
            className='overflow-hidden rounded-xl w-full h-full'
          />
          <div className='bg-gray w-full h-full rounded-xl flex flex-col items-start justify-center p-20'>
            <h3>yx1 earphones</h3>
            <button className='text-black border-black border-2 p-3 mt-5 subtitle px-5'>
              see product
            </button>
          </div>
        </div>
      </section>
      <BestGear />
    </>
  )
}
