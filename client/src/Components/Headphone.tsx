import React from 'react'
import { Category, BestGear } from '.'
import headphone1 from '../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import headphone2 from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import headphone3 from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { getProductId } from '../slices/productSlice'
import { useNavigate } from 'react-router-dom'

export default function Headphone() {
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
          <h1>headphones</h1>
        </div>
        <div className='grid grid-cols-2 grid-rows-3 w-full p-20 px-40 gap-40 items-center justify-center'>
          <img src={headphone1} alt='headphone1' className='w-fit' />
          <div className='w-fit gap-y-8 flex flex-col items-start justify-center flex-wrap'>
            <p className='overlines'>new product</p>
            <div>
              <h2>xx99 mark ii</h2>
              <h2>headphones</h2>
            </div>
            <p className='text-zinc-400 text-lg'>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button
              className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
              onClick={() => seeProduct('6487ccb5ca8382e9725d6078')}
            >
              see product
            </button>
          </div>
          <div className='w-fit gap-y-8 flex flex-col items-start justify-center flex-wrap'>
            <div>
              <h2>xx99 mark i</h2>
              <h2>headphones</h2>
            </div>
            <p className='text-zinc-400 text-lg'>
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <button
              className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
              onClick={() => seeProduct('6487ccb5ca8382e9725d6077')}
            >
              see product
            </button>
          </div>
          <img src={headphone2} alt='headphone2' className='w-fit' />
          <img src={headphone3} alt='headphone3' className='w-fit' />
          <div className='w-fit gap-y-8 flex flex-col items-start justify-center flex-wrap'>
            <div>
              <h2>xx59</h2>
              <h2>headphones</h2>
            </div>
            <p className='text-zinc-400 text-lg'>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <button
              className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
              onClick={() => seeProduct('6487ccb5ca8382e9725d6076')}
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
