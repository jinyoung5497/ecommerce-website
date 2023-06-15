import React from 'react'
import { Category, BestGear } from '.'
import earphone from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { getProductId } from '../slices/productSlice'
import { useNavigate } from 'react-router-dom'

export default function Earphone() {
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
          <h1>earphones</h1>
        </div>
        <div className='grid grid-cols-2 grid-rows-1 w-full p-20 px-40 gap-40 items-center justify-center'>
          <img src={earphone} alt='earphone' className='w-fit' />
          <div className='w-fit gap-y-8 flex flex-col items-start justify-center flex-wrap'>
            <p className='overlines'>new product</p>
            <div>
              <h2>yx1 wireless</h2>
              <h2>earphones</h2>
            </div>
            <p className='text-zinc-400 text-lg'>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <button
              className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
              onClick={() => seeProduct('6487ccb5ca8382e9725d6075')}
            >
              see product
            </button>
          </div>
        </div>
      </div>
      <Category />
      <BestGear />
    </>
  )
}
