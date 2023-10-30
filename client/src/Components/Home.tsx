import React from 'react'
import { Category, BestGear } from '.'
import hero from '../assets/home/desktop/image-hero.jpg'
import speaker1 from '../assets/home/desktop/image-speaker-zx9.png'
import pattern from '../assets/home/desktop/pattern-circles.svg'
import speaker2 from '../assets/home/desktop/image-speaker-zx7.jpg'
import earphone from '../assets/home/desktop/image-earphones-yx1.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { getProductId } from '../slices/productSlice'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.value)
  const navigate = useNavigate()

  const seeProduct = (id: string) => {
    dispatch(getProductId(id))
    navigate('/seeProduct')
  }
  return (
    <>
      {/* HERO */}
      <div className='h-fit bg-white-off w-fit grid grid-cols-1 grid-rows-1   1150px:place-items-center 1150px:mb-20'>
        <img
          src={hero}
          alt='hero'
          className='row-start-1 col-start-1 850px:h-[40rem]'
        />
        <div className='w-96 max-w-fit h-full ml-80 1150px:ml-0 row-start-1 col-start-1 flex flex-col justify-center 1150px:items-center'>
          <p className='text-slate-500 overlines mb-5'>new product</p>
          <h1 className='text-white mb-10 850px:mb-5 850px:text-5xl 350px:text-4xl text-center'>
            xx99 mark ii headphones
          </h1>
          <p className='text-gray mb-10 mr-5 1150px:text-center'>
            Experience natural, lifelike audio and exceptional build quality
            made fro the passionate music enthusiast.
          </p>
          <button
            className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
            onClick={() => seeProduct('6487ccb5ca8382e9725d6078')}
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
      {/* Category */}
      <Category />
      {/* PRODUCTS */}
      <section className='flex flex-col items-center justify-center mx-52 1350px:mx-40 950px:mx-20 450px:mx-5'>
        <div className='bg-orange  h-[44rem] 1350px:h-[50rem] 350px:h-[44rem] flex items-center justify-center px-28 1350px:px-10 450px:px-3 pt-28 1350px:pt-0 rounded-xl  mb-16 1350px:flex-col'>
          <div className='grid grid-rows-1 grid-cols-1 items-center justify-center 1350px:place-items-center 1350px:relative 1350px:-top-10'>
            <img
              src={speaker1}
              alt='speaker1'
              className='w-96 1350px:w-52 h-fit z-10 col-start-1 row-start-1 550px:w-40'
            />
            <img
              src={pattern}
              alt='pattern'
              className='w-fit 1350px:w-[20rem] h-fit col-start-1 row-start-1'
            />
          </div>
          <div className='w-1/2 text-white mt-10 1350px:mt-0 1350px:relative 1350px:-top-10  1350px:items-center 1350px:flex 1350px:flex-col 550px:w-full'>
            <h1 className='mb-1'>zx9</h1>
            <h1 className='mb-10'>speaker</h1>
            <p className='mb-10 w-5/6 1350px:text-center'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button
              className='text-white bg-black hover:bg-slate-600 p-4 subtitle px-5'
              onClick={() => seeProduct('6487ccb5ca8382e9725d607a')}
            >
              see product
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 grid-rows-1 rounded-xl overflow-hidden items-center w-full mb-16'>
          <div className='row-start-1 col-start-1 z-10 ml-20 650px:ml-10'>
            <h3 className='mb-5'>ZX7 speaker</h3>
            <button
              className='text-black border-black border-2 hover:bg-black-light p-3 subtitle px-5 hover:text-white'
              onClick={() => seeProduct('6487ccb5ca8382e9725d6079')}
            >
              see product
            </button>
          </div>
          <img
            src={speaker2}
            alt='speaker2'
            className='row-start-1 col-start-1 w-full 650px:h-60'
          />
        </div>
        <div className='flex w-full h-80 items-center justify-between gap-10 1050px:gap-4 650px:flex-col 650px:h-fit'>
          <img
            src={earphone}
            alt='earphone'
            className='overflow-hidden rounded-xl w-full h-full 1050px:w-1/2 650px:w-full'
          />
          <div className='bg-gray w-full h-full rounded-xl flex flex-col items-start justify-center p-20 950px:p-10 950px:items-center 1050px:w-1/2 650px:w-full'>
            <h3>yx1 earphones</h3>
            <button
              className='text-black border-black border-2 p-3 mt-5 subtitle hover:text-white hover:bg-black px-5'
              onClick={() => seeProduct('6487ccb5ca8382e9725d6075')}
            >
              see product
            </button>
          </div>
        </div>
      </section>
      <BestGear />
    </>
  )
}
