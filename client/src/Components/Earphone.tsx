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
          <h1 className='450px:text-4xl'>earphones</h1>
        </div>
        <div className='grid grid-cols-2 w-full p-20 px-40 gap-40 items-center justify-center 1150px:grid-cols-1 1150px:gap-20 350px:gap-10  1150px:items-start 650px:px-20 550px:px-10'>
          <img src={earphone} alt='earphone' className='w-fit rounded-lg' />
          <div className='w-fit gap-y-8 350px:gap-y-4 flex flex-col items-start justify-center flex-wrap'>
            <p className='overlines'>new product</p>
            <div>
              <h2 className='350px:text-3xl'>yx1 wireless</h2>
              <h2 className='350px:text-3xl'>earphones</h2>
            </div>
            <p className='text-zinc-400 text-lg 350px:text-md'>
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
