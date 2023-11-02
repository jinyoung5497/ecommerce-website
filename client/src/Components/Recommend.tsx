import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../slices/store'
import { getProductId } from '../slices/productSlice'
import { useNavigate } from 'react-router-dom'

export default function Recommend() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.value)
  const navigate = useNavigate()

  interface Irecommend {
    image: string
    name: string
    _id: string
  }

  const seeProduct = (id: string) => {
    dispatch(getProductId(id))
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center mx-40 950px:mx-20 750px:mx-10 650px:mx-5 my-20'>
        <h2 className='mb-10'>you may also like</h2>
        <div className='flex items-start justify-center gap-10 550px:flex-col'>
          {products.recommend.map((value: Irecommend, index: number) => {
            const newImage = value.image.slice(1)
            return (
              <div
                key={index}
                className='flex flex-col items-center justify-between gap-5 flex-1 h-[25rem] 750px:h-[20rem]'
              >
                <img
                  src={`${newImage}`}
                  alt='product image'
                  className='rounded-xl 550px:h-[20rem] max-w-xs 1250px:w-full'
                />
                <h5 className='text-center 1050px:text-lg'>{value.name}</h5>
                <button
                  className='text-white bg-orange hover:bg-orange-light p-4 subtitle px-5'
                  onClick={() => seeProduct(value._id)}
                >
                  see product
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
