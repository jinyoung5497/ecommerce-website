import React from 'react'
import { Category, BestGear } from '.'
import speaker1 from '../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import speaker2 from '../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { getProductId } from '../slices/productSlice'
import { useNavigate } from 'react-router-dom'

export default function Speaker() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.value)
  const navigate = useNavigate()
  const seeProduct = (id: string) => {
    dispatch(getProductId(id))
    navigate('/seeProduct')
  }
  return (
    <>
      <div>
        <div className='bg-black-light text-white flex items-center justify-center h-60'>
          <h1 className='450px:text-4xl'>speakers</h1>
        </div>
        <div className='grid grid-cols-2 w-full p-20 px-40 gap-40 items-center justify-center 1150px:grid-cols-1 1150px:gap-20 350px:gap-10  1150px:items-start 650px:px-20 550px:px-10'>
          <img src={speaker1} alt='speaker1' className='w-fit rounded-lg' />
          <div className='w-fit gap-y-8 350px:gap-y-4 flex flex-col items-start justify-center flex-wrap'>
            <p className='overlines'>new product</p>
            <div>
              <h2 className='350px:text-3xl'>zx9</h2>
              <h2 className='350px:text-3xl'>speaker</h2>
            </div>
            <p className='text-zinc-400 text-lg 350px:text-md'>
              Upgrade your sound system with the all new ZX9 active speaker.
              It's a bookshelf speaker system that offers truly wireless
              connectivity - creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button
              className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
              onClick={() => seeProduct('6487ccb5ca8382e9725d607a')}
            >
              see product
            </button>
          </div>
          <img
            src={speaker2}
            alt='speaker2'
            className='w-fit hidden 1150px:block rounded-lg'
          />

          <div className='w-fit gap-y-8 350px:gap-y-4 flex flex-col items-start justify-center flex-wrap'>
            <div>
              <h2 className='350px:text-3xl'>zx7</h2>
              <h2 className='350px:text-3xl'>speaker</h2>
            </div>
            <p className='text-zinc-400 text-lg 350px:text-md'>
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <button
              className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
              onClick={() => seeProduct('6487ccb5ca8382e9725d6079')}
            >
              see product
            </button>
          </div>
          <img
            src={speaker2}
            alt='speaker2'
            className='w-fit 1150px:hidden rounded-lg'
          />
        </div>
      </div>
      <Category />
      <BestGear />
    </>
  )
}
